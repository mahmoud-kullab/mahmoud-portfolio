import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { getDb } from "./db";
import { contactMessages, blogPosts } from "../drizzle/schema";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    send: publicProcedure
      .input(z.object({
        name: z.string().min(2),
        email: z.string().email(),
        subject: z.string().min(5),
        message: z.string().min(10),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        const result = await db.insert(contactMessages).values(input);
        
        // Notify owner
        await notifyOwner({
          title: `New Contact Message from ${input.name}`,
          content: `Email: ${input.email}\nSubject: ${input.subject}\n\nMessage:\n${input.message}`,
        });
        
        return { success: true, message: "Message sent successfully!" };
      }),
  }),

  blog: router({
    list: publicProcedure.query(async () => {
      const db = await getDb();
      if (!db) return [];
      const { desc } = require('drizzle-orm');
      return await db.select().from(blogPosts).orderBy(desc(blogPosts.published));
    }),
    
    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return null;
        const { or, eq } = require('drizzle-orm');
        const posts = await db.select().from(blogPosts).where(or(eq(blogPosts.slugEn, input.slug), eq(blogPosts.slugAr, input.slug))).limit(1);
        return posts[0] || null;
      }),
  }),
});

export type AppRouter = typeof appRouter;

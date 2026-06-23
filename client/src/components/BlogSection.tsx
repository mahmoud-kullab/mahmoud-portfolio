import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc";
import { BookOpen, ExternalLink } from "lucide-react";

export function BlogSection() {
  const { data: posts, isLoading } = trpc.blog.list.useQuery();

  if (isLoading) {
    return <div className="text-center py-20">Loading blog posts...</div>;
  }

  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <BookOpen className="text-cyan-400" />
          Technical Blog
        </h2>

        {!posts || posts.length === 0 ? (
          <Card className="p-12 bg-background border-border text-center">
            <p className="text-gray-400">No blog posts yet. Check back soon!</p>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="p-6 bg-background border-border hover:border-cyan-400/50 transition cursor-pointer group">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.titleEn}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                )}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg group-hover:text-cyan-400 transition">
                    {post.titleEn}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  {post.descriptionEn}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {post.published ? new Date(post.published).toLocaleDateString() : "Draft"}
                  </span>
                  <a
                    href={`/blog/${post.slugEn}`}
                    className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1"
                  >
                    Read More <ExternalLink size={14} />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

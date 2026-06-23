import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const sendMessage = trpc.contact.send.useMutation({
    onSuccess: () => {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast.error("Failed to send message: " + error.message);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendMessage.mutateAsync(formData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-card/50">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="space-y-4">
            <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="text-cyan-400" size={20} />
                <span className="font-semibold">Email</span>
              </div>
              <a href="mailto:mahmood.kullab2004@gmail.com" className="text-cyan-400 hover:text-cyan-300">
                mahmood.kullab2004@gmail.com
              </a>
            </Card>

            <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="text-cyan-400" size={20} />
                <span className="font-semibold">Phone</span>
              </div>
              <a href="tel:+970599548716" className="text-cyan-400 hover:text-cyan-300">
                +970 599 548 716
              </a>
            </Card>

            <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
              <div className="flex items-center gap-3 mb-3">
                <Linkedin className="text-cyan-400" size={20} />
                <span className="font-semibold">LinkedIn</span>
              </div>
              <a href="https://linkedin.com/in/m-kullab" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                linkedin.com/in/m-kullab
              </a>
            </Card>

            <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
              <div className="flex items-center gap-3 mb-3">
                <Github className="text-cyan-400" size={20} />
                <span className="font-semibold">GitHub</span>
              </div>
              <a href="https://github.com/mahmoud-kullab" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                github.com/mahmoud-kullab
              </a>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 bg-background border-border">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-gray-500 focus:border-cyan-400 outline-none transition"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-gray-500 focus:border-cyan-400 outline-none transition"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-gray-500 focus:border-cyan-400 outline-none transition"
                  placeholder="Subject"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-gray-500 focus:border-cyan-400 outline-none transition h-32 resize-none"
                  placeholder="Your message"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 rounded-lg transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

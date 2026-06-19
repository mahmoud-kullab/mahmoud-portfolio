import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Cyberpunk Minimalism Portfolio
 * Design Philosophy: Bold cyan accents, deep dark backgrounds, sharp geometric elements
 * Color Palette: #00D9FF (cyan), #6B21A8 (purple), #0A0E27 (dark bg), #E8F0FF (light text)
 */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState<"en" | "ar">("en");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => {
    setCurrentLang(currentLang === "en" ? "ar" : "en");
    document.documentElement.lang = currentLang === "en" ? "ar" : "en";
    document.documentElement.dir = currentLang === "en" ? "rtl" : "ltr";
  };

  const content = {
    en: {
      nav: { about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },
      hero: {
        tag: "Cybersecurity Specialist",
        title: "Mahmoud Sami Kullab",
        subtitle: "IT Technician & Security Engineer",
        description: "Specialized in cybersecurity, system maintenance, and network security. Building secure digital infrastructure from Khan Younis, Gaza.",
        cta1: "View My Work",
        cta2: "Get in Touch"
      },
      about: {
        label: "01 // About Me",
        title: "Professional Profile",
        bio: "I am an IT technician with expertise in cybersecurity, system administration, and network security. Currently working with the Palestinian Red Crescent Society, I combine technical knowledge with practical problem-solving to secure and optimize digital systems.",
        stats: [
          { label: "Years Experience", value: "3+" },
          { label: "Projects Completed", value: "15+" },
          { label: "Certifications", value: "17+" },
          { label: "Tools Mastered", value: "100+" }
        ]
      },
      skills: {
        label: "02 // Expertise",
        title: "Technical Skills",
        categories: [
          {
            name: "Cybersecurity",
            skills: ["Penetration Testing", "Vulnerability Assessment", "Network Security", "Ethical Hacking"]
          },
          {
            name: "System Administration",
            skills: ["Windows Server", "Linux Administration", "System Maintenance", "Hardware Repair"]
          },
          {
            name: "Programming",
            skills: ["PowerShell", "Python", "Java", "Bash"]
          },
          {
            name: "Networking",
            skills: ["Cisco Networking", "Network Configuration", "Firewall Management", "VPN Setup"]
          }
        ]
      },
      projects: {
        label: "03 // Projects",
        title: "Key Projects",
        items: [
          {
            title: "ProLaptop Ultimate v3.3",
            icon: "🛡️",
            tech: ["PowerShell", "BAT", "WinPE"],
            description: "Comprehensive Windows PC maintenance and cybersecurity framework with 100+ tools across 7 categories.",
            features: ["Power & Performance", "System Cleaning", "System Repair", "Cyber Security"]
          },
          {
            title: "Library Management System",
            icon: "📚",
            tech: ["Java", "OOP", "Console"],
            description: "Console-based library system demonstrating OOP principles and CRUD operations.",
            features: ["Book Management", "Search & Filter", "Borrow/Return", "Exception Handling"]
          }
        ]
      },
      contact: {
        label: "04 // Connect",
        title: "Get in Touch",
        email: "mahmood.kullab2004@gmail.com",
        phone: "+970 599 548 716",
        linkedin: "linkedin.com/in/m-kullab",
        github: "github.com/mahmoud-kullab",
        cta: "Ready to Collaborate?",
        ctaDesc: "I'm currently open to new opportunities. Let's discuss how I can contribute to your team.",
        sendEmail: "Send Email",
        whatsapp: "Message on WhatsApp"
      }
    },
    ar: {
      nav: { about: "عني", skills: "المهارات", projects: "المشاريع", contact: "تواصل" },
      hero: {
        tag: "متخصص الأمن السيبراني",
        title: "محمود سامي كلاب",
        subtitle: "فني تكنولوجيا معلومات ومهندس أمان",
        description: "متخصص في الأمن السيبراني وصيانة الأنظمة وأمان الشبكات. بناء بنية تحتية رقمية آمنة من خان يونس، غزة.",
        cta1: "عرض أعمالي",
        cta2: "تواصل معي"
      },
      about: {
        label: "01 // عني",
        title: "الملف الشخصي",
        bio: "أنا فني تكنولوجيا معلومات متخصص في الأمن السيبراني وإدارة الأنظمة وأمان الشبكات. أعمل حالياً مع جمعية الهلال الأحمر الفلسطيني، وأجمع بين المعرفة التقنية وحل المشاكل العملية لتأمين وتحسين الأنظمة الرقمية.",
        stats: [
          { label: "سنوات الخبرة", value: "3+" },
          { label: "مشاريع مكتملة", value: "15+" },
          { label: "شهادات", value: "17+" },
          { label: "أدوات متقنة", value: "100+" }
        ]
      },
      skills: {
        label: "02 // الخبرات",
        title: "المهارات التقنية",
        categories: [
          {
            name: "الأمن السيبراني",
            skills: ["اختبار الاختراق", "تقييم الثغرات", "أمان الشبكات", "الهاكينج الأخلاقي"]
          },
          {
            name: "إدارة الأنظمة",
            skills: ["خادم Windows", "إدارة Linux", "صيانة النظام", "إصلاح الأجهزة"]
          },
          {
            name: "البرمجة",
            skills: ["PowerShell", "Python", "Java", "Bash"]
          },
          {
            name: "الشبكات",
            skills: ["شبكات Cisco", "تكوين الشبكات", "إدارة الجدران الناريّة", "إعداد VPN"]
          }
        ]
      },
      projects: {
        label: "03 // المشاريع",
        title: "المشاريع البارزة",
        items: [
          {
            title: "ProLaptop Ultimate v3.3",
            icon: "🛡️",
            tech: ["PowerShell", "BAT", "WinPE"],
            description: "إطار متكامل لصيانة وأمن أجهزة Windows يضم 100+ أداة موزعة على 7 فئات.",
            features: ["الطاقة والأداء", "تنظيف النظام", "إصلاح النظام", "الأمن السيبراني"]
          },
          {
            title: "نظام إدارة المكتبة",
            icon: "📚",
            tech: ["Java", "OOP", "Console"],
            description: "نظام مكتبة قائم على وحدة التحكم يوضح مبادئ البرمجة الكائنية.",
            features: ["إدارة الكتب", "البحث والتصفية", "الاستعارة والإرجاع", "معالجة الاستثناءات"]
          }
        ]
      },
      contact: {
        label: "04 // تواصل",
        title: "تأسيس الاتصال",
        email: "mahmood.kullab2004@gmail.com",
        phone: "+970 599 548 716",
        linkedin: "linkedin.com/in/m-kullab",
        github: "github.com/mahmoud-kullab",
        cta: "جاهز للتعاون؟",
        ctaDesc: "أنا متاح حالياً لفرص عمل جديدة. دعنا نناقش كيف يمكنني إضافة قيمة لفريقك.",
        sendEmail: "إرسال بريد إلكتروني",
        whatsapp: "تواصل عبر واتساب"
      }
    }
  };

  const t = content[currentLang];

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: currentLang === "ar" ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663287825236/KdZfWzd2ApvpmrcKiZVpvZ/logo-cybersecurity-mihAAwe89ZpHbdsbmmdWso.webp" alt="Logo" className="w-8 h-8" />
            <span className="font-bold text-lg text-primary" style={{ fontFamily: "'Syne', sans-serif" }}>M·S·KULLAB</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              {Object.entries(t.nav).map(([key, label]) => (
                <a key={key} href={`#${key}`} className="text-muted hover:text-primary transition-colors text-sm font-medium">
                  {label}
                </a>
              ))}
            </div>
            <Button variant="outline" size="sm" onClick={toggleLang} className="border-primary text-primary hover:bg-primary/10">
              {currentLang === "en" ? "عربي" : "English"}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663287825236/KdZfWzd2ApvpmrcKiZVpvZ/hero-background-2nKVPSokTy8N7mwwF5VeGN.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-primary text-sm font-semibold">{t.hero.tag}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>
            {t.hero.title}
          </h1>
          <p className="text-xl text-muted mb-2">{t.hero.subtitle}</p>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              {t.hero.cta1}
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              {t.hero.cta2}
            </Button>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-6 h-6 text-primary mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-primary text-sm font-bold mb-2">{t.about.label}</div>
          <h2 className="text-4xl font-bold mb-12 text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>
            {t.about.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                {t.about.bio}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {t.about.stats.map((stat, i) => (
                <Card key={i} className="bg-background border-border p-6 text-center hover:border-primary transition-colors">
                  <div className="text-3xl font-bold text-primary mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-primary text-sm font-bold mb-2">{t.skills.label}</div>
          <h2 className="text-4xl font-bold mb-12 text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>
            {t.skills.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.skills.categories.map((cat, i) => (
              <Card key={i} className="bg-card border-border p-6 hover:border-primary hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span key={j} className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-primary text-sm font-bold mb-2">{t.projects.label}</div>
          <h2 className="text-4xl font-bold mb-12 text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>
            {t.projects.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.projects.items.map((project, i) => (
              <Card key={i} className="bg-background border-border p-8 hover:border-primary transition-all">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-xs px-2 py-1 bg-primary/10 border border-primary/30 rounded text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <ul className="space-y-2">
                  {project.features.map((feature, j) => (
                    <li key={j} className="text-sm text-foreground/70 flex items-center gap-2">
                      <span className="text-primary">▹</span> {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-primary text-sm font-bold mb-2">{t.contact.label}</div>
          <h2 className="text-4xl font-bold mb-12 text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>
            {t.contact.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <a href={`mailto:${t.contact.email}`} className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <div className="text-xs text-muted uppercase tracking-wider">Email</div>
                  <div className="text-foreground font-medium">{t.contact.email}</div>
                </div>
              </a>
              <a href={`tel:${t.contact.phone}`} className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <div className="text-xs text-muted uppercase tracking-wider">Phone</div>
                  <div className="text-foreground font-medium">{t.contact.phone}</div>
                </div>
              </a>
              <a href="https://linkedin.com/in/m-kullab" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                <Linkedin className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <div className="text-xs text-muted uppercase tracking-wider">LinkedIn</div>
                  <div className="text-foreground font-medium">{t.contact.linkedin}</div>
                </div>
              </a>
              <a href="https://github.com/mahmoud-kullab" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                <Github className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <div className="text-xs text-muted uppercase tracking-wider">GitHub</div>
                  <div className="text-foreground font-medium">{t.contact.github}</div>
                </div>
              </a>
            </div>
            <Card className="bg-card border-border p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
                {t.contact.cta}
              </h3>
              <p className="text-foreground/80 mb-6">{t.contact.ctaDesc}</p>
              <div className="space-y-3">
                <a href={`mailto:${t.contact.email}`} className="block">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    ✉️ {t.contact.sendEmail}
                  </Button>
                </a>
                <a href={`https://wa.me/970599548716`} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                    💬 {t.contact.whatsapp}
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-card/50 text-center text-muted text-sm">
        <p>© 2026 محمود سامي كلاب · Securing the future in Khan Younis, Gaza 🇵🇸</p>
      </footer>
    </div>
  );
}

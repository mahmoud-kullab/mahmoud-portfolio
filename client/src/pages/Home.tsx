import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Mail, Phone, Linkedin, Github, ExternalLink, Download, Archive, ChevronDown, Award, Briefcase, Code, Sun, Moon, Globe, Star, Send, Menu, X } from "lucide-react";
import { useState } from "react";
import { useApp } from "@/contexts/AppContext";
import { t } from "@/data/translations";
import { certificates, categoryColors } from "@/data/certificates";
import { blogPosts, blogCategories } from "@/data/blog";
import { Chatbot } from "@/components/Chatbot";

interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
  date: string;
}

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Home() {
  const { language, setLanguage, isDark, setIsDark } = useApp();
  const [selectedCertCategory, setSelectedCertCategory] = useState("all");
  const [selectedBlogCategory, setSelectedBlogCategory] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState<ContactForm>({ name: '', email: '', subject: '', message: '' });
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: "1",
      name: language === 'ar' ? "أحمد محمد" : "Ahmed Mohammed",
      rating: 5,
      review: language === 'ar' ? "خدمة ممتازة وسريعة جداً. محمود محترف جداً في عمله." : "Excellent and very fast service. Mahmoud is very professional in his work.",
      date: "2026-06-15"
    },
    {
      id: "2",
      name: language === 'ar' ? "فاطمة علي" : "Fatima Ali",
      rating: 5,
      review: language === 'ar' ? "أفضل فني تقنية معلومات قابلته. يحل المشاكل بكفاءة عالية." : "Best IT technician I've met. Solves problems with high efficiency.",
      date: "2026-06-10"
    }
  ]);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, review: '' });

  const categories = ["all", "Networking", "Cybersecurity", "Computer Skills", "AI", "Design", "Business Skills", "Other"];
  
  const filteredCerts = selectedCertCategory === "all" 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCertCategory);

  const filteredBlog = selectedBlogCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedBlogCategory);

  const handleAddReview = () => {
    if (newReview.name && newReview.review) {
      setReviews([...reviews, {
        id: Date.now().toString(),
        name: newReview.name,
        rating: newReview.rating,
        review: newReview.review,
        date: new Date().toISOString().split('T')[0]
      }]);
      setNewReview({ name: '', rating: 5, review: '' });
      setShowReviewForm(false);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.message) {
      // Send email via mailto
      const subject = encodeURIComponent(contactForm.subject || "Portfolio Contact");
      const body = encodeURIComponent(`Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`);
      window.location.href = `mailto:mahmood.kullab2004@gmail.com?subject=${subject}&body=${body}`;
      setContactForm({ name: '', email: '', subject: '', message: '' });
    }
  };

  const getCertTitle = (cert: any) => language === 'ar' ? cert.titleAr : cert.titleEn;
  const getCertIssuer = (cert: any) => language === 'ar' ? cert.issuerAr : cert.issuerEn;
  const getCategoryAr = (cat: string) => {
    const categoryMap: Record<string, string> = {
      "Networking": "الشبكات",
      "Cybersecurity": "الأمن السيبراني",
      "Computer Skills": "مهارات الحاسوب",
      "AI": "الذكاء الاصطناعي",
      "Design": "التصميم",
      "Business Skills": "مهارات الأعمال",
      "Other": "أخرى"
    };
    return categoryMap[cat] || cat;
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="bg-background text-foreground">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-lg hidden sm:inline">M-S-KULLAB</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              <a href="#about" className="text-sm hover:text-cyan-400 transition">{t('nav.about', language)}</a>
              <a href="#skills" className="text-sm hover:text-cyan-400 transition">{t('nav.skills', language)}</a>
              <a href="#experience" className="text-sm hover:text-cyan-400 transition">{t('nav.experience', language)}</a>
              <a href="#credentials" className="text-sm hover:text-cyan-400 transition">{t('nav.credentials', language)}</a>
              <a href="#blog" className="text-sm hover:text-cyan-400 transition">{language === 'ar' ? 'المدونة' : 'Blog'}</a>
              <a href="#projects" className="text-sm hover:text-cyan-400 transition">{t('nav.projects', language)}</a>
              <a href="#contact" className="text-sm hover:text-cyan-400 transition">{t('nav.contact', language)}</a>
              
              {/* Theme Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 hover:bg-cyan-400/10 rounded-lg transition"
                title={isDark ? "Light Mode" : "Dark Mode"}
              >
                {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-blue-400" />}
              </button>

              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                className="px-3 py-1 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition text-sm font-semibold"
              >
                {language === 'ar' ? 'English' : 'العربية'}
              </button>

              <a href="https://drive.google.com/drive/u/0/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP" target="_blank" rel="noopener noreferrer" className="px-3 py-1 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-600/10 transition text-sm">
                {t('hero.viewArchive', language)}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button onClick={() => setIsDark(!isDark)} className="p-2">
                {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-blue-400" />}
              </button>
              <button onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')} className="px-2 py-1 text-xs border border-cyan-400 rounded">
                {language === 'ar' ? 'EN' : 'AR'}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-background border-t border-border p-4 space-y-2">
              <a href="#about" className="block text-sm hover:text-cyan-400 py-2" onClick={() => setMobileMenuOpen(false)}>{t('nav.about', language)}</a>
              <a href="#skills" className="block text-sm hover:text-cyan-400 py-2" onClick={() => setMobileMenuOpen(false)}>{t('nav.skills', language)}</a>
              <a href="#experience" className="block text-sm hover:text-cyan-400 py-2" onClick={() => setMobileMenuOpen(false)}>{t('nav.experience', language)}</a>
              <a href="#credentials" className="block text-sm hover:text-cyan-400 py-2" onClick={() => setMobileMenuOpen(false)}>{t('nav.credentials', language)}</a>
              <a href="#blog" className="block text-sm hover:text-cyan-400 py-2" onClick={() => setMobileMenuOpen(false)}>{language === 'ar' ? 'المدونة' : 'Blog'}</a>
              <a href="#projects" className="block text-sm hover:text-cyan-400 py-2" onClick={() => setMobileMenuOpen(false)}>{t('nav.projects', language)}</a>
              <a href="#contact" className="block text-sm hover:text-cyan-400 py-2" onClick={() => setMobileMenuOpen(false)}>{t('nav.contact', language)}</a>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-card/50">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full">
              <span className="text-cyan-400 text-sm font-semibold">🔒 {language === 'ar' ? 'النظام آمن وعامل' : 'System Status: Online & Secure'}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Mahmoud Sami Kullab
            </h1>

            <p className="text-xl text-gray-400 mb-2">
              {language === 'ar' ? 'متخصص تقنية معلومات • طالب أمن سيبراني • مطور' : 'ICT Specialist • Cybersecurity Student • Developer'}
            </p>

            <p className="text-gray-500 mb-12 max-w-2xl mx-auto text-sm md:text-base">
              {language === 'ar'
                ? 'أكثر من 5 سنوات من الخبرة العملية في تأمين الحدود الرقمية. خبير في دعم تقنية المعلومات وصيانة الأجهزة وأطر عمل الأمن السيبراني. أتابع دبلوم الأمن السيبراني في UCAS.'
                : 'Over 5 years of practical experience securing digital frontiers. Expert in IT support, hardware maintenance, and cybersecurity frameworks. Pursuing a Diploma in Cybersecurity at UCAS.'
              }
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <a href="#contact" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition transform hover:scale-105">
                {t('hero.hireMe', language)}
              </a>
              <a 
                href="/manus-storage/CV_be2ed2ad.pdf"
                download
                className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition flex items-center gap-2"
              >
                <Download size={18} /> {t('hero.downloadCV', language)}
              </a>
              <a href="#projects" className="px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-600/10 transition">
                {t('hero.viewProjects', language)}
              </a>
            </div>

            <div className="flex justify-center">
              <ChevronDown className="animate-bounce text-cyan-400" size={32} />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-card/50">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('nav.about', language)}</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-background/50 border-border p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
                <div className="text-gray-400">{language === 'ar' ? 'سنوات الخبرة' : 'Years of Experience'}</div>
              </Card>
              <Card className="bg-background/50 border-border p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">17+</div>
                <div className="text-gray-400">{language === 'ar' ? 'الشهادات' : 'Certifications'}</div>
              </Card>
              <Card className="bg-background/50 border-border p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">100+</div>
                <div className="text-gray-400">{language === 'ar' ? 'الأدوات المتقنة' : 'Tools Mastered'}</div>
              </Card>
            </div>

            <Card className="bg-background/50 border-border p-8">
              <p className="text-gray-300 leading-relaxed">
                {language === 'ar'
                  ? 'أنا متخصص تقنية معلومات ذو خبرة عملية في مجال الأمن السيبراني وصيانة الأجهزة وإدارة الشبكات. أعمل حالياً كمتخصص تقنية معلومات في جمعية الهلال الأحمر الفلسطيني، حيث أقدم الدعم الفني والصيانة والدعم الإداري. أتابع دبلوم الأمن السيبراني في الكلية الجامعية للعلوم التطبيقية (UCAS) بغزة، وأسعى للتطور المستمر في مجالات الأمن السيبراني والتكنولوجيا.'
                  : 'I am an experienced ICT Specialist with practical expertise in cybersecurity, hardware maintenance, and network administration. I currently work as an ICT Specialist at the Palestinian Red Crescent Society, providing technical support, maintenance, and administrative assistance. I am pursuing a Diploma in Cybersecurity at UCAS in Gaza, and I am committed to continuous development in cybersecurity and technology fields.'
                }
              </p>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('nav.skills', language)}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card/50 border-border p-6">
                <h3 className="text-lg font-bold mb-4 text-cyan-400">{language === 'ar' ? 'مهارات متقدمة' : 'Advanced Skills'}</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ {language === 'ar' ? 'دعم تقنية المعلومات' : 'IT Support'}</li>
                  <li>✓ {language === 'ar' ? 'صيانة الأجهزة' : 'Hardware Maintenance'}</li>
                  <li>✓ {language === 'ar' ? 'الأمن السيبراني' : 'Cybersecurity'}</li>
                  <li>✓ {language === 'ar' ? 'إدارة Windows' : 'Windows Administration'}</li>
                  <li>✓ {language === 'ar' ? 'برمجة PowerShell' : 'PowerShell Scripting'}</li>
                </ul>
              </Card>

              <Card className="bg-card/50 border-border p-6">
                <h3 className="text-lg font-bold mb-4 text-cyan-400">{language === 'ar' ? 'الشبكات والأنظمة' : 'Networking & Systems'}</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Cisco Networking</li>
                  <li>✓ IPv4/IPv6</li>
                  <li>✓ {language === 'ar' ? 'إدارة Linux' : 'Linux Administration'}</li>
                  <li>✓ {language === 'ar' ? 'فحص الشبكات' : 'Network Scanning'}</li>
                  <li>✓ {language === 'ar' ? 'اختبار الاختراق' : 'Penetration Testing'}</li>
                </ul>
              </Card>

              <Card className="bg-card/50 border-border p-6">
                <h3 className="text-lg font-bold mb-4 text-cyan-400">{language === 'ar' ? 'البرمجة والأدوات' : 'Programming & Tools'}</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ Java</li>
                  <li>✓ BAT/Batch</li>
                  <li>✓ {language === 'ar' ? 'تشخيص البرامج' : 'Software Diagnostics'}</li>
                  <li>✓ {language === 'ar' ? 'استعادة البيانات' : 'Data Recovery'}</li>
                  <li>✓ {language === 'ar' ? 'تحسين الأداء' : 'System Optimization'}</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 bg-card/50">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('nav.experience', language)}</h2>
            <div className="space-y-6">
              <Card className="bg-background/50 border-border p-6">
                <div className="flex items-start gap-4">
                  <Briefcase className="text-cyan-400 mt-1" size={24} />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{language === 'ar' ? 'متخصص تقنية معلومات' : 'ICT Specialist'}</h3>
                    <p className="text-cyan-400 text-sm">{language === 'ar' ? 'جمعية الهلال الأحمر الفلسطيني' : 'Palestinian Red Crescent Society'}</p>
                    <p className="text-gray-500 text-sm">Jan 2024 - Present</p>
                    <p className="text-gray-400 mt-2">{language === 'ar' ? 'دعم فني شامل، صيانة الحاسوب، البرمجة، الأعمال اللوجستية، وإدارة أنظمة تكنولوجيا المعلومات.' : 'Comprehensive technical support, computer maintenance, programming, logistics, and IT system management.'}</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-background/50 border-border p-6">
                <div className="flex items-start gap-4">
                  <Code className="text-cyan-400 mt-1" size={24} />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{language === 'ar' ? 'فني تقنية معلومات ومبرمج' : 'IT Technician & Programmer'}</h3>
                    <p className="text-cyan-400 text-sm">{language === 'ar' ? 'عامل حر' : 'Self-employed'}</p>
                    <p className="text-gray-500 text-sm">2019 - Present</p>
                    <p className="text-gray-400 mt-2">{language === 'ar' ? 'تطوير البرامج، صيانة الأجهزة، دعم تقنية المعلومات للأفراد والمؤسسات.' : 'Software development, hardware maintenance, IT support for individuals and organizations.'}</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-background/50 border-border p-6">
                <div className="flex items-start gap-4">
                  <Award className="text-cyan-400 mt-1" size={24} />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{language === 'ar' ? 'عامل لوجستي' : 'Logistics Worker'}</h3>
                    <p className="text-cyan-400 text-sm">{language === 'ar' ? 'حملة اليونيسف للتطعيم ضد شلل الأطفال' : 'UNICEF Polio Campaign'}</p>
                    <p className="text-gray-500 text-sm">Sep - Oct 2024</p>
                    <p className="text-gray-400 mt-2">{language === 'ar' ? 'دعم لوجستي وتنظيمي لحملة التطعيم الوطنية.' : 'Logistical and organizational support for national vaccination campaign.'}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section id="credentials" className="py-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('nav.credentials', language)}</h2>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 lg:grid-cols-8 mb-8 bg-background/50 border border-border">
                <TabsTrigger value="all" className="text-xs">{language === 'ar' ? 'الكل' : 'All'}</TabsTrigger>
                {categories.filter(c => c !== 'all').map(cat => (
                  <TabsTrigger key={cat} value={cat} className="text-xs">
                    {language === 'ar' ? getCategoryAr(cat) : cat}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="all" className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certificates.map(cert => (
                  <Card key={cert.id} className="bg-background/50 border-border p-4 hover:border-cyan-400/50 transition">
                    <div className="flex items-start justify-between mb-2">
                      <Badge className={`${categoryColors[cert.category]} text-xs`}>
                        {language === 'ar' ? getCategoryAr(cert.category) : cert.category}
                      </Badge>
                      <Award size={16} className="text-cyan-400" />
                    </div>
                    <h3 className="font-bold text-sm mb-2">{getCertTitle(cert)}</h3>
                    <p className="text-xs text-gray-500 mb-3">{getCertIssuer(cert)}</p>
                    {cert.driveLink && (
                      <a href={cert.driveLink} target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                        {language === 'ar' ? 'عرض الشهادة' : 'View Certificate'} <ExternalLink size={12} />
                      </a>
                    )}
                  </Card>
                ))}
              </TabsContent>

              {categories.filter(c => c !== 'all').map(cat => (
                <TabsContent key={cat} value={cat} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certificates.filter(c => c.category === cat).map(cert => (
                    <Card key={cert.id} className="bg-background/50 border-border p-4 hover:border-cyan-400/50 transition">
                      <div className="flex items-start justify-between mb-2">
                        <Badge className={`${categoryColors[cert.category]} text-xs`}>
                          {language === 'ar' ? getCategoryAr(cert.category) : cert.category}
                        </Badge>
                        <Award size={16} className="text-cyan-400" />
                      </div>
                      <h3 className="font-bold text-sm mb-2">{getCertTitle(cert)}</h3>
                      <p className="text-xs text-gray-500 mb-3">{getCertIssuer(cert)}</p>
                      {cert.driveLink && (
                        <a href={cert.driveLink} target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                          {language === 'ar' ? 'عرض الشهادة' : 'View Certificate'} <ExternalLink size={12} />
                        </a>
                      )}
                    </Card>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 px-4 bg-card/50">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{language === 'ar' ? 'المدونة التقنية' : 'Technical Blog'}</h2>
            
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
              {blogCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedBlogCategory(cat)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition ${
                    selectedBlogCategory === cat
                      ? 'bg-cyan-500 text-black font-semibold'
                      : 'bg-background/50 border border-border hover:border-cyan-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlog.map(post => (
                <Card key={post.id} className="bg-background/50 border-border overflow-hidden hover:border-cyan-400/50 transition">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-cyan-500/20 text-cyan-400 border border-cyan-400/30">{post.category}</Badge>
                      <span className="text-xs text-gray-500">{post.readTime} min read</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{language === 'ar' ? post.titleAr : post.titleEn}</h3>
                    <p className="text-sm text-gray-400 mb-4">{language === 'ar' ? post.descriptionAr : post.descriptionEn}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{post.date}</span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="text-cyan-400 hover:text-cyan-300 transition">{language === 'ar' ? 'اقرأ المزيد' : 'Read More'}</button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-96 overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>{language === 'ar' ? post.titleAr : post.titleEn}</DialogTitle>
                            <DialogDescription>{post.date}</DialogDescription>
                          </DialogHeader>
                          <div className="prose prose-invert max-w-none text-sm whitespace-pre-wrap">
                            {language === 'ar' ? post.contentAr : post.contentEn}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('nav.projects', language)}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card/50 border-border p-6">
                <h3 className="font-bold text-lg mb-2">ProLaptop Ultimate v3.3</h3>
                <p className="text-gray-400 text-sm mb-4">{language === 'ar' ? 'أداة صيانة متقدمة تحتوي على 100+ أداة موزعة على 7 وحدات لصيانة Windows والأمن السيبراني.' : 'Advanced maintenance tool with 100+ tools across 7 modules for Windows maintenance and cybersecurity.'}</p>
                <a href="https://github.com/mahmoud-kullab" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1">
                  {language === 'ar' ? 'عرض على GitHub' : 'View on GitHub'} <ExternalLink size={14} />
                </a>
              </Card>

              <Card className="bg-card/50 border-border p-6">
                <h3 className="font-bold text-lg mb-2">{language === 'ar' ? 'نظام إدارة المكتبة' : 'Library Management System'}</h3>
                <p className="text-gray-400 text-sm mb-4">{language === 'ar' ? 'تطبيق Java متقدم يستخدم مبادئ OOP مع عمليات CRUD كاملة لإدارة الكتب والأعضاء.' : 'Advanced Java application using OOP principles with complete CRUD operations for book and member management.'}</p>
                <a href="https://github.com/mahmoud-kullab" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1">
                  {language === 'ar' ? 'عرض على GitHub' : 'View on GitHub'} <ExternalLink size={14} />
                </a>
              </Card>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 px-4 bg-card/50">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{language === 'ar' ? 'تقييمات العملاء' : 'Client Reviews & Testimonials'}</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {reviews.map(review => (
                <Card key={review.id} className="bg-background/50 border-border p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold">{review.name}</h3>
                    <div className="flex gap-1">
                      {Array(review.rating).fill(0).map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{review.review}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </Card>
              ))}
            </div>

            {!showReviewForm ? (
              <div className="text-center">
                <button
                  onClick={() => setShowReviewForm(true)}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition"
                >
                  {language === 'ar' ? 'أضف تقييماً' : 'Add a Review'}
                </button>
              </div>
            ) : (
              <Card className="bg-background/50 border-border p-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder={language === 'ar' ? 'اسمك' : 'Your Name'}
                    value={newReview.name}
                    onChange={e => setNewReview({...newReview, name: e.target.value})}
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">{language === 'ar' ? 'التقييم' : 'Rating'}</label>
                    <select
                      value={newReview.rating}
                      onChange={e => setNewReview({...newReview, rating: parseInt(e.target.value)})}
                      className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      {[5, 4, 3, 2, 1].map(r => (
                        <option key={r} value={r}>{r} {language === 'ar' ? 'نجوم' : 'Stars'}</option>
                      ))}
                    </select>
                  </div>
                  <textarea
                    placeholder={language === 'ar' ? 'تقييمك' : 'Your Review'}
                    value={newReview.review}
                    onChange={e => setNewReview({...newReview, review: e.target.value})}
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 h-24 resize-none"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleAddReview}
                      className="flex-1 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition"
                    >
                      {language === 'ar' ? 'إرسال' : 'Submit'}
                    </button>
                    <button
                      onClick={() => setShowReviewForm(false)}
                      className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition"
                    >
                      {language === 'ar' ? 'إلغاء' : 'Cancel'}
                    </button>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('nav.contact', language)}</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-cyan-400" size={24} />
                  <div>
                    <p className="text-sm text-gray-500">{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</p>
                    <a href="mailto:mahmood.kullab2004@gmail.com" className="text-cyan-400 hover:text-cyan-300">mahmood.kullab2004@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-cyan-400" size={24} />
                  <div>
                    <p className="text-sm text-gray-500">{language === 'ar' ? 'الهاتف' : 'Phone'}</p>
                    <a href="tel:+970599548716" className="text-cyan-400 hover:text-cyan-300">+970 599 548 716</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="text-cyan-400" size={24} />
                  <div>
                    <p className="text-sm text-gray-500">LinkedIn</p>
                    <a href="https://linkedin.com/in/m-kullab" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">m-kullab</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="text-cyan-400" size={24} />
                  <div>
                    <p className="text-sm text-gray-500">GitHub</p>
                    <a href="https://github.com/mahmoud-kullab" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">mahmoud-kullab</a>
                  </div>
                </div>
              </div>

              <Card className="bg-background/50 border-border p-6">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder={language === 'ar' ? 'اسمك' : 'Your Name'}
                    value={contactForm.name}
                    onChange={e => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                  <input
                    type="email"
                    placeholder={language === 'ar' ? 'بريدك الإلكتروني' : 'Your Email'}
                    value={contactForm.email}
                    onChange={e => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder={language === 'ar' ? 'الموضوع' : 'Subject'}
                    value={contactForm.subject}
                    onChange={e => setContactForm({...contactForm, subject: e.target.value})}
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <textarea
                    placeholder={language === 'ar' ? 'رسالتك' : 'Your Message'}
                    value={contactForm.message}
                    onChange={e => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 h-24 resize-none"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition flex items-center justify-center gap-2"
                  >
                    <Send size={18} /> {language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
                  </button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-border bg-background/50">
          <div className="container max-w-6xl mx-auto text-center text-gray-500 text-sm">
            <p>{language === 'ar' ? '© 2026 محمود سامي كلاب. جميع الحقوق محفوظة.' : '© 2026 Mahmoud Sami Kullab. All rights reserved.'}</p>
          </div>
        </footer>

        {/* Chatbot */}
        <Chatbot />
      </div>
    </div>
  );
}

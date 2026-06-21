import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Mail, Phone, Linkedin, Github, ExternalLink, Download, Archive, ChevronDown, Award, Briefcase, Code, Sun, Moon, Globe, Star } from "lucide-react";
import { useState } from "react";
import { useApp } from "@/contexts/AppContext";
import { t } from "@/data/translations";
import { certificates, categoryColors } from "@/data/certificates";
import { Chatbot } from "@/components/Chatbot";

interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
  date: string;
}

export default function Home() {
  const { language, setLanguage, isDark, setIsDark } = useApp();
  const [selectedCertCategory, setSelectedCertCategory] = useState("all");
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
              <span className="font-bold text-lg">M-S-KULLAB</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#about" className="text-sm hover:text-cyan-400 transition">{t('nav.about', language)}</a>
              <a href="#skills" className="text-sm hover:text-cyan-400 transition">{t('nav.skills', language)}</a>
              <a href="#experience" className="text-sm hover:text-cyan-400 transition">{t('nav.experience', language)}</a>
              <a href="#credentials" className="text-sm hover:text-cyan-400 transition">{t('nav.credentials', language)}</a>
              <a href="#projects" className="text-sm hover:text-cyan-400 transition">{t('nav.projects', language)}</a>
              <a href="#contact" className="text-sm hover:text-cyan-400 transition">{t('nav.contact', language)}</a>
              
              {/* Theme Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 hover:bg-gray-700/50 rounded-lg transition"
                title={isDark ? "Light mode" : "Dark mode"}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="px-3 py-1 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition text-sm"
              >
                {language === 'en' ? 'العربية' : 'English'}
              </button>

              <a 
                href="https://drive.google.com/drive/u/0/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-3 py-1 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition"
              >
                {t('nav.archive', language)}
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 pointer-events-none" />
          <div className="container max-w-4xl mx-auto relative z-10">
            <div className="text-center space-y-6 mb-8">
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full">
                <span className="text-cyan-400 text-sm font-medium">{t('hero.status', language)}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {t('hero.title', language)}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('hero.subtitle', language)}
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                {t('hero.description', language)}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <a href="#contact" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition transform hover:scale-105">
                {t('hero.hireMe', language)}
              </a>
              <a 
                href="https://files.manuscdn.com/user_upload_by_module/session_file/310519663287825236/PbMODnWwWexksCUx.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition flex items-center gap-2"
              >
                <Download size={18} /> {t('hero.downloadCV', language)}
              </a>
              <a href="#projects" className="px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-600/10 transition">
                {t('hero.viewProjects', language)}
              </a>
              <a 
                href="https://drive.google.com/drive/u/0/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-600/10 transition flex items-center gap-2"
              >
                <Archive size={18} /> {t('hero.viewArchive', language)}
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
            <h2 className="text-3xl font-bold mb-8">{t('about.title', language)}</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
                <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
                <p className="text-muted-foreground">{t('about.experience', language)}</p>
              </Card>
              <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
                <div className="text-3xl font-bold text-cyan-400 mb-2">17+</div>
                <p className="text-muted-foreground">{t('about.certifications', language)}</p>
              </Card>
              <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
                <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
                <p className="text-muted-foreground">{t('about.toolsMastered', language)}</p>
              </Card>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t('about.description', language)}
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{t('skills.title', language)}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <span className="text-cyan-400">▸</span> {t('skills.advanced', language)}
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• IT Support & Troubleshooting</li>
                  <li>• Hardware Maintenance</li>
                  <li>• Software Diagnostics</li>
                  <li>• Windows Administration</li>
                  <li>• PowerShell & BAT Scripting</li>
                  <li>• Data Entry & Management</li>
                </ul>
              </Card>
              <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <span className="text-cyan-400">▸</span> {t('skills.intermediate', language)}
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Cybersecurity Basics</li>
                  <li>• Offensive Security</li>
                  <li>• IPv4/IPv6 Networking</li>
                  <li>• Routing & Switching</li>
                  <li>• Linux Fundamentals</li>
                  <li>• Java (OOP, CRUD)</li>
                </ul>
              </Card>
              <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <span className="text-cyan-400">▸</span> {t('skills.technologies', language)}
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Windows & Linux OS</li>
                  <li>• PowerShell & CMD</li>
                  <li>• Java Programming</li>
                  <li>• Git & GitHub</li>
                  <li>• Cisco Packet Tracer</li>
                  <li>• Nmap & Security Tools</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 bg-card/50">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Briefcase className="text-cyan-400" /> {t('experience.title', language)}
            </h2>
            <div className="space-y-6">
              <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">{t('experience.ictSpecialist', language)}</h3>
                  <span className="text-cyan-400 text-sm">Jan 2024 – Present</span>
                </div>
                <p className="text-cyan-400 text-sm mb-3">{t('experience.prcs', language)}</p>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Provide direct and remote technical support, resolving system and network issues efficiently.</li>
                  <li>• Maintain and manage IT infrastructure to ensure continuous daily operations.</li>
                  <li>• Implement information security procedures and policies to protect institutional data.</li>
                </ul>
              </Card>

              <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">{t('experience.dataEntry', language)}</h3>
                  <span className="text-cyan-400 text-sm">Jan 2024 – Present</span>
                </div>
                <p className="text-cyan-400 text-sm mb-3">{t('experience.prcs', language)}</p>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Accurately manage database entry and organize digital records for integrity and compliance.</li>
                  <li>• Conduct strict data verification and quality checks to minimize documentation errors.</li>
                </ul>
              </Card>

              <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">{t('experience.itTechnician', language)}</h3>
                  <span className="text-cyan-400 text-sm">Jan 2019 – Present</span>
                </div>
                <p className="text-cyan-400 text-sm mb-3">{t('experience.selfEmployed', language)}</p>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Perform advanced maintenance and programming for smartphone and PC clients.</li>
                  <li>• Diagnose and resolve complex hardware and software malfunctions.</li>
                  <li>• Developed and launched promotional materials and infographics via Canva.</li>
                </ul>
              </Card>

              <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">{t('experience.vaccinationWorker', language)}</h3>
                  <span className="text-cyan-400 text-sm">Sep 2024 – Oct 2024</span>
                </div>
                <p className="text-cyan-400 text-sm mb-3">{t('experience.unicef', language)}</p>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Managed field logistics and coordinated with local health teams for the national polio campaign.</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section id="credentials" className="py-20 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Award className="text-cyan-400" /> {t('credentials.title', language)}
            </h2>
            
            {/* Filter Tabs */}
            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="grid grid-cols-5 md:grid-cols-9 gap-2 bg-transparent h-auto p-0 overflow-x-auto">
                {categories.map((cat) => (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    onClick={() => setSelectedCertCategory(cat)}
                    className="px-3 py-2 text-xs rounded-lg border border-border data-[state=active]:border-cyan-400 data-[state=active]:bg-cyan-400/10 data-[state=active]:text-cyan-400 whitespace-nowrap"
                  >
                    {cat === "all" ? "All" : language === 'ar' ? getCategoryAr(cat) : cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* Certificates Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {filteredCerts.map((cert) => (
                <Dialog key={cert.id}>
                  <DialogTrigger asChild>
                    <Card className="p-4 bg-background border-border hover:border-cyan-400/50 transition cursor-pointer group">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-bold text-sm group-hover:text-cyan-400 transition">{getCertTitle(cert)}</h3>
                          <p className="text-xs text-muted-foreground mt-1">{getCertIssuer(cert)}</p>
                        </div>
                        <Badge className={`${isDark ? categoryColors[cert.category]?.dark : categoryColors[cert.category]?.light} text-xs whitespace-nowrap ml-2`}>
                          {language === 'ar' ? getCategoryAr(cert.category) : cert.category}
                        </Badge>
                      </div>
                      <p className="text-xs text-cyan-400">{cert.date}</p>
                      <div className="mt-3 text-xs text-gray-500 group-hover:text-cyan-400 transition flex items-center gap-1">
                        {t('credentials.viewCertificate', language)} <ExternalLink size={12} />
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{getCertTitle(cert)}</DialogTitle>
                      <DialogDescription>{getCertIssuer(cert)}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">{language === 'ar' ? 'تاريخ الإصدار:' : 'Date Issued:'}</span>
                        <span className="font-semibold">{cert.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">{language === 'ar' ? 'الفئة:' : 'Category:'}</span>
                        <Badge className={`${isDark ? categoryColors[cert.category]?.dark : categoryColors[cert.category]?.light}`}>
                          {language === 'ar' ? getCategoryAr(cert.category) : cert.category}
                        </Badge>
                      </div>
                      <a
                        href={cert.driveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={18} /> {t('credentials.viewOnDrive', language)}
                      </a>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 mb-4">
                {t('credentials.showingOf', language)} {filteredCerts.length} {t('credentials.of', language)} {certificates.length} {t('credentials.certifications', language)}
              </p>
              <a
                href="https://drive.google.com/drive/u/0/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition"
              >
                {t('credentials.viewAll', language)}
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-card/50">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Code className="text-cyan-400" /> {t('projects.title', language)}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
                <h3 className="font-bold text-lg mb-2">{t('projects.proLaptop', language)}</h3>
                <p className="text-sm text-gray-400 mb-4">
                  {t('projects.proLaptopDesc', language)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">PowerShell</Badge>
                  <Badge variant="secondary">BAT</Badge>
                  <Badge variant="secondary">WinPE</Badge>
                </div>
                <a
                  href="https://github.com/mahmoud-kullab/ProLaptop-Ultimate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1"
                >
                  {t('projects.viewOnGithub', language)} <ExternalLink size={14} />
                </a>
              </Card>

              <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
                <h3 className="font-bold text-lg mb-2">{t('projects.library', language)}</h3>
                <p className="text-sm text-gray-400 mb-4">
                  {t('projects.libraryDesc', language)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">OOP</Badge>
                  <Badge variant="secondary">CRUD</Badge>
                </div>
                <a
                  href="https://github.com/mahmoud-kullab/Library-Management-System-Java"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1"
                >
                  {t('projects.viewOnGithub', language)} <ExternalLink size={14} />
                </a>
              </Card>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{t('reviews.title', language)}</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {reviews.map(review => (
                <Card key={review.id} className="p-6 bg-background border-border">
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 mb-3">{review.review}</p>
                  <p className="text-xs text-gray-500">— {review.name}</p>
                </Card>
              ))}
            </div>
            {!showReviewForm ? (
              <Button
                onClick={() => setShowReviewForm(true)}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold"
              >
                {t('reviews.addReview', language)}
              </Button>
            ) : (
              <Card className="p-6 bg-background border-border">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder={language === 'ar' ? 'اسمك' : 'Your name'}
                    value={newReview.name}
                    onChange={e => setNewReview({...newReview, name: e.target.value})}
                    className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-gray-500"
                  />
                  <select
                    value={newReview.rating}
                    onChange={e => setNewReview({...newReview, rating: parseInt(e.target.value)})}
                    className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground"
                  >
                    {[5, 4, 3, 2, 1].map(r => (
                      <option key={r} value={r}>{r} {language === 'ar' ? 'نجوم' : 'Stars'}</option>
                    ))}
                  </select>
                  <textarea
                    placeholder={language === 'ar' ? 'تقييمك' : 'Your review'}
                    value={newReview.review}
                    onChange={e => setNewReview({...newReview, review: e.target.value})}
                    className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-gray-500 h-24"
                  />
                  <div className="flex gap-2">
                    <Button
                      onClick={handleAddReview}
                      className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold"
                    >
                      {t('reviews.submit', language)}
                    </Button>
                    <Button
                      onClick={() => setShowReviewForm(false)}
                      variant="outline"
                      className="flex-1"
                    >
                      {language === 'ar' ? 'إلغاء' : 'Cancel'}
                    </Button>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-card/50">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{t('contact.title', language)}</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="text-cyan-400" size={20} />
                  <span className="font-semibold">{t('contact.email', language)}</span>
                </div>
                <a href="mailto:mahmood.kullab2004@gmail.com" className="text-cyan-400 hover:text-cyan-300">
                  mahmood.kullab2004@gmail.com
                </a>
              </Card>

              <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="text-cyan-400" size={20} />
                  <span className="font-semibold">{t('contact.phone', language)}</span>
                </div>
                <a href="tel:+970599548716" className="text-cyan-400 hover:text-cyan-300">
                  +970 599 548 716
                </a>
              </Card>

              <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
                <div className="flex items-center gap-3 mb-3">
                  <Linkedin className="text-cyan-400" size={20} />
                  <span className="font-semibold">{t('contact.linkedin', language)}</span>
                </div>
                <a href="https://linkedin.com/in/m-kullab" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                  linkedin.com/in/m-kullab
                </a>
              </Card>

              <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
                <div className="flex items-center gap-3 mb-3">
                  <Github className="text-cyan-400" size={20} />
                  <span className="font-semibold">{t('contact.github', language)}</span>
                </div>
                <a href="https://github.com/mahmoud-kullab" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                  github.com/mahmoud-kullab
                </a>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-gray-400 mb-4">{t('contact.ready', language)}</p>
              <a href="mailto:mahmood.kullab2004@gmail.com" className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition">
                {t('contact.sendMessage', language)}
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-border text-center text-sm text-gray-500">
          <p>{t('footer.copyright', language)}</p>
        </footer>

        {/* Chatbot */}
        <Chatbot />
      </div>
    </div>
  );
}

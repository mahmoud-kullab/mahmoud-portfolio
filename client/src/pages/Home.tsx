import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Mail, Phone, Linkedin, Github, ExternalLink, Download, Archive, ChevronDown, Award, Briefcase, Code } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [selectedCertCategory, setSelectedCertCategory] = useState("all");

  const certificates = [
    {
      id: "hp-business-email",
      title: "Business Email",
      issuer: "HP LIFE (HP Foundation)",
      date: "Jun 17, 2026",
      category: "Business Skills",
      driveLink: "https://drive.google.com/file/d/1K2L3M4N5O6P7Q8R9S0T1U2V3W4X5Y6Z7/view?usp=sharing"
    },
    {
      id: "nvidia-jetson",
      title: "Getting Started with AI on Jetson Nano",
      issuer: "NVIDIA",
      date: "Jun 16, 2026",
      category: "AI",
      driveLink: "https://drive.google.com/file/d/1SwQJIOuXomIMnYwX-VUdHXgmKAJFQRNA/view?usp=sharing"
    },
    {
      id: "tryhackme-nmap",
      title: "Nmap Live Host Discovery",
      issuer: "TryHackMe",
      date: "May 26, 2026",
      category: "Cybersecurity",
      driveLink: "https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7/view?usp=sharing"
    },
    {
      id: "tryhackme-passive",
      title: "Passive Reconnaissance",
      issuer: "TryHackMe",
      date: "May 26, 2026",
      category: "Cybersecurity",
      driveLink: "https://drive.google.com/file/d/1Q2R3S4T5U6V7W8X9Y0Z1A2B3C4D5E6F7/view?usp=sharing"
    },
    {
      id: "tryhackme-active",
      title: "Active Reconnaissance",
      issuer: "TryHackMe",
      date: "May 26, 2026",
      category: "Cybersecurity",
      driveLink: "https://drive.google.com/file/d/1G2H3I4J5K6L7M8N9O0P1Q2R3S4T5U6V7/view?usp=sharing"
    },
    {
      id: "cisco-packet-tracer-led",
      title: "Getting Started with Cisco Packet Tracer (Instructor-Led)",
      issuer: "Cisco Networking Academy — UCAS",
      date: "May 17, 2026",
      category: "Networking",
      driveLink: "https://drive.google.com/file/d/1W2X3Y4Z5A6B7C8D9E0F1G2H3I4J5K6L7/view?usp=sharing"
    },
    {
      id: "cisco-networking-basics",
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "May 12, 2026",
      category: "Networking",
      driveLink: "https://drive.google.com/file/d/1M2N3O4P5Q6R7S8T9U0V1W2X3Y4Z5A6B7/view?usp=sharing"
    },
    {
      id: "cisco-packet-tracer-self",
      title: "Getting Started with Cisco Packet Tracer (Self-Paced)",
      issuer: "Cisco Networking Academy",
      date: "Apr 18, 2026",
      category: "Networking",
      driveLink: "https://drive.google.com/file/d/1C2D3E4F5G6H7I8J9K0L1M2N3O4P5Q6R7/view?usp=sharing"
    },
    {
      id: "icdl-base",
      title: "ICDL Base Specialization (4 Modules)",
      issuer: "Edraak (Word, Excel, IT Essentials, Email)",
      date: "Apr 2026",
      category: "Computer Skills",
      driveLink: "https://drive.google.com/file/d/1S2T3U4V5W6X7Y8Z9A0B1C2D3E4F5G6H7/view?usp=sharing"
    },
    {
      id: "cisco-intro-packet-tracer",
      title: "Introduction to Packet Tracer",
      issuer: "Cisco Networking Academy",
      date: "Apr 18, 2026",
      category: "Networking",
      driveLink: "https://drive.google.com/file/d/1I2J3K4L5M6N7O8P9Q0R1S2T3U4V5W6X7/view?usp=sharing"
    },
    {
      id: "tryhackme-linux",
      title: "cat linux.txt — Linux Fundamentals Badge",
      issuer: "TryHackMe",
      date: "Jan 2026",
      category: "Computer Skills",
      driveLink: "https://drive.google.com/file/d/1Y2Z3A4B5C6D7E8F9G0H1I2J3K4L5M6N7/view?usp=sharing"
    },
    {
      id: "java-comptia",
      title: "Java Programming & CompTIA A+ (Self-Study)",
      issuer: "Self-Directed / Online",
      date: "Jan - Feb 2026",
      category: "Programming",
      driveLink: "https://drive.google.com/file/d/1O2P3Q4R5S6T7U8V9W0X1Y2Z3A4B5C6D7/view?usp=sharing"
    },
    {
      id: "cisco-networking-fundamentals",
      title: "Networking Fundamentals — Network Basics",
      issuer: "Cisco Networking Academy — UCAS (22 Hrs)",
      date: "Jan 2026",
      category: "Networking",
      driveLink: "https://drive.google.com/file/d/1E2F3G4H5I6J7K8L9M0N1O2P3Q4R5S6T7/view?usp=sharing"
    },
    {
      id: "tryhackme-offensive",
      title: "Offensive Security Intro",
      issuer: "TryHackMe",
      date: "Dec 2025",
      category: "Cybersecurity",
      driveLink: "https://drive.google.com/file/d/1U2V3W4X5Y6Z7A8B9C0D1E2F3G4H5I6J7/view?usp=sharing"
    },
    {
      id: "canva-coursera",
      title: "Canva for Beginners",
      issuer: "Coursera - Freedom Learning Group",
      date: "Nov 2025",
      category: "Design",
      driveLink: "https://drive.google.com/file/d/1K2L3M4N5O6P7Q8R9S0T1U2V3W4X5Y6Z7/view?usp=sharing"
    },
    {
      id: "electrician-diploma",
      title: "Professional Home Electrician Diploma",
      issuer: "Golden House Consulting & Training (80 Hrs)",
      date: "Sep 2019",
      category: "Other",
      driveLink: "https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7/view?usp=sharing"
    }
  ];

  const categories = ["all", "Cybersecurity", "Networking", "Programming", "Computer Skills", "AI", "Design", "Business Skills", "Other"];
  
  const filteredCerts = selectedCertCategory === "all" 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCertCategory);

  const categoryColors: Record<string, string> = {
    "Cybersecurity": "bg-red-500/10 text-red-600 border-red-200",
    "Networking": "bg-blue-500/10 text-blue-600 border-blue-200",
    "Programming": "bg-purple-500/10 text-purple-600 border-purple-200",
    "Computer Skills": "bg-green-500/10 text-green-600 border-green-200",
    "AI": "bg-yellow-500/10 text-yellow-600 border-yellow-200",
    "Design": "bg-pink-500/10 text-pink-600 border-pink-200",
    "Business Skills": "bg-indigo-500/10 text-indigo-600 border-indigo-200",
    "Other": "bg-gray-500/10 text-gray-600 border-gray-200"
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
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
            <a href="#about" className="text-sm hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="text-sm hover:text-cyan-400 transition">Skills</a>
            <a href="#experience" className="text-sm hover:text-cyan-400 transition">Experience</a>
            <a href="#credentials" className="text-sm hover:text-cyan-400 transition">Credentials</a>
            <a href="#projects" className="text-sm hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="text-sm hover:text-cyan-400 transition">Contact</a>
            <a 
              href="https://drive.google.com/drive/u/0/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition"
            >
              Archive
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
              <span className="text-cyan-400 text-sm font-medium">🔒 System Status: Online & Secure</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Mahmoud Sami Kullab
            </h1>
            <p className="text-xl text-muted-foreground">
              ICT Specialist • Cybersecurity Student • Developer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Over 5 years of practical experience securing digital frontiers. Expert in IT support, hardware maintenance, and cybersecurity frameworks. Pursuing a Diploma in Cybersecurity at UCAS.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a href="#contact" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition transform hover:scale-105">
              Hire Me
            </a>
            <a 
              href="https://files.manuscdn.com/user_upload_by_module/session_file/310519663287825236/PbMODnWwWexksCUx.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition flex items-center gap-2"
            >
              <Download size={18} /> Download CV
            </a>
            <a href="#projects" className="px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-600/10 transition">
              View Projects
            </a>
            <a 
              href="https://drive.google.com/drive/u/0/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-600/10 transition flex items-center gap-2"
            >
              <Archive size={18} /> View Drive Archive
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
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
              <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </Card>
            <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
              <div className="text-3xl font-bold text-cyan-400 mb-2">17+</div>
              <p className="text-muted-foreground">Certifications</p>
            </Card>
            <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
              <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
              <p className="text-muted-foreground">Tools Mastered</p>
            </Card>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Dedicated ICT Specialist and Cybersecurity student with deep expertise in IT support, hardware maintenance, network troubleshooting, and data management. Currently volunteering with the Palestinian Red Crescent Society (PRCS). Developer of ProLaptop Ultimate v3.1, a comprehensive 100-tool Windows maintenance and cybersecurity framework. Holds multiple global certifications from NVIDIA, Cisco Networking Academy, HP LIFE, Edraak ICDL, and TryHackMe.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Core Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <span className="text-cyan-400">▸</span> Advanced Skills
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
                <span className="text-cyan-400">▸</span> Intermediate Skills
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
                <span className="text-cyan-400">▸</span> Technologies
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
            <Briefcase className="text-cyan-400" /> Work History
          </h2>
          <div className="space-y-6">
            <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-lg">ICT Specialist (Volunteer)</h3>
                <span className="text-cyan-400 text-sm">Jan 2024 – Present</span>
              </div>
              <p className="text-cyan-400 text-sm mb-3">Palestinian Red Crescent Society (PRCS) — Khan Younis</p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Provide direct and remote technical support, resolving system and network issues efficiently.</li>
                <li>• Maintain and manage IT infrastructure to ensure continuous daily operations.</li>
                <li>• Implement information security procedures and policies to protect institutional data.</li>
              </ul>
            </Card>

            <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-lg">Data Entry Clerk (Volunteer)</h3>
                <span className="text-cyan-400 text-sm">Jan 2024 – Present</span>
              </div>
              <p className="text-cyan-400 text-sm mb-3">Palestinian Red Crescent Society (PRCS) — Khan Younis</p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Accurately manage database entry and organize digital records for integrity and compliance.</li>
                <li>• Conduct strict data verification and quality checks to minimize documentation errors.</li>
              </ul>
            </Card>

            <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-lg">IT Technician & Programmer</h3>
                <span className="text-cyan-400 text-sm">Jan 2019 – Present</span>
              </div>
              <p className="text-cyan-400 text-sm mb-3">Self-Employed (Pro Laptop) — Khan Younis</p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Perform advanced maintenance and programming for smartphone and PC clients.</li>
                <li>• Diagnose and resolve complex hardware and software malfunctions.</li>
                <li>• Developed and launched promotional materials and infographics via Canva.</li>
              </ul>
            </Card>

            <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-lg">Emergency Vaccination Campaign Worker</h3>
                <span className="text-cyan-400 text-sm">Sep 2024 – Oct 2024</span>
              </div>
              <p className="text-cyan-400 text-sm mb-3">UNICEF — Gaza Strip</p>
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
            <Award className="text-cyan-400" /> Top Certifications & Badges
          </h2>
          
          {/* Filter Tabs */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid grid-cols-5 md:grid-cols-9 gap-2 bg-transparent h-auto p-0">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  onClick={() => setSelectedCertCategory(cat)}
                  className="px-3 py-2 text-xs rounded-lg border border-border data-[state=active]:border-cyan-400 data-[state=active]:bg-cyan-400/10 data-[state=active]:text-cyan-400"
                >
                  {cat === "all" ? "All" : cat}
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
                        <h3 className="font-bold text-sm group-hover:text-cyan-400 transition">{cert.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                      </div>
                      <Badge className={`${categoryColors[cert.category] || 'bg-gray-500/10 text-gray-600'} text-xs whitespace-nowrap ml-2`}>
                        {cert.category}
                      </Badge>
                    </div>
                    <p className="text-xs text-cyan-400">{cert.date}</p>
                    <div className="mt-3 text-xs text-gray-500 group-hover:text-cyan-400 transition flex items-center gap-1">
                      View Certificate <ExternalLink size={12} />
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>{cert.title}</DialogTitle>
                    <DialogDescription>{cert.issuer}</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Date Issued:</span>
                      <span className="font-semibold">{cert.date}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Category:</span>
                      <Badge className={categoryColors[cert.category]}>{cert.category}</Badge>
                    </div>
                    <a
                      href={cert.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={18} /> View on Google Drive
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400 mb-4">
              Showing {filteredCerts.length} of {certificates.length} certifications
            </p>
            <a
              href="https://drive.google.com/drive/u/0/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition"
            >
              View All Certificates in Drive
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Code className="text-cyan-400" /> Key Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
              <h3 className="font-bold text-lg mb-2">ProLaptop Ultimate v3.1</h3>
              <p className="text-sm text-gray-400 mb-4">
                A robust 100-tool Windows PC maintenance and cybersecurity framework built with PowerShell and BAT.
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
                View on GitHub <ExternalLink size={14} />
              </a>
            </Card>

            <Card className="p-6 bg-background border-border hover:border-cyan-400/50 transition">
              <h3 className="font-bold text-lg mb-2">Library Management System</h3>
              <p className="text-sm text-gray-400 mb-4">
                A console-based application utilizing Object-Oriented Programming (OOP) principles with complete CRUD operations.
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
                View on GitHub <ExternalLink size={14} />
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Initialize Contact</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
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

          <div className="text-center">
            <p className="text-gray-400 mb-4">Ready to collaborate on cybersecurity and IT projects?</p>
            <a href="mailto:mahmood.kullab2004@gmail.com" className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition">
              Send Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border text-center text-sm text-gray-500">
        <p>© 2026 Mahmoud Sami Kullab. All rights reserved. | Cybersecurity & IT Solutions</p>
      </footer>
    </div>
  );
}

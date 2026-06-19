import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown, Download, FileText } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Cyberpunk Minimalism Portfolio - Enhanced Version
 * Design Philosophy: Bold cyan accents, deep dark backgrounds, sharp geometric elements
 * Color Palette: #00D9FF (cyan), #6B21A8 (purple), #0A0E27 (dark bg), #E8F0FF (light text)
 */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState<"en" | "ar">("en");
  const [certsVisible, setCertsVisible] = useState(false);

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
      nav: { about: "About", skills: "Skills", experience: "Experience", credentials: "Credentials", projects: "Projects", contact: "Contact" },
      hero: {
        tag: "System Status: Online & Secure",
        title: "Mahmoud Sami Kullab",
        subtitle: "ICT Specialist · Cybersecurity Student · Programmer",
        description: "Over 5 years of practical experience securing digital frontiers. Expert in IT support, hardware maintenance, and cybersecurity frameworks. Pursuing a Diploma in Cybersecurity at UCAS.",
        cta1: "Hire Me",
        cta2: "📄 Download CV",
        cta3: "View Projects",
        cta4: "📁 View Drive Archive"
      },
      about: {
        label: "01 // Identity",
        title: "About Me",
        bio: "I'm a dedicated ICT Specialist and Cybersecurity student based in Khan Younis, Gaza Strip, with over 5 years of practical experience in IT support, hardware/software maintenance, and secure networking.",
        bio2: "Currently volunteering with the Palestinian Red Crescent Society (PRCS) as an ICT Specialist while pursuing my Diploma in Cybersecurity at UCAS. I have built real-world cybersecurity frameworks like ProLaptop Ultimate using PowerShell.",
        objective: "Career Objective",
        objectiveText: "Seeking opportunities in Cybersecurity, IT Support, and Network Administration while continuing professional development in offensive security and system administration.",
        stats: [
          { label: "Years Experience", value: "5+" },
          { label: "Verified Credentials", value: "17+" },
          { label: "Tools Coded", value: "100+" },
          { label: "CyberSec Diploma", value: "UCAS" }
        ]
      },
      skills: {
        label: "02 // Capabilities",
        title: "Core Expertise",
        categories: [
          {
            name: "Advanced",
            skills: ["IT Support", "Hardware Maintenance", "Software Diagnostics", "Windows Administration", "PowerShell & BAT", "Data Entry & Mgmt"]
          },
          {
            name: "Intermediate",
            skills: ["Cybersecurity Basics", "Offensive Security", "IPv4/IPv6 Networking", "Routing & Switching", "Linux Fundamentals", "Java (OOP, CRUD)"]
          },
          {
            name: "Technologies & Tools",
            skills: ["Windows & Linux OS", "PowerShell & CMD", "Java", "Git & GitHub", "Cisco Packet Tracer", "Nmap", "AI Basics (Jetson Nano)", "Microsoft Office", "Canva Pro"]
          }
        ]
      },
      experience: {
        label: "03 // Execution Logs",
        title: "Work History",
        items: [
          {
            date: "Jan 2024 – Present",
            title: "ICT Specialist",
            badge: "Volunteer",
            org: "Palestinian Red Crescent Society (PRCS) · Khan Younis",
            desc: "Provided direct and remote technical support. Maintained IT infrastructure ensuring continuity of operations. Troubleshooted hardware/software malfunctions and assisted in implementing information security procedures to protect institutional data."
          },
          {
            date: "Jan 2024 – Present",
            title: "Data Entry Clerk",
            badge: "Volunteer",
            org: "Palestinian Red Crescent Society (PRCS) · Khan Younis",
            desc: "Accurately entered and managed databases. Organized digital records for integrity and compliance. Conducted data verification and quality checks to minimize errors."
          },
          {
            date: "Jan 2019 – Present",
            title: "IT Technician & Programmer",
            badge: "Self-Employed",
            org: "Pro Laptop · Khan Younis",
            desc: "Advanced maintenance & programming for smartphones and PCs. Diagnosed client hardware/software issues. Built the ProLaptop Ultimate v3.1 PowerShell framework. Designed promotional materials."
          },
          {
            date: "Sep 2024 – Oct 2024",
            title: "Emergency Vaccination Campaign Worker",
            badge: "UNICEF",
            org: "UNICEF — Gaza Strip",
            desc: "Managed field logistics and coordinated with local health teams for the national polio campaign."
          }
        ]
      },
      credentials: {
        label: "04 // Verification",
        title: "Top Certifications & Badges",
        showMore: "⬇ Show All Certificates (17+)",
        showLess: "⬆ Hide Certificates",
        certs: [
          { name: "Getting Started with AI on Jetson Nano", issuer: "NVIDIA", date: "Jun 16, 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ View Certificate" },
          { name: "Networking Basics", issuer: "Cisco Networking Academy", date: "May 12, 2026", link: "https://www.credly.com/badges/94cda99a-f841-4585-aeb3-8ef137ccfd63/public_url", linkText: "✓ Verify on Credly" },
          { name: "Nmap Live Host Discovery", issuer: "TryHackMe", date: "May 26, 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ View Certificate" },
          { name: "Getting Started with Cisco Packet Tracer (Instructor-Led)", issuer: "Cisco Networking Academy — UCAS", date: "May 17, 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ View Certificate" },
          { name: "ICDL Base Specialization", issuer: "Edraak", date: "Apr 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ View Certificate" },
          { name: "cat linux.txt (Linux Fundamentals)", issuer: "TryHackMe", date: "Jan 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ View Badge" }
        ],
        certsHidden: [
          { name: "Business Email", issuer: "HP LIFE (HP Foundation)", date: "Jun 17, 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ View Certificate" },
          { name: "Active Reconnaissance", issuer: "TryHackMe", date: "May 26, 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ View Certificate" },
          { name: "Passive Reconnaissance", issuer: "TryHackMe", date: "May 26, 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ View Certificate" },
          { name: "Getting Started with Cisco Packet Tracer (Self-Paced)", issuer: "Cisco Networking Academy", date: "Apr 18, 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ View Certificate" },
          { name: "Introduction to Packet Tracer", issuer: "Cisco Networking Academy", date: "Apr 18, 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ View Certificate" },
          { name: "Networking Fundamentals", issuer: "Cisco Networking Academy — UCAS", date: "Jan 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ View Certificate" },
          { name: "Offensive Security Intro", issuer: "TryHackMe", date: "Dec 2025", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ View Certificate" },
          { name: "Canva for Beginners", issuer: "Coursera - Freedom Learning Group", date: "Nov 2025", link: "https://coursera.org/verify/X6JYWIUJITVX", linkText: "✓ Verify on Coursera" },
          { name: "Java Programming & CompTIA A+ (Self-Study)", issuer: "Self-Directed / Online", date: "Jan - Feb 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ View Certificate" },
          { name: "Professional Home Electrician Diploma", issuer: "Golden House Consulting & Training", date: "Sep 2019", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ View Certificate" },
          { name: "Word Processing", issuer: "Edraak - ICDL Base", date: "Apr 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ View Certificate" },
          { name: "Excel Spreadsheets", issuer: "Edraak - ICDL Base", date: "Apr 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ View Certificate" },
          { name: "Internet & Email Essentials", issuer: "Edraak - ICDL Base", date: "Apr 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ View Certificate" }
        ]
      },
      projects: {
        label: "05 // System Builds",
        title: "Key Projects",
        items: [
          {
            title: "ProLaptop Ultimate v3.3",
            icon: "🛡️",
            tech: ["PowerShell", "BAT", "WinPE"],
            description: "A comprehensive Windows PC maintenance and cybersecurity framework with 100+ tools across 7 categories. Built for professional IT technicians.",
            features: ["Power & Performance — 6 tools", "System Cleaning — 10 tools", "System Repair — 18 tools", "Cyber Security — 15 tools"],
            link: "https://github.com/mahmoud-kullab/ProLaptop-Ultimate"
          },
          {
            title: "Library Management System",
            icon: "📚",
            tech: ["Java", "OOP", "Console"],
            description: "A console-based library management system built with Java using Object-Oriented Programming principles. Demonstrates encapsulation, class design, and CRUD operations.",
            features: ["Display, search, borrow, return, add & delete books", "Input validation and exception handling"],
            link: "https://github.com/mahmoud-kullab/Library-Management-System-Java"
          }
        ]
      },
      contact: {
        label: "06 // Connect",
        title: "Initialize Contact",
        email: "mahmood.kullab2004@gmail.com",
        phone: "+970 599 548 716",
        linkedin: "linkedin.com/in/m-kullab",
        github: "github.com/mahmoud-kullab",
        cta: "Ready to Collaborate?",
        ctaDesc: "I am currently open to new opportunities. Let's discuss how I can contribute to your team.",
        sendEmail: "✉️ Send Email",
        whatsapp: "💬 Message on WhatsApp"
      }
    },
    ar: {
      nav: { about: "عني", skills: "المهارات", experience: "الخبرة", credentials: "الشهادات", projects: "المشاريع", contact: "تواصل" },
      hero: {
        tag: "حالة النظام: متصل ومحمي",
        title: "محمود سامي كلاب",
        subtitle: "أخصائي تقنية معلومات · طالب أمن سيبراني · مبرمج",
        description: "أكثر من 5 سنوات من الخبرة العملية في تأمين الحدود الرقمية. خبير في الدعم الفني وأطر الأمن السيبراني. أدرس حالياً دبلوم الأمن السيبراني في الكلية الجامعية.",
        cta1: "وظفني",
        cta2: "📄 تحميل السيرة الذاتية",
        cta3: "عرض المشاريع",
        cta4: "📁 تصفح أرشيف الشهادات"
      },
      about: {
        label: "01 // الهوية",
        title: "من أنا",
        bio: "أنا أخصائي تقنية معلومات وطالب أمن سيبراني من خان يونس، قطاع غزة، أمتلك أكثر من 5 سنوات من الخبرة العملية في دعم تكنولوجيا المعلومات، صيانة الأجهزة والبرمجيات، والشبكات الآمنة.",
        bio2: "أتطوع حالياً كأخصائي تقنية معلومات في جمعية الهلال الأحمر الفلسطيني تزامناً مع دراستي. أقوم بتطوير أطر عمل تقنية حقيقية مثل ProLaptop Ultimate باستخدام PowerShell.",
        objective: "الهدف المهني",
        objectiveText: "أبحث عن فرص مهنية في مجالات الأمن السيبراني، الدعم الفني، وإدارة الشبكات، مع الاستمرار في التطوير المهني في مجالات الأمن الهجومي وإدارة الأنظمة.",
        stats: [
          { label: "سنوات خبرة", value: "5+" },
          { label: "شهادة معتمدة", value: "17+" },
          { label: "أداة مبرمجة", value: "100+" },
          { label: "دبلوم تخصصي", value: "UCAS" }
        ]
      },
      skills: {
        label: "02 // القدرات",
        title: "التخصص التقني",
        categories: [
          {
            name: "مستوى متقدم",
            skills: ["الدعم الفني", "صيانة الأجهزة", "تشخيص البرامج", "إدارة Windows", "PowerShell و BAT", "إدارة البيانات"]
          },
          {
            name: "مستوى متوسط",
            skills: ["أساسيات الأمن السيبراني", "الأمن الهجومي", "شبكات IPv4/IPv6", "التوجيه والتبديل", "أساسيات Linux", "Java (OOP, CRUD)"]
          },
          {
            name: "التقنيات والأدوات",
            skills: ["Windows و Linux", "PowerShell و CMD", "Java", "Git و GitHub", "Cisco Packet Tracer", "Nmap", "أساسيات الذكاء الاصطناعي", "Microsoft Office", "Canva Pro"]
          }
        ]
      },
      experience: {
        label: "03 // سجلات التنفيذ",
        title: "تاريخ العمل",
        items: [
          {
            date: "يناير 2024 – الحالي",
            title: "أخصائي تقنية معلومات",
            badge: "تطوع",
            org: "جمعية الهلال الأحمر الفلسطيني · خان يونس",
            desc: "تقديم الدعم الفني المباشر وعن بعد. صيانة البنية التحتية لضمان استمرارية العمل. تشخيص أعطال الأجهزة والبرامج والمساعدة في تطبيق إجراءات أمن المعلومات."
          },
          {
            date: "يناير 2024 – الحالي",
            title: "موظف إدخال بيانات",
            badge: "تطوع",
            org: "جمعية الهلال الأحمر الفلسطيني · خان يونس",
            desc: "إدخال وإدارة قواعد البيانات بدقة. تنظيم السجلات الرقمية لضمان سلامتها. إجراء عمليات التحقق من البيانات وفحوصات الجودة."
          },
          {
            date: "يناير 2019 – الحالي",
            title: "فني تقنية معلومات ومبرمج",
            badge: "عمل حر",
            org: "برو لاب توب · خان يونس",
            desc: "صيانة وبرمجة متقدمة للهواتف والحواسيب. تشخيص أعطال أجهزة العملاء. بناء إطار ProLaptop Ultimate v3.1 باستخدام PowerShell."
          },
          {
            date: "سبتمبر 2024 – أكتوبر 2024",
            title: "عامل حملة التطعيم الطارئة",
            badge: "اليونيسف",
            org: "اليونيسف — قطاع غزة",
            desc: "إدارة الخدمات اللوجستية والتنسيق مع فرق الصحة المحلية لحملة شلل الأطفال الوطنية."
          }
        ]
      },
      credentials: {
        label: "04 // المصادقة",
        title: "أبرز الشهادات والإنجازات",
        showMore: "⬇ عرض جميع الشهادات (17+)",
        showLess: "⬆ إخفاء الشهادات",
        certs: [
          { name: "Getting Started with AI on Jetson Nano", issuer: "NVIDIA", date: "16 يونيو 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ عرض الشهادة" },
          { name: "Networking Basics", issuer: "Cisco Networking Academy", date: "12 مايو 2026", link: "https://www.credly.com/badges/94cda99a-f841-4585-aeb3-8ef137ccfd63/public_url", linkText: "✓ التحقق على Credly" },
          { name: "Nmap Live Host Discovery", issuer: "TryHackMe", date: "26 مايو 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ عرض الشهادة" },
          { name: "Getting Started with Cisco Packet Tracer (Instructor-Led)", issuer: "Cisco Networking Academy — UCAS", date: "17 مايو 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ عرض الشهادة" },
          { name: "ICDL Base Specialization", issuer: "إدراك", date: "أبريل 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ عرض الشهادة" },
          { name: "cat linux.txt (Linux Fundamentals)", issuer: "TryHackMe", date: "يناير 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ عرض الشارة" }
        ],
        certsHidden: [
          { name: "Business Email", issuer: "HP LIFE (HP Foundation)", date: "17 يونيو 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ عرض الشهادة" },
          { name: "Active Reconnaissance", issuer: "TryHackMe", date: "26 مايو 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ عرض الشهادة" },
          { name: "Passive Reconnaissance", issuer: "TryHackMe", date: "26 مايو 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ عرض الشهادة" },
          { name: "Getting Started with Cisco Packet Tracer (Self-Paced)", issuer: "Cisco Networking Academy", date: "18 أبريل 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ عرض الشهادة" },
          { name: "Introduction to Packet Tracer", issuer: "Cisco Networking Academy", date: "18 أبريل 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ عرض الشهادة" },
          { name: "Networking Fundamentals", issuer: "Cisco Networking Academy — UCAS", date: "يناير 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ عرض الشهادة" },
          { name: "Offensive Security Intro", issuer: "TryHackMe", date: "ديسمبر 2025", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ عرض الشهادة" },
          { name: "Canva for Beginners", issuer: "Coursera - Freedom Learning Group", date: "نوفمبر 2025", link: "https://coursera.org/verify/X6JYWIUJITVX", linkText: "✓ التحقق على Coursera" },
          { name: "Java Programming & CompTIA A+ (Self-Study)", issuer: "Self-Directed / Online", date: "يناير - فبراير 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ عرض الشهادة" },
          { name: "Professional Home Electrician Diploma", issuer: "Golden House Consulting & Training", date: "سبتمبر 2019", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ عرض الشهادة" },
          { name: "Word Processing", issuer: "Edraak - ICDL Base", date: "أبريل 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ عرض الشهادة" },
          { name: "Excel Spreadsheets", issuer: "Edraak - ICDL Base", date: "أبريل 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ عرض الشهادة" },
          { name: "Internet & Email Essentials", issuer: "Edraak - ICDL Base", date: "أبريل 2026", link: "https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP", linkText: "✓ عرض الشهادة" }
        ]
      },
      projects: {
        label: "05 // بناء الأنظمة",
        title: "المشاريع البارزة",
        items: [
          {
            title: "ProLaptop Ultimate v3.3",
            icon: "🛡️",
            tech: ["PowerShell", "BAT", "WinPE"],
            description: "إطار متكامل لصيانة وأمن أجهزة Windows يضم 100+ أداة موزعة على 7 فئات. مصمم للتقنيين المحترفين.",
            features: ["الطاقة والأداء — 6 أدوات", "تنظيف النظام — 10 أدوات", "إصلاح النظام — 18 أداة", "الأمن السيبراني — 15 أداة"],
            link: "https://github.com/mahmoud-kullab/ProLaptop-Ultimate"
          },
          {
            title: "نظام إدارة المكتبة",
            icon: "📚",
            tech: ["Java", "OOP", "Console"],
            description: "نظام مكتبة قائم على وحدة التحكم مبني بـ Java باستخدام مبادئ البرمجة الكائنية. يُظهر التغليف وتصميم الكلاسات.",
            features: ["عرض، بحث، استعارة، إرجاع، إضافة وحذف الكتب", "التحقق من المدخلات ومعالجة الاستثناءات"],
            link: "https://github.com/mahmoud-kullab/Library-Management-System-Java"
          }
        ]
      },
      contact: {
        label: "06 // تواصل",
        title: "تأسيس الاتصال",
        email: "mahmood.kullab2004@gmail.com",
        phone: "+970 599 548 716",
        linkedin: "linkedin.com/in/m-kullab",
        github: "github.com/mahmoud-kullab",
        cta: "جاهز للتعاون؟",
        ctaDesc: "أنا متاح حالياً لفرص عمل جديدة. دعنا نناقش كيف يمكنني إضافة قيمة لفريقك.",
        sendEmail: "✉️ إرسال بريد إلكتروني",
        whatsapp: "💬 تواصل عبر واتساب"
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
            <a href="https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-1 text-xs px-3 py-2 bg-primary/10 border border-primary/30 rounded text-primary hover:bg-primary/20 transition-colors">
              <FileText className="w-3 h-3" />
              <span className="hidden lg:inline">Archive</span>
            </a>
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
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              {t.hero.cta1}
            </Button>
            <a href="https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full">
                {t.hero.cta2}
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              {t.hero.cta3}
            </Button>
            <a href="https://drive.google.com/drive/folders/10IcPKqgIAz5V0YXPwwA5WdnrLqLFM9kP" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full">
                {t.hero.cta4}
              </Button>
            </a>
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
              <p className="text-foreground/90 text-lg leading-relaxed mb-4">
                {t.about.bio}
              </p>
              <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                {t.about.bio2}
              </p>
              <Card className="bg-background border-primary p-6">
                <h3 className="text-lg font-bold text-primary mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {t.about.objective}
                </h3>
                <p className="text-foreground/80">{t.about.objectiveText}</p>
              </Card>
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
          <div className="grid md:grid-cols-3 gap-6">
            {t.skills.categories.map((cat, i) => (
              <Card key={i} className="bg-card border-border p-6 hover:border-primary hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-primary mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span key={j} className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-primary text-sm font-bold mb-2">{t.experience.label}</div>
          <h2 className="text-4xl font-bold mb-12 text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>
            {t.experience.title}
          </h2>
          <div className="space-y-8">
            {t.experience.items.map((item, i) => (
              <Card key={i} className="bg-background border-border p-8 hover:border-primary transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted mt-1">{item.org}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary font-medium">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-primary font-semibold mb-3">{item.date}</p>
                <p className="text-foreground/80 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section id="credentials" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-primary text-sm font-bold mb-2">{t.credentials.label}</div>
          <h2 className="text-4xl font-bold mb-12 text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>
            {t.credentials.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {t.credentials.certs.map((cert, i) => (
              <Card key={i} className="bg-card border-border p-6 hover:border-primary transition-colors">
                <h3 className="font-bold text-foreground mb-2 line-clamp-2">{cert.name}</h3>
                <p className="text-sm text-primary font-medium mb-1">{cert.issuer}</p>
                <p className="text-xs text-muted mb-4">{cert.date}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:text-primary/80 font-semibold">
                  {cert.linkText}
                </a>
              </Card>
            ))}
          </div>
          {certsVisible && (
            <div className="grid md:grid-cols-3 gap-6 mb-8 animate-in fade-in duration-300">
              {t.credentials.certsHidden.map((cert, i) => (
                <Card key={i} className="bg-card border-border p-6 hover:border-primary transition-colors">
                  <h3 className="font-bold text-foreground mb-2 line-clamp-2">{cert.name}</h3>
                  <p className="text-sm text-primary font-medium mb-1">{cert.issuer}</p>
                  <p className="text-xs text-muted mb-4">{cert.date}</p>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:text-primary/80 font-semibold">
                    {cert.linkText}
                  </a>
                </Card>
              ))}
            </div>
          )}
          <div className="text-center">
            <Button 
              onClick={() => setCertsVisible(!certsVisible)}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {certsVisible ? t.credentials.showLess : t.credentials.showMore}
            </Button>
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
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, j) => (
                    <li key={j} className="text-sm text-foreground/70 flex items-center gap-2">
                      <span className="text-primary">▹</span> {feature}
                    </li>
                  ))}
                </ul>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                    View on GitHub →
                  </Button>
                </a>
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
                    {t.contact.sendEmail}
                  </Button>
                </a>
                <a href={`https://wa.me/970599548716`} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                    {t.contact.whatsapp}
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

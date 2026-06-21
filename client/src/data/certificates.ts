export interface Certificate {
  id: string;
  titleEn: string;
  titleAr: string;
  issuerEn: string;
  issuerAr: string;
  date: string;
  category: string;
  categoryAr: string;
  driveLink: string;
  externalLink?: string;
}

export const certificates: Certificate[] = [
  {
    id: "cisco-packet-tracer-1",
    titleEn: "Getting Started with Cisco Packet Tracer",
    titleAr: "البدء مع Cisco Packet Tracer",
    issuerEn: "Cisco Networking Academy",
    issuerAr: "أكاديمية Cisco للشبكات",
    date: "Apr 2026",
    category: "Networking",
    categoryAr: "الشبكات",
    driveLink: "https://drive.google.com/file/d/1dDwB6xIkDZY5WOi2lwslvrXgOZqCo8s3/view?usp=drive_link"
  },
  {
    id: "intro-packet-tracer",
    titleEn: "Introduction to Packet Tracer",
    titleAr: "مقدمة إلى Packet Tracer",
    issuerEn: "Cisco Networking Academy",
    issuerAr: "أكاديمية Cisco للشبكات",
    date: "Apr 2026",
    category: "Networking",
    categoryAr: "الشبكات",
    driveLink: "https://drive.google.com/file/d/1jFwmfFBz4IHljss62zt5DmhGfIo5X5AQ/view?usp=drive_link"
  },
  {
    id: "intro-packet-tracer-exam",
    titleEn: "Introduction to Packet Tracer Exam",
    titleAr: "امتحان مقدمة Packet Tracer",
    issuerEn: "Cisco Networking Academy",
    issuerAr: "أكاديمية Cisco للشبكات",
    date: "Apr 2026",
    category: "Networking",
    categoryAr: "الشبكات",
    driveLink: "https://drive.google.com/file/d/1lPMrhc4VKPjhU_MH_A7xCPTbIDVJLMF0/view?usp=sharing"
  },
  {
    id: "networking-basics",
    titleEn: "Networking Basics",
    titleAr: "أساسيات الشبكات",
    issuerEn: "Cisco Networking Academy",
    issuerAr: "أكاديمية Cisco للشبكات",
    date: "May 2026",
    category: "Networking",
    categoryAr: "الشبكات",
    driveLink: "https://drive.google.com/file/d/1guGYLeRrz_hLjG6w6Jp2lja5Xbh1qhaD/view?usp=drive_link"
  },
  {
    id: "networking-basics-exam",
    titleEn: "Networking Basics Exam",
    titleAr: "امتحان أساسيات الشبكات",
    issuerEn: "Cisco Networking Academy",
    issuerAr: "أكاديمية Cisco للشبكات",
    date: "May 2026",
    category: "Networking",
    categoryAr: "الشبكات",
    driveLink: "https://drive.google.com/file/d/1mvrYq9GdYTpPD9n-RuWbFl_CxFUAjc9-/view?usp=drive_link"
  },
  {
    id: "cisco-packet-tracer-ucas",
    titleEn: "Getting Started with Cisco Packet Tracer (UCAS)",
    titleAr: "البدء مع Cisco Packet Tracer (UCAS)",
    issuerEn: "Cisco Networking Academy - UCAS",
    issuerAr: "أكاديمية Cisco للشبكات - UCAS",
    date: "May 2026",
    category: "Networking",
    categoryAr: "الشبكات",
    driveLink: "https://drive.google.com/file/d/1M9mRMt1nzZeXO2WvFW5bt_Q9iJanI3xe/view?usp=sharing"
  },
  {
    id: "nmap-discovery",
    titleEn: "Nmap Live Host Discovery",
    titleAr: "اكتشاف المضيفين النشطين مع Nmap",
    issuerEn: "TryHackMe",
    issuerAr: "TryHackMe",
    date: "May 2026",
    category: "Cybersecurity",
    categoryAr: "الأمن السيبراني",
    driveLink: "https://tryhackme.com/p/Mahmoud.Sami.kullab",
    externalLink: "https://tryhackme.com/p/Mahmoud.Sami.kullab"
  },
  {
    id: "passive-recon",
    titleEn: "Passive Reconnaissance",
    titleAr: "الاستطلاع السلبي",
    issuerEn: "TryHackMe",
    issuerAr: "TryHackMe",
    date: "May 2026",
    category: "Cybersecurity",
    categoryAr: "الأمن السيبراني",
    driveLink: "https://tryhackme.com/p/Mahmoud.Sami.kullab",
    externalLink: "https://tryhackme.com/p/Mahmoud.Sami.kullab"
  },
  {
    id: "active-recon",
    titleEn: "Active Reconnaissance",
    titleAr: "الاستطلاع النشط",
    issuerEn: "TryHackMe",
    issuerAr: "TryHackMe",
    date: "May 2026",
    category: "Cybersecurity",
    categoryAr: "الأمن السيبراني",
    driveLink: "https://tryhackme.com/p/Mahmoud.Sami.kullab",
    externalLink: "https://tryhackme.com/p/Mahmoud.Sami.kullab"
  },
  {
    id: "linux-fundamentals",
    titleEn: "cat linux.txt — Linux Fundamentals Badge",
    titleAr: "شارة أساسيات Linux",
    issuerEn: "TryHackMe",
    issuerAr: "TryHackMe",
    date: "Jan 2026",
    category: "Computer Skills",
    categoryAr: "مهارات الحاسوب",
    driveLink: "https://tryhackme.com/p/Mahmoud.Sami.kullab",
    externalLink: "https://tryhackme.com/p/Mahmoud.Sami.kullab"
  },
  {
    id: "offensive-security",
    titleEn: "Offensive Security Intro",
    titleAr: "مقدمة الأمن الهجومي",
    issuerEn: "TryHackMe",
    issuerAr: "TryHackMe",
    date: "Dec 2025",
    category: "Cybersecurity",
    categoryAr: "الأمن السيبراني",
    driveLink: "https://tryhackme.com/p/Mahmoud.Sami.kullab",
    externalLink: "https://tryhackme.com/p/Mahmoud.Sami.kullab"
  },
  {
    id: "computer-essentials",
    titleEn: "Computer Essentials",
    titleAr: "أساسيات الحاسوب",
    issuerEn: "Edraak - ICDL",
    issuerAr: "إدراك - ICDL",
    date: "Apr 2026",
    category: "Computer Skills",
    categoryAr: "مهارات الحاسوب",
    driveLink: "https://drive.google.com/file/d/1xUFYHBJhpgetpadGNIkC26Ln7ZAHkZHV/view?usp=drive_link"
  },
  {
    id: "excel-spreadsheets",
    titleEn: "Excel Spreadsheets",
    titleAr: "جداول Excel",
    issuerEn: "Edraak - ICDL",
    issuerAr: "إدراك - ICDL",
    date: "Apr 2026",
    category: "Computer Skills",
    categoryAr: "مهارات الحاسوب",
    driveLink: "https://drive.google.com/file/d/1KMfF0Fj06pa7WvqnCT8ejR5qSfjUfRnQ/view?usp=drive_link"
  },
  {
    id: "icdl-base",
    titleEn: "ICDL Base Specialization",
    titleAr: "تخصص ICDL الأساسي",
    issuerEn: "Edraak - ICDL",
    issuerAr: "إدراك - ICDL",
    date: "Apr 2026",
    category: "Computer Skills",
    categoryAr: "مهارات الحاسوب",
    driveLink: "https://drive.google.com/file/d/1dtgvu2_pG_fM-EwI6hkiztaIQd0Sx51k/view?usp=drive_link"
  },
  {
    id: "email-essentials",
    titleEn: "Internet & Email Essentials",
    titleAr: "أساسيات الإنترنت والبريد الإلكتروني",
    issuerEn: "Edraak - ICDL",
    issuerAr: "إدراك - ICDL",
    date: "Apr 2026",
    category: "Computer Skills",
    categoryAr: "مهارات الحاسوب",
    driveLink: "https://drive.google.com/file/d/11Ka5CnGbvhgQ0UPn4fvLBPK_XKVJGwrQ/view?usp=drive_link"
  },
  {
    id: "word-processing",
    titleEn: "Word Processing",
    titleAr: "معالجة الكلمات",
    issuerEn: "Edraak - ICDL",
    issuerAr: "إدراك - ICDL",
    date: "Apr 2026",
    category: "Computer Skills",
    categoryAr: "مهارات الحاسوب",
    driveLink: "https://drive.google.com/file/d/1k4_ZiBekJSfPwfAKV7jUf9T6lUwvBbdA/view?usp=drive_link"
  },
  {
    id: "canva-beginners",
    titleEn: "Canva for Beginners",
    titleAr: "Canva للمبتدئين",
    issuerEn: "Coursera - Freedom Learning Group",
    issuerAr: "Coursera - مجموعة Freedom Learning",
    date: "Nov 2025",
    category: "Design",
    categoryAr: "التصميم",
    driveLink: "https://drive.google.com/file/d/1diZLIlfj9RqqojNIIbtk5YZQxjafXBTV/view?usp=drive_link"
  },
  {
    id: "jetson-nano-ai",
    titleEn: "Getting Started with AI on Jetson Nano",
    titleAr: "البدء مع الذكاء الاصطناعي على Jetson Nano",
    issuerEn: "NVIDIA",
    issuerAr: "NVIDIA",
    date: "Jun 2026",
    category: "AI",
    categoryAr: "الذكاء الاصطناعي",
    driveLink: "https://drive.google.com/file/d/1SwQJIOuXomIMnYwX-VUdHXgmKAJFQRNA/view?usp=drive_link"
  },
  {
    id: "business-email",
    titleEn: "Business Email",
    titleAr: "البريد الإلكتروني للأعمال",
    issuerEn: "HP LIFE (HP Foundation)",
    issuerAr: "HP LIFE (مؤسسة HP)",
    date: "Jun 2026",
    category: "Business Skills",
    categoryAr: "مهارات الأعمال",
    driveLink: "https://drive.google.com/file/d/1gtQXA-AM2ntcOexIT_z47upkznY_0DC4/view?usp=drive_link"
  },
  {
    id: "electrician-diploma",
    titleEn: "Professional Home Electrician Diploma",
    titleAr: "دبلوم الكهربائي المنزلي المحترف",
    issuerEn: "Golden House Consulting & Training",
    issuerAr: "Golden House للاستشارات والتدريب",
    date: "Sep 2019",
    category: "Other",
    categoryAr: "أخرى",
    driveLink: "https://drive.google.com/file/d/1CLXD3-1rq9pVQzQM_Kd8MBO-Enjc4NlK/view?usp=drive_link"
  }
];

export const categoryColors: Record<string, { light: string; dark: string }> = {
  "Networking": { light: "bg-blue-500/10 text-blue-600 border-blue-200", dark: "bg-blue-500/20 text-blue-400 border-blue-400/30" },
  "Cybersecurity": { light: "bg-red-500/10 text-red-600 border-red-200", dark: "bg-red-500/20 text-red-400 border-red-400/30" },
  "Computer Skills": { light: "bg-green-500/10 text-green-600 border-green-200", dark: "bg-green-500/20 text-green-400 border-green-400/30" },
  "Design": { light: "bg-pink-500/10 text-pink-600 border-pink-200", dark: "bg-pink-500/20 text-pink-400 border-pink-400/30" },
  "AI": { light: "bg-yellow-500/10 text-yellow-600 border-yellow-200", dark: "bg-yellow-500/20 text-yellow-400 border-yellow-400/30" },
  "Business Skills": { light: "bg-indigo-500/10 text-indigo-600 border-indigo-200", dark: "bg-indigo-500/20 text-indigo-400 border-indigo-400/30" },
  "Other": { light: "bg-gray-500/10 text-gray-600 border-gray-200", dark: "bg-gray-500/20 text-gray-400 border-gray-400/30" }
};

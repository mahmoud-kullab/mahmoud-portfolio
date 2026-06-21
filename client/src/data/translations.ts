export type Language = 'en' | 'ar';

export interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.about': { en: 'About', ar: 'عني' },
  'nav.skills': { en: 'Skills', ar: 'المهارات' },
  'nav.experience': { en: 'Experience', ar: 'الخبرة' },
  'nav.credentials': { en: 'Credentials', ar: 'الشهادات' },
  'nav.projects': { en: 'Projects', ar: 'المشاريع' },
  'nav.contact': { en: 'Contact', ar: 'التواصل' },
  'nav.archive': { en: 'Archive', ar: 'الأرشيف' },

  // Hero Section
  'hero.status': { en: '🔒 System Status: Online & Secure', ar: '🔒 حالة النظام: متصل وآمن' },
  'hero.title': { en: 'Mahmoud Sami Kullab', ar: 'محمود سامي كلاب' },
  'hero.subtitle': { en: 'ICT Specialist • Cybersecurity Student • Developer', ar: 'متخصص تقنية معلومات • طالب أمن سيبراني • مطور' },
  'hero.description': { en: 'Over 5 years of practical experience securing digital frontiers. Expert in IT support, hardware maintenance, and cybersecurity frameworks. Pursuing a Diploma in Cybersecurity at UCAS.', ar: 'أكثر من 5 سنوات من الخبرة العملية في تأمين الحدود الرقمية. خبير في دعم تقنية المعلومات وصيانة الأجهزة وأطر الأمن السيبراني. أتابع دبلوم الأمن السيبراني في UCAS.' },
  'hero.hireMe': { en: 'Hire Me', ar: 'استأجرني' },
  'hero.downloadCV': { en: 'Download CV', ar: 'تحميل السيرة الذاتية' },
  'hero.viewProjects': { en: 'View Projects', ar: 'عرض المشاريع' },
  'hero.viewArchive': { en: 'View Drive Archive', ar: 'عرض أرشيف Drive' },

  // About Section
  'about.title': { en: 'About Me', ar: 'عني' },
  'about.experience': { en: 'Years of Experience', ar: 'سنوات الخبرة' },
  'about.certifications': { en: 'Certifications', ar: 'الشهادات' },
  'about.toolsMastered': { en: 'Tools Mastered', ar: 'الأدوات المتقنة' },
  'about.description': { en: 'Dedicated ICT Specialist and Cybersecurity student with deep expertise in IT support, hardware maintenance, network troubleshooting, and data management. Currently volunteering with the Palestinian Red Crescent Society (PRCS). Developer of ProLaptop Ultimate v3.1, a comprehensive 100-tool Windows maintenance and cybersecurity framework. Holds multiple global certifications from NVIDIA, Cisco Networking Academy, HP LIFE, Edraak ICDL, and TryHackMe.', ar: 'متخصص تقنية معلومات مكرس وطالب أمن سيبراني بخبرة عميقة في دعم تقنية المعلومات وصيانة الأجهزة واستكشاف أخطاء الشبكة وإدارة البيانات. حالياً متطوع مع جمعية الهلال الأحمر الفلسطيني (PRCS). مطور ProLaptop Ultimate v3.1، إطار عمل شامل يحتوي على 100 أداة لصيانة Windows والأمن السيبراني. يحمل عدة شهادات عالمية من NVIDIA وأكاديمية Cisco للشبكات و HP LIFE و Edraak ICDL و TryHackMe.' },

  // Skills Section
  'skills.title': { en: 'Core Expertise', ar: 'الخبرات الأساسية' },
  'skills.advanced': { en: 'Advanced Skills', ar: 'المهارات المتقدمة' },
  'skills.intermediate': { en: 'Intermediate Skills', ar: 'المهارات المتوسطة' },
  'skills.technologies': { en: 'Technologies', ar: 'التقنيات' },

  // Experience Section
  'experience.title': { en: 'Work History', ar: 'سجل العمل' },
  'experience.ictSpecialist': { en: 'ICT Specialist (Volunteer)', ar: 'متخصص تقنية معلومات (متطوع)' },
  'experience.dataEntry': { en: 'Data Entry Clerk (Volunteer)', ar: 'موظف إدخال بيانات (متطوع)' },
  'experience.itTechnician': { en: 'IT Technician & Programmer', ar: 'فني تقنية معلومات ومبرمج' },
  'experience.vaccinationWorker': { en: 'Emergency Vaccination Campaign Worker', ar: 'عامل حملة التطعيم الطارئة' },
  'experience.prcs': { en: 'Palestinian Red Crescent Society (PRCS) — Khan Younis', ar: 'جمعية الهلال الأحمر الفلسطيني (PRCS) — خان يونس' },
  'experience.selfEmployed': { en: 'Self-Employed (Pro Laptop) — Khan Younis', ar: 'عامل حر (Pro Laptop) — خان يونس' },
  'experience.unicef': { en: 'UNICEF — Gaza Strip', ar: 'اليونيسف — قطاع غزة' },

  // Credentials Section
  'credentials.title': { en: 'Top Certifications & Badges', ar: 'أفضل الشهادات والأوسمة' },
  'credentials.viewCertificate': { en: 'View Certificate', ar: 'عرض الشهادة' },
  'credentials.viewOnDrive': { en: 'View on Google Drive', ar: 'عرض على Google Drive' },
  'credentials.showingOf': { en: 'Showing', ar: 'عرض' },
  'credentials.of': { en: 'of', ar: 'من' },
  'credentials.certifications': { en: 'certifications', ar: 'شهادة' },
  'credentials.viewAll': { en: 'View All Certificates in Drive', ar: 'عرض جميع الشهادات في Drive' },

  // Projects Section
  'projects.title': { en: 'Key Projects', ar: 'المشاريع الرئيسية' },
  'projects.proLaptop': { en: 'ProLaptop Ultimate v3.1', ar: 'ProLaptop Ultimate v3.1' },
  'projects.proLaptopDesc': { en: 'A robust 100-tool Windows PC maintenance and cybersecurity framework built with PowerShell and BAT.', ar: 'إطار عمل شامل يحتوي على 100 أداة لصيانة أجهزة Windows والأمن السيبراني مبني بـ PowerShell و BAT.' },
  'projects.library': { en: 'Library Management System', ar: 'نظام إدارة المكتبة' },
  'projects.libraryDesc': { en: 'A console-based application utilizing Object-Oriented Programming (OOP) principles with complete CRUD operations.', ar: 'تطبيق قائم على سطر الأوامر يستخدم مبادئ البرمجة الموجهة للكائنات (OOP) مع عمليات CRUD كاملة.' },
  'projects.viewOnGithub': { en: 'View on GitHub', ar: 'عرض على GitHub' },

  // Contact Section
  'contact.title': { en: 'Initialize Contact', ar: 'بدء الاتصال' },
  'contact.email': { en: 'Email', ar: 'البريد الإلكتروني' },
  'contact.phone': { en: 'Phone', ar: 'الهاتف' },
  'contact.linkedin': { en: 'LinkedIn', ar: 'لينكد إن' },
  'contact.github': { en: 'GitHub', ar: 'جيت هاب' },
  'contact.ready': { en: 'Ready to collaborate on cybersecurity and IT projects?', ar: 'هل أنت مستعد للتعاون في مشاريع الأمن السيبراني وتقنية المعلومات؟' },
  'contact.sendMessage': { en: 'Send Message', ar: 'إرسال رسالة' },

  // Contact Form
  'form.name': { en: 'Your Name', ar: 'اسمك' },
  'form.email': { en: 'Your Email', ar: 'بريدك الإلكتروني' },
  'form.subject': { en: 'Subject', ar: 'الموضوع' },
  'form.message': { en: 'Your Message', ar: 'رسالتك' },
  'form.send': { en: 'Send Message', ar: 'إرسال الرسالة' },
  'form.sending': { en: 'Sending...', ar: 'جاري الإرسال...' },
  'form.success': { en: 'Message sent successfully!', ar: 'تم إرسال الرسالة بنجاح!' },
  'form.error': { en: 'Failed to send message. Please try again.', ar: 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.' },
  'form.nameRequired': { en: 'Name is required', ar: 'الاسم مطلوب' },
  'form.emailRequired': { en: 'Email is required', ar: 'البريد الإلكتروني مطلوب' },
  'form.emailInvalid': { en: 'Email is invalid', ar: 'البريد الإلكتروني غير صحيح' },
  'form.subjectRequired': { en: 'Subject is required', ar: 'الموضوع مطلوب' },
  'form.messageRequired': { en: 'Message is required', ar: 'الرسالة مطلوبة' },

  // Reviews Section
  'reviews.title': { en: 'Client Reviews & Testimonials', ar: 'آراء وشهادات العملاء' },
  'reviews.addReview': { en: 'Add Your Review', ar: 'أضف تقييمك' },
  'reviews.rating': { en: 'Rating', ar: 'التقييم' },
  'reviews.review': { en: 'Your Review', ar: 'تقييمك' },
  'reviews.submit': { en: 'Submit Review', ar: 'إرسال التقييم' },

  // Chatbot
  'chatbot.title': { en: 'Ask Me Anything', ar: 'اسأل عن أي شيء' },
  'chatbot.placeholder': { en: 'Ask about my skills, experience, or projects...', ar: 'اسأل عن مهاراتي أو خبرتي أو مشاريعي...' },
  'chatbot.send': { en: 'Send', ar: 'إرسال' },

  // Footer
  'footer.copyright': { en: '© 2026 Mahmoud Sami Kullab. All rights reserved. | Cybersecurity & IT Solutions', ar: '© 2026 محمود سامي كلاب. جميع الحقوق محفوظة. | حلول الأمن السيبراني وتقنية المعلومات' },

  // Theme
  'theme.light': { en: 'Light', ar: 'فاتح' },
  'theme.dark': { en: 'Dark', ar: 'داكن' },
  'theme.system': { en: 'System', ar: 'النظام' },

  // Language
  'lang.english': { en: 'English', ar: 'العربية' },
  'lang.arabic': { en: 'العربية', ar: 'English' },
};

export function t(key: string, language: Language): string {
  const translation = translations[key];
  if (!translation) {
    console.warn(`Translation key not found: ${key}`);
    return key;
  }
  return translation[language] || key;
}

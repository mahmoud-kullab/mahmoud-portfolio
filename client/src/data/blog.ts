export interface BlogPost {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  contentEn: string;
  contentAr: string;
  category: string;
  date: string;
  author: string;
  readTime: number;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    titleEn: "Getting Started with Cybersecurity: Essential Concepts",
    titleAr: "البدء مع الأمن السيبراني: المفاهيم الأساسية",
    descriptionEn: "Learn the fundamental concepts of cybersecurity and how to protect your digital assets from cyber threats.",
    descriptionAr: "تعلم المفاهيم الأساسية للأمن السيبراني وكيفية حماية أصولك الرقمية من التهديدات السيبرانية.",
    contentEn: `Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information, extorting money from users, or interrupting normal business processes.

Key concepts include:
- Confidentiality: Ensuring that information is not disclosed to unauthorized parties
- Integrity: Maintaining the accuracy and completeness of data
- Availability: Ensuring that systems and data are accessible when needed

Understanding these principles is crucial for building a strong security posture.`,
    contentAr: `الأمن السيبراني هو ممارسة حماية الأنظمة والشبكات والبرامج من الهجمات الرقمية. عادة ما تهدف هذه الهجمات إلى الوصول إلى المعلومات الحساسة أو تغييرها أو تدميرها.

المفاهيم الرئيسية تشمل:
- السرية: التأكد من عدم الكشف عن المعلومات لأطراف غير مصرح لهم
- النزاهة: الحفاظ على دقة واكتمال البيانات
- التوفر: التأكد من إمكانية الوصول إلى الأنظمة والبيانات عند الحاجة

فهم هذه المبادئ ضروري لبناء موقف أمني قوي.`,
    category: "Cybersecurity",
    date: "2026-06-20",
    author: "Mahmoud Sami Kullab",
    readTime: 5
  },
  {
    id: "2",
    titleEn: "Hardware Maintenance Best Practices",
    titleAr: "أفضل ممارسات صيانة الأجهزة",
    descriptionEn: "Essential tips and techniques for maintaining your computer hardware to ensure optimal performance and longevity.",
    descriptionAr: "نصائح وتقنيات أساسية لصيانة أجهزة الحاسوب الخاصة بك لضمان الأداء الأمثل والعمر الطويل.",
    contentEn: `Proper hardware maintenance is essential for keeping your computer running smoothly. Here are the best practices:

1. Regular Cleaning: Dust accumulation can cause overheating. Clean your computer regularly, especially the fans and vents.

2. Temperature Management: Monitor your system temperature and ensure proper ventilation. Overheating can damage components.

3. Hard Drive Health: Use tools to check your hard drive health regularly. Replace failing drives before data loss occurs.

4. Power Supply: Use a quality power supply with surge protection to prevent damage from power fluctuations.

5. Backup Important Data: Always maintain regular backups of your important files.`,
    contentAr: `صيانة الأجهزة المناسبة ضرورية للحفاظ على جهاز الحاسوب الخاص بك يعمل بسلاسة. إليك أفضل الممارسات:

1. التنظيف المنتظم: تراكم الغبار يمكن أن يسبب ارتفاع درجة الحرارة. نظف جهاز الحاسوب الخاص بك بانتظام، خاصة المراوح والفتحات.

2. إدارة درجة الحرارة: راقب درجة حرارة النظام وتأكد من التهوية المناسبة. الحرارة الزائدة يمكن أن تضر المكونات.

3. صحة محرك الأقراص: استخدم الأدوات للتحقق من صحة محرك الأقراص بانتظام. استبدل محركات الأقراص الفاشلة قبل فقدان البيانات.

4. مصدر الطاقة: استخدم مصدر طاقة عالي الجودة مع حماية من الارتفاع لمنع الضرر من تقلبات الطاقة.

5. النسخ الاحتياطي للبيانات المهمة: احتفظ دائماً بنسخ احتياطية منتظمة من ملفاتك المهمة.`,
    category: "Hardware",
    date: "2026-06-18",
    author: "Mahmoud Sami Kullab",
    readTime: 7
  },
  {
    id: "3",
    titleEn: "Network Security: Protecting Your Digital Infrastructure",
    titleAr: "أمان الشبكات: حماية البنية التحتية الرقمية الخاصة بك",
    descriptionEn: "Comprehensive guide to network security principles, tools, and best practices for protecting your organization's network.",
    descriptionAr: "دليل شامل لمبادئ أمان الشبكات والأدوات وأفضل الممارسات لحماية شبكة منظمتك.",
    contentEn: `Network security is a critical component of any organization's IT infrastructure. Here's what you need to know:

Key Elements:
- Firewalls: Control incoming and outgoing network traffic
- VPNs: Create secure connections over public networks
- Intrusion Detection Systems: Monitor network traffic for suspicious activity
- Network Segmentation: Divide networks into smaller segments for better control

Best Practices:
- Keep systems and software updated
- Use strong authentication mechanisms
- Implement access control policies
- Monitor network activity regularly
- Conduct security audits and penetration tests`,
    contentAr: `أمان الشبكات هو مكون حاسم في أي بنية تحتية لتكنولوجيا المعلومات في المنظمة. إليك ما تحتاج إلى معرفته:

العناصر الرئيسية:
- جدران الحماية: التحكم في حركة المرور الشبكية الواردة والصادرة
- الشبكات الخاصة الافتراضية: إنشاء اتصالات آمنة عبر الشبكات العامة
- أنظمة كشف الاختراق: مراقبة حركة المرور الشبكية بحثاً عن نشاط مريب
- تقسيم الشبكة: تقسيم الشبكات إلى قطاعات أصغر للحصول على تحكم أفضل

أفضل الممارسات:
- الحفاظ على الأنظمة والبرامج محدثة
- استخدام آليات المصادقة القوية
- تنفيذ سياسات التحكم في الوصول
- مراقبة نشاط الشبكة بانتظام
- إجراء عمليات تدقيق الأمان واختبارات الاختراق`,
    category: "Networking",
    date: "2026-06-15",
    author: "Mahmoud Sami Kullab",
    readTime: 8
  }
];

export const blogCategories = ["All", "Cybersecurity", "Hardware", "Networking", "IT Support", "Programming"];

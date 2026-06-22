import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { MessageCircle, X, Send } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { t } from '@/data/translations';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const chatbotResponses: Record<string, { en: string; ar: string }> = {
  'skills': {
    en: '🎯 My Core Skills:\n• IT Support & Hardware Maintenance\n• Cybersecurity & Penetration Testing\n• Network Administration (Cisco, IPv4/IPv6)\n• Windows & Linux Administration\n• PowerShell & BAT Scripting\n• Java Programming & OOP\n• Software Diagnostics & System Optimization\n\nI\'ve mastered 100+ technical tools across these domains.',
    ar: '🎯 مهاراتي الأساسية:\n• دعم تقنية المعلومات وصيانة الأجهزة\n• الأمن السيبراني واختبار الاختراق\n• إدارة الشبكات (Cisco، IPv4/IPv6)\n• إدارة Windows و Linux\n• برمجة PowerShell و BAT\n• برمجة Java و OOP\n• التشخيص البرمجي وتحسين الأداء\n\nأتقنت أكثر من 100 أداة تقنية في هذه المجالات.'
  },
  'experience': {
    en: '💼 5+ Years of Practical Experience:\n• ICT Specialist at Palestinian Red Crescent Society (Jan 2024 - Present)\n• Self-employed IT Technician & Programmer (2019 - Present)\n• Logistics Worker - UNICEF Polio Campaign (Sep-Oct 2024)\n\nSpecialized in IT support, hardware maintenance, cybersecurity, and system administration for organizations and individuals.',
    ar: '💼 5+ سنوات من الخبرة العملية:\n• متخصص تقنية معلومات في جمعية الهلال الأحمر الفلسطيني (يناير 2024 - الحالي)\n• فني تقنية معلومات ومبرمج عامل حر (2019 - الحالي)\n• عامل لوجستي - حملة اليونيسف للتطعيم ضد شلل الأطفال (سبتمبر - أكتوبر 2024)\n\nمتخصص في دعم تقنية المعلومات وصيانة الأجهزة والأمن السيبراني وإدارة الأنظمة.'
  },
  'projects': {
    en: '🚀 Featured Projects:\n\n1️⃣ ProLaptop Ultimate v3.3\n• Advanced Windows maintenance & cybersecurity framework\n• 100+ integrated tools across 7 modules\n• System optimization, security scanning, malware removal\n\n2️⃣ Library Management System\n• Java-based console application\n• Full OOP principles implementation\n• Complete CRUD operations for book & member management',
    ar: '🚀 المشاريع البارزة:\n\n1️⃣ ProLaptop Ultimate v3.3\n• إطار عمل متقدم لصيانة Windows والأمن السيبراني\n• 100+ أداة متكاملة عبر 7 وحدات\n• تحسين النظام وفحص الأمان وإزالة البرامج الضارة\n\n2️⃣ نظام إدارة المكتبة\n• تطبيق قائم على Java\n• تطبيق كامل لمبادئ OOP\n• عمليات CRUD كاملة لإدارة الكتب والأعضاء'
  },
  'certifications': {
    en: '🏆 17+ Professional Certifications:\n• Cisco Networking Academy (CCNA, Network Fundamentals)\n• NVIDIA (AI on Jetson Nano)\n• TryHackMe (Cybersecurity & Ethical Hacking)\n• Edraak ICDL (Computer Fundamentals)\n• HP LIFE (Digital Literacy)\n• Coursera (Multiple courses)\n\nCovering: Networking, Cybersecurity, AI, Computer Skills, Design & Business',
    ar: '🏆 17+ شهادة احترافية:\n• أكاديمية Cisco للشبكات (CCNA، أساسيات الشبكات)\n• NVIDIA (الذكاء الاصطناعي على Jetson Nano)\n• TryHackMe (الأمن السيبراني والقرصنة الأخلاقية)\n• Edraak ICDL (أساسيات الحاسوب)\n• HP LIFE (محو الأمية الرقمية)\n• Coursera (دورات متعددة)\n\nتغطي: الشبكات، الأمن السيبراني، الذكاء الاصطناعي، مهارات الحاسوب، التصميم والأعمال'
  },
  'education': {
    en: 'I am pursuing a Diploma in Cybersecurity at the University College of Applied Sciences (UCAS) since July 2023. I also completed my High School Certificate from Haroun Al-Rasheed High School in 2022.',
    ar: 'أتابع دبلوم الأمن السيبراني في الكلية الجامعية للعلوم التطبيقية (UCAS) منذ يوليو 2023. أكملت أيضاً شهادة الثانوية العامة من مدرسة هارون الرشيد الثانوية في 2022.'
  },
  'contact': {
    en: 'You can reach me through: Email: mahmood.kullab2004@gmail.com, Phone: +970 599 548 716, LinkedIn: m-kullab, GitHub: mahmoud-kullab',
    ar: 'يمكنك التواصل معي من خلال: البريد الإلكتروني: mahmood.kullab2004@gmail.com، الهاتف: +970 599 548 716، LinkedIn: m-kullab، GitHub: mahmoud-kullab'
  },
  'hello': {
    en: '👋 Welcome! I\'m Mahmoud Sami Kullab\n🎓 ICT Specialist & Cybersecurity Student\n📍 Khan Younis, Gaza Strip\n\nI\'m here to help! Ask me about:\n✅ My skills & expertise\n✅ Professional experience\n✅ Projects & achievements\n✅ Certifications & education\n✅ How to contact me\n\nWhat would you like to know?',
    ar: '👋 مرحباً! أنا محمود سامي كلاب\n🎓 متخصص تقنية معلومات وطالب أمن سيبراني\n📍 خان يونس، قطاع غزة\n\nأنا هنا للمساعدة! اسأل عن:\n✅ مهاراتي وخبرتي\n✅ خبرتي المهنية\n✅ مشاريعي وإنجازاتي\n✅ شهاداتي وتعليمي\n✅ كيفية التواصل معي\n\nماذا تريد أن تعرف؟'
  },
  'default': {
    en: '💡 Great question! I didn\'t quite catch that. Try asking about:\n• Skills & Expertise\n• Experience & Work\n• Projects\n• Certifications\n• Education\n• Contact Information',
    ar: '💡 سؤال رائع! لم أفهم تماماً. حاول السؤال عن:\n• المهارات والخبرة\n• الخبرة المهنية\n• المشاريع\n• الشهادات\n• التعليم\n• معلومات التواصل'
  }
};

export function Chatbot() {
  const { language } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('مهارة')) {
      return chatbotResponses['skills'][language];
    } else if (lowerMessage.includes('experience') || lowerMessage.includes('خبرة')) {
      return chatbotResponses['experience'][language];
    } else if (lowerMessage.includes('project') || lowerMessage.includes('مشروع')) {
      return chatbotResponses['projects'][language];
    } else if (lowerMessage.includes('certificat') || lowerMessage.includes('شهادة')) {
      return chatbotResponses['certifications'][language];
    } else if (lowerMessage.includes('education') || lowerMessage.includes('تعليم')) {
      return chatbotResponses['education'][language];
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('تواصل')) {
      return chatbotResponses['contact'][language];
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('مرحبا')) {
      return chatbotResponses['hello'][language];
    }
    
    return chatbotResponses['default'][language];
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Open chatbot"
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageCircle size={24} className="text-white" />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-96 bg-background border-border shadow-2xl z-40 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-4 text-white">
            <h3 className="font-bold text-lg">🤖 {t('chatbot.title', language)}</h3>
            <p className="text-sm opacity-90">{language === 'ar' ? 'اسأل عن خبرتي ومهاراتي' : 'Ask about my expertise'}</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground text-sm py-8">
                <p className="text-lg mb-2">👋 {language === 'ar' ? 'مرحباً!' : 'Hello!'}</p>
                <p className="text-xs">{language === 'ar' ? 'اسأل عن مهاراتي وخبرتي' : 'Ask about my skills and experience'}</p>
              </div>
            )}
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30'
                      : 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-blue-500/20 text-blue-400 border border-blue-400/30 px-4 py-2 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-4 flex gap-2">
            <Input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t('chatbot.placeholder', language)}
              className="flex-1 bg-card border-border"
              disabled={isLoading}
            />
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              size="sm"
              className="bg-cyan-500 hover:bg-cyan-600 text-black"
            >
              <Send size={16} />
            </Button>
          </div>
        </Card>
      )}
    </>
  );
}

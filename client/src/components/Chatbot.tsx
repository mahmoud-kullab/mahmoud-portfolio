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
    en: 'I have advanced skills in IT Support, Hardware Maintenance, Software Diagnostics, Windows Administration, PowerShell & BAT scripting. I also have intermediate knowledge in Cybersecurity, Networking (IPv4/IPv6), Linux, and Java programming.',
    ar: 'لدي مهارات متقدمة في دعم تقنية المعلومات وصيانة الأجهزة والتشخيص البرمجي وإدارة Windows و PowerShell و BAT. لدي أيضاً معرفة متوسطة بالأمن السيبراني والشبكات و Linux والبرمجة بـ Java.'
  },
  'experience': {
    en: 'I have over 5 years of practical experience in IT support and computer maintenance. Currently volunteering as an ICT Specialist with the Palestinian Red Crescent Society since January 2024. I also work as a self-employed IT Technician and Programmer since 2019.',
    ar: 'لدي أكثر من 5 سنوات من الخبرة العملية في دعم تقنية المعلومات وصيانة الحاسوب. أعمل حالياً كمتطوع متخصص تقنية معلومات مع جمعية الهلال الأحمر الفلسطيني منذ يناير 2024. أعمل أيضاً كفني تقنية معلومات ومبرمج عامل حر منذ 2019.'
  },
  'projects': {
    en: 'My main projects are: 1) ProLaptop Ultimate v3.1 - A 100-tool Windows maintenance and cybersecurity framework with 7 modules. 2) Library Management System - A Java-based console application using OOP principles with complete CRUD operations.',
    ar: 'مشاريعي الرئيسية هي: 1) ProLaptop Ultimate v3.1 - إطار عمل يحتوي على 100 أداة لصيانة Windows والأمن السيبراني مع 7 وحدات. 2) نظام إدارة المكتبة - تطبيق قائم على Java يستخدم مبادئ OOP مع عمليات CRUD كاملة.'
  },
  'certifications': {
    en: 'I hold 17+ certifications from prestigious organizations including Cisco Networking Academy, NVIDIA, TryHackMe, Edraak ICDL, HP LIFE, and Coursera. My certifications cover networking, cybersecurity, computer skills, AI, design, and business skills.',
    ar: 'أحمل 17+ شهادة من منظمات مرموقة بما في ذلك أكاديمية Cisco للشبكات و NVIDIA و TryHackMe و Edraak ICDL و HP LIFE و Coursera. تغطي شهاداتي الشبكات والأمن السيبراني ومهارات الحاسوب والذكاء الاصطناعي والتصميم ومهارات الأعمال.'
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
    en: 'Hello! I\'m Mahmoud Sami Kullab, an ICT Specialist and Cybersecurity student. How can I help you today? Feel free to ask about my skills, experience, projects, certifications, or anything else!',
    ar: 'مرحباً! أنا محمود سامي كلاب، متخصص تقنية معلومات وطالب أمن سيبراني. كيف يمكنني مساعدتك اليوم؟ لا تتردد في السؤال عن مهاراتي أو خبرتي أو مشاريعي أو شهاداتي أو أي شيء آخر!'
  },
  'default': {
    en: 'Thanks for your question! I\'m here to help. You can ask me about my skills, experience, projects, certifications, education, or how to contact me.',
    ar: 'شكراً على سؤالك! أنا هنا للمساعدة. يمكنك أن تسأل عن مهاراتي أو خبرتي أو مشاريعي أو شهاداتي أو تعليمي أو كيفية التواصل معي.'
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
          <div className="bg-gradient-to-r from-cyan-400 to-blue-600 p-4 text-white">
            <h3 className="font-bold text-lg">{t('chatbot.title', language)}</h3>
            <p className="text-sm opacity-90">Ask me about my skills and experience</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground text-sm py-8">
                <p>{t('chatbot.title', language)}</p>
                <p className="text-xs mt-2">{t('chatbot.placeholder', language)}</p>
              </div>
            )}
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
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

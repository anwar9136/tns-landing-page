import React, { useState, useEffect, useRef } from 'react';

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: (
        <svg className="w-[75px] h-[75px]" fill="#2E78FF" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          <rect x="18" y="4" width="4" height="3" rx="0.5" fill="#2E78FF"/>
          <rect x="17" y="7" width="6" height="4" rx="0.5" fill="#2E78FF"/>
        </svg>
      ),
      number: 764,
      title: "COMPLETED LECTURES"
    },
    {
      icon: (
        <svg className="w-[75px] h-[75px]" fill="#2E78FF" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          <path d="M18 4l-4 4h3v6h2V8h3l-4-4z"/>
        </svg>
      ),
      number: 246,
      title: "DEDICATED LECTURES"
    },
    {
      icon: (
        <svg className="w-[75px] h-[75px]" fill="#2E78FF" viewBox="0 0 24 24">
          <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
        </svg>
      ),
      number: 20,
      title: "ONLINE SEMINARS",
      suffix: "+"
    },
    {
      icon: (
        <svg className="w-[75px] h-[75px]" fill="#2E78FF" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      number: 600,
      title: "SATISFIED ATTENDEES",
      suffix: "+"
    }
  ];

  const durations = [1.4, 1.2, 1.1, 1.3];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timers = stats.map((stat, index) => {
      const duration = durations[index];
      const delay = 200; // 0.2s delay after scroll animation
      const target = stat.number;
      const startTime = Date.now() + delay;
      const endTime = startTime + duration * 1000;

      const timer = setInterval(() => {
        const now = Date.now();
        if (now < startTime) return;

        const elapsed = (now - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * target);

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = current;
          return newCounts;
        });

        if (progress >= 1) {
          clearInterval(timer);
        }
      }, 16); // ~60fps

      return timer;
    });

    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="relative z-10 py-[90px]"
      style={{ 
        backgroundColor: '#0F0064',
        fontFamily: '"Poppins", "Inter", "Segoe UI", sans-serif'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.7s cubic-bezier(0.25, 0.1, 0.25, 1.0) ${index * 0.1}s, transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1.0) ${index * 0.1}s`,
                padding: '42px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '14px',
                boxShadow: '0 0 0 transparent',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 14px 34px rgba(0, 140, 255, 0.28)';
                e.currentTarget.style.transform = 'scale(1.04)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 transparent';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
              }}
            >
              {/* Icon */}
              <div className="mb-[18px]">
                {stat.icon}
              </div>

              {/* Number */}
              <div 
                className="mb-[12px]"
                style={{
                  fontWeight: 700,
                  fontSize: '50px',
                  letterSpacing: 0,
                  color: '#4DF78F'
                }}
              >
                {counts[index]}{stat.suffix || ''}
              </div>

              {/* Title */}
              <div
                style={{
                  fontWeight: 600,
                  fontSize: '16px',
                  letterSpacing: '1px',
                  color: '#FFFFFF',
                  textTransform: 'uppercase'
                }}
              >
                {stat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;


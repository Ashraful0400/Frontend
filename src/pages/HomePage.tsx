import { useEffect, useRef, useState } from 'react';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import ScrollIndicator from '../components/ScrollIndicator';
import Navbar from '../components/Navbar';

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;

      const scrollTop = scrollRef.current.scrollTop;
      const sectionHeight = window.innerHeight;
      const index = Math.round(scrollTop / sectionHeight);
      setActiveSection(index);
    };

    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollEl) {
        scrollEl.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <ScrollIndicator activeIndex={activeSection} totalSections={4} />
      <div
        ref={scrollRef}
        style={{
          scrollSnapType: 'y mandatory',
          overflowY: 'scroll',
          height: '100vh',
        }}
      >
        {[Section1, Section2, Section3, Section4].map((Section, idx) => (
          <div
            key={idx}
            style={{ scrollSnapAlign: 'start', height: '100vh' }}
          >
            <Section />
          </div>
        ))}
      </div>
    </>
  );
}

'use client';

import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollToTopButton = document.getElementById('scrollToTop');
      if (scrollToTopButton) {
        if (window.scrollY > 300) {
          scrollToTopButton.classList.remove('opacity-0', 'invisible');
          scrollToTopButton.classList.add('opacity-100', 'visible');
        } else {
          scrollToTopButton.classList.remove('opacity-100', 'visible');
          scrollToTopButton.classList.add('opacity-0', 'invisible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-4 sm:right-5 bottom-4 sm:bottom-5 z-50">
      <button
        id="scrollToTop"
        className="w-12 h-12 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-full flex items-center justify-center text-white opacity-0 invisible transition-all duration-300 hover:scale-110 shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </div>
  );
}


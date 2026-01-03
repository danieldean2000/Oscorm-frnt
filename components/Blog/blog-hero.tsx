'use client';

import { motion } from 'framer-motion';
import { BookOpen, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';

export default function BlogHero() {
  return (
    <section className="relative w-full min-h-[450px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex items-center justify-center overflow-hidden py-16 sm:py-20 md:py-24 mt-4 sm:mt-6 rounded-2xl sm:rounded-3xl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.jpg" 
          alt="Blog Background"
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/home/services/AI-2.jpg';
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2f57c4]/60 via-[#2563eb]/55 to-[#00D4AA]/60"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 z-[1]"></div>
      
      {/* Animated gradient orbs with framer-motion */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-blue-400/30 rounded-full blur-3xl pointer-events-none z-[1]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-teal-400/30 rounded-full blur-3xl pointer-events-none z-[1]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Additional floating orbs */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-32 h-32 sm:w-40 sm:h-40 bg-white/10 rounded-full blur-2xl pointer-events-none z-[1]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Additional gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-teal-600/20 pointer-events-none z-[1]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none z-[1]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
        <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs sm:text-sm font-semibold shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
            <span>Latest Insights & Stories</span>
          </motion.div>

          {/* Main Heading with Icon */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white/90" />
              </motion.div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight">
                Our <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Blog</span>
              </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed font-light max-w-3xl mx-auto px-4">
              Stay updated with the latest news, innovations, and business-oriented stories that matter
            </p>
          </motion.div>

          {/* Stats or Features */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex items-center gap-2 text-white/90">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span className="text-xs sm:text-sm md:text-base font-medium">Expert Insights</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/50"></div>
            <div className="flex items-center gap-2 text-white/90">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span className="text-xs sm:text-sm md:text-base font-medium">Industry News</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/50"></div>
            <div className="flex items-center gap-2 text-white/90">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span className="text-xs sm:text-sm md:text-base font-medium">Innovation Stories</span>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center gap-2 pt-4 sm:pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-white/70 text-xs font-medium">Explore Articles</span>
              <ArrowRight className="w-4 h-4 text-white/70 rotate-90" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

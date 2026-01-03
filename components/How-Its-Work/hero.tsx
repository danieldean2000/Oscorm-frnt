export default function Hero() {
  return (
    <section className="relative  bg-gradient-to-r from-[#0B1020] to-[#0F4082] min-h-[450px] sm:min-h-[500px] md:min-h-[550px] flex items-center overflow-hidden px-4 sm:px-6 py-8 lg:px-20 lg:py-10">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          <div className="text-white space-y-3 sm:space-y-4 md:space-y-5 max-w-xl order-2 lg:order-1">
            {/* Hero Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/15 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/20">
                <span className="text-[10px] sm:text-xs font-bold text-white">AI-POWERED PROCESS</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/15 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/20">
                <i className="fas fa-shield-alt text-white/70 text-xs sm:text-sm"></i>
                <span className="text-white text-[10px] sm:text-xs font-semibold">TRUSTED BY 500+ COMPANIES</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
              How Oscorm Works
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-white/90 mb-6 sm:mb-8 leading-relaxed font-light">
              Hire experienced admin support staff who bring structure, accuracy, and consistency to your workflow. With strong communication and strict compliance, they become a seamless extension of your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-6 sm:mb-8">
              <a href="#" className="bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg text-xs sm:text-sm">
                <i className="fas fa-calendar-check"></i>
                Book Strategy Call
              </a>
              <a href="#" className="bg-white/10 text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg inline-flex items-center justify-center gap-2 border-2 border-white/30 transition-all duration-300 hover:bg-white/20 text-xs sm:text-sm">
                <i className="fas fa-play-circle"></i>
                Start Pilot Project
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="text-yellow-300 text-xs sm:text-sm">★★★★★</div>
                <p className="text-white/90 text-xs sm:text-sm">4.9/5 from 200+ companies</p>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-shield-alt text-white/70 text-xs sm:text-sm"></i>
                <span className="text-white/70 text-xs sm:text-sm">Enterprise-grade security</span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 w-full">
            <div className="relative group w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-[1.02]">
                <img
                  src="/images/how-it-works/hero.png"
                  alt="How Oscorm Works"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


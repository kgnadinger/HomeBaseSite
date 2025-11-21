export default function Hero() {
  return (
    <section id="hero" className="py-12 sm:py-16 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            HomeBase
          </h1>
          <p className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
            Family Chore & Reward Management Made Simple
          </p>
          <p className="text-lg sm:text-xl text-muted mb-8 max-w-2xl mx-auto lg:mx-0">
            Help your family stay organized, motivated, and connected. 
            Create chores, track progress, and reward achievements—all in one beautiful app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://testflight.apple.com/join/YOUR_CODE"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
            >
              Join TestFlight
            </a>
            <button
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Coming Soon
            </button>
          </div>
        </div>

        {/* Visual Element - Phone Mockup Placeholder */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Phone Frame */}
            <div className="w-64 sm:w-80 lg:w-96 aspect-[9/19.5] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              {/* Screen */}
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[2.5rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="h-12 bg-black/20 flex items-center justify-between px-6 text-white text-xs">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                
                {/* App Content Placeholder */}
                <div className="p-6 h-[calc(100%-3rem)] flex flex-col items-center justify-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">HomeBase</div>
                    <div className="text-sm opacity-75">Screenshot Preview</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}


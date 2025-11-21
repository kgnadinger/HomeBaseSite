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
          <div className="flex flex-col gap-4 justify-center lg:justify-start">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://testflight.apple.com/join/YOUR_CODE"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
              >
                Join TestFlight
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  // App Store link will be added when app is published
                }}
              >
                Coming Soon on App Store
              </a>
            </div>
            
            {/* App Store Badge Placeholder */}
            <div className="flex items-center justify-center lg:justify-start">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  // App Store link will be added when app is published
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors opacity-75 hover:opacity-100"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="text-sm font-medium">Download on the App Store</span>
              </a>
            </div>
          </div>
        </div>

        {/* Visual Element - Phone Mockup with Screenshot */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Phone Frame */}
            <div className="w-64 sm:w-80 lg:w-96 aspect-[9/19.5] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              {/* Screen */}
              <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                <img
                  src="/screens/parent-dashboard.png"
                  alt="HomeBase Parent Dashboard"
                  className="w-full h-full object-cover"
                />
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


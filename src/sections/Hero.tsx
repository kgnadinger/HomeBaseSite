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
        </div>

        {/* Visual Element - Phone Mockup with Screenshot */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Phone Frame */}
            <div className="w-64 sm:w-80 lg:w-96 aspect-[9/19.5] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              {/* Screen */}
              <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                <img
                  src={`${import.meta.env.BASE_URL}screens/parent-dashboard.png`}
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


import { useState } from 'react'

interface Screenshot {
  image: string
  caption: string
  alt: string
}

const screenshots: Screenshot[] = [
  {
    image: '/screens/onboarding.png',
    caption: 'Easy Onboarding',
    alt: 'HomeBase onboarding screen showing family setup',
  },
  {
    image: '/screens/parent-dashboard.png',
    caption: 'Parent Dashboard',
    alt: 'HomeBase parent dashboard with chore management',
  },
  {
    image: '/screens/create-chore.png',
    caption: 'Create Chores',
    alt: 'HomeBase create chore screen',
  },
  {
    image: '/screens/child-dashboard.png',
    caption: 'Child Dashboard',
    alt: 'HomeBase child dashboard showing assigned chores',
  },
]

function ScreenshotCard({ screenshot, index }: { screenshot: Screenshot; index: number }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-[280px] aspect-[9/19.5] bg-gray-900 rounded-[2rem] p-2 shadow-2xl mb-4">
        <div className="w-full h-full bg-background rounded-[1.5rem] overflow-hidden">
          {!imageError ? (
            <img
              src={screenshot.image}
              alt={screenshot.alt}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
              <div className="text-center p-4">
                <svg className="w-12 h-12 mx-auto mb-2 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-muted">Screenshot {index + 1}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="text-sm font-medium text-foreground">{screenshot.caption}</p>
    </div>
  )
}

export default function Screens() {
  return (
    <section id="screens" className="py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-12">
        <h2 className="mb-4">See It In Action</h2>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          Take a look at how HomeBase helps families stay organized and motivated.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {screenshots.map((screenshot, index) => (
          <ScreenshotCard key={index} screenshot={screenshot} index={index} />
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-muted">
        <p>Add your screenshots to <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">public/screens/</code> directory</p>
      </div>
    </section>
  )
}


interface LegalLink {
  label: string
  href: string
  external?: boolean
}

const legalLinks: LegalLink[] = [
  {
    label: 'Privacy Policy',
    href: 'https://kgnadinger.github.io/homebase-privacy-policy/',
    external: true,
  },
  {
    label: 'End User License Agreement',
    href: 'https://kgnadinger.github.io/homebase-privacy-policy/', // Placeholder - update when EULA is available
    external: true,
  },
]

export default function LegalLinks() {
  return (
    <section id="legal" className="py-12 sm:py-16 lg:py-20">
      <div className="text-center">
        <h2 className="mb-4">Legal & Support</h2>
        <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
          Review our policies or get in touch with our support team.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          {legalLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 px-6 py-3 text-primary hover:text-primary-dark font-medium border border-border rounded-lg hover:bg-primary/5 transition-colors"
            >
              {link.label}
              {link.external && (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}


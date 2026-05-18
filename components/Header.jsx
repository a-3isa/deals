"use client"
import Image from 'next/image'

export default function Header() {
  const handleScroll = (e, id) => {
    if (window.location.pathname !== '/') return
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/assets/logo-dealsplus.svg"
            alt="Deals+"
            width={152}
            height={42}
            className="rounded object-contain"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#stores" onClick={(e) => handleScroll(e, 'stores')} className="relative hover:text-[var(--brand-accent-2)] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[var(--brand-accent-2)] after:transition-all hover:after:w-full">Stores</a>
          <a href="#steps" onClick={(e) => handleScroll(e, 'steps')} className="relative hover:text-[var(--brand-accent-2)] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[var(--brand-accent-2)] after:transition-all hover:after:w-full">How It Works</a>
          <a href="#download" onClick={(e) => handleScroll(e, 'download')} className="relative hover:text-[var(--brand-accent-2)] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[var(--brand-accent-2)] after:transition-all hover:after:w-full">Download</a>
        </nav>

        <div className="rounded-full bg-gradient-to-r from-cyan-50 to-teal-50 border border-cyan-100 px-3 py-1.5 text-xs md:text-sm text-slate-700">
          Keep it in pocket
        </div>
      </div>
    </header>
  )
}


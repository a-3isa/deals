"use client"
import { useState, useEffect } from 'react'
import StoresGrid from '../components/StoresGrid'
import HowItWorks from '../components/HowItWorks'

export default function Home() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.pageYOffset > 220)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="overflow-hidden">
      <section className="hero-image min-h-[74vh] flex items-center section-band">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-2xl fade-up">
            <p className="eyebrow fade-up stagger-1 mb-4">Deals+ cashback app</p>
            <h1 className="hero-title fade-up stagger-2 font-extrabold text-[var(--ink)]">
              Deals+ keeps more money in your pocket
            </h1>
            <p className="fade-up stagger-3 lead mt-6 text-[var(--muted)] text-lg md:text-xl max-w-xl">
              Shop through the app, activate verified offers, and earn cashback from everyday stores without chasing coupon codes across the internet.
            </p>
            <div className="fade-up stagger-4 mt-8 flex flex-wrap gap-3">
              <a href="#download" className="rounded-md btn-primary px-5 py-3 text-sm font-bold lift-hover">Download Deals+</a>
              <a href="#steps" className="rounded-md btn-secondary px-5 py-3 text-sm font-bold lift-hover">See how it works</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--ink)] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ['4,500+', 'partner stores'],
            ['App-only', 'deals and rewards'],
            ['Tracked', 'cashback journey'],
            ['Simple', 'QR app install'],
          ].map(([value, label]) => (
            <div key={value} className="border-l border-white/15 pl-4">
              <p className="text-xl md:text-2xl font-extrabold">{value}</p>
              <p className="text-xs md:text-sm text-white/70">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="stores" className="section-band bg-[var(--paper)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          <div>
            <p className="eyebrow mb-3">Where savings start</p>
            <h2 className="font-extrabold text-[var(--ink)]">A cleaner way to shop cashback offers</h2>
            <p className="mt-5 text-[var(--muted)] text-lg leading-relaxed">
              Deals+ turns partner commissions into visible rewards. Open the app before you buy, choose a store, and let your cashback track from click to confirmation.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-[var(--muted)]">
              <div className="border-t border-[var(--border)] pt-4">
                <p className="font-bold text-[var(--ink)]">Verified offers</p>
                <p className="mt-1">Less hunting, fewer expired codes.</p>
              </div>
              <div className="border-t border-[var(--border)] pt-4">
                <p className="font-bold text-[var(--ink)]">Reward clarity</p>
                <p className="mt-1">Know what you activated before checkout.</p>
              </div>
            </div>
          </div>
          <StoresGrid />
        </div>
      </section>

      <section id="steps" className="section-band bg-[#eef5ed]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-3xl mb-10">
            <p className="eyebrow mb-3">How it works</p>
            <h2 className="font-extrabold text-[var(--ink)]">No gimmicks. Just a better checkout habit.</h2>
          </div>
          <HowItWorks />
        </div>
      </section>

      <section id="download" className="section-band bg-[var(--paper)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid md:grid-cols-[1fr_360px] gap-10 items-center">
          <div>
            <p className="eyebrow mb-3">Install in a minute</p>
            <h3 className="text-3xl md:text-5xl leading-tight font-extrabold text-[var(--ink)]">
              Start with the next thing you were already going to buy.
            </h3>
            <p className="mt-5 text-[var(--muted)] text-lg max-w-2xl">
              Scan the code, download Deals+, and check the app before your next order. A small habit can turn into steady savings.
            </p>
          </div>
          <div className="justify-self-start md:justify-self-end">
            <div className="rounded-lg border border-[var(--border)] bg-white p-3 shadow-[0_12px_30px_rgba(24,35,29,0.10)]">
              <img src="/assets/qr-download.png" alt="Download Deals+ QR" className="w-56 h-56 md:w-72 md:h-72 rounded-md object-cover" />
            </div>
          </div>
        </div>
      </section>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        title="Back to top"
        className={
          'fixed right-4 bottom-6 z-50 flex items-center justify-center w-12 h-12 rounded-md shadow-lg transition-all duration-200 bg-[var(--brand-accent)] hover:bg-[var(--brand-accent-2)] ' +
          (showTop ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-2')
        }
      >
        <span className="sr-only">Scroll to top</span>
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M7.5 13.5L12 9l4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}

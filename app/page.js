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
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <section className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 md:py-14">
        <div className="fade-up">
          <p className="fade-up stagger-1 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs md:text-sm font-semibold text-cyan-800 mb-5">
            Smarter savings for every purchase
          </p>
          <h1 className="hero-title fade-up stagger-2 text-slate-900 font-extrabold text-4xl md:text-6xl leading-[1.05]">
            Get the app that turns everyday shopping into cashback wins
          </h1>
          <p className="fade-up stagger-3 lead mt-6 text-slate-600 text-lg md:text-xl max-w-xl">
            Unlock app-only deals and cashback at 4,500+ stores. Save instantly, collect rewards, and keep more from every order.
          </p>
          <div className="fade-up stagger-4 mt-8 flex flex-wrap gap-3">
            <a href="#download" className="rounded-xl bg-[var(--brand-accent)] hover:bg-[var(--brand-accent-2)] text-white px-5 py-3 text-sm font-semibold lift-hover">Get the app</a>
            <a href="#steps" className="rounded-xl border border-slate-300 bg-white text-slate-700 px-5 py-3 text-sm font-semibold hover:border-cyan-300 hover:text-cyan-800 lift-hover">How it works</a>
          </div>
        </div>

        <div className="relative h-[440px] md:h-[620px] fade-up stagger-2">
          <div className="absolute -top-2 -left-2 w-44 h-44 md:w-60 md:h-60 rounded-full bg-cyan-200/50 blur-2xl" />
          <img
            src="/assets/hero-phone.png"
            alt="Deals+ app preview"
            className="absolute left-0 top-0 w-[68%] h-[72%] rounded-3xl panel object-cover lift-hover"
          />
          <div className="absolute right-0 bottom-0 w-[58%] h-[58%] panel rounded-3xl p-4 md:p-5 flex items-center justify-center">
            <img
              src="/assets/qr-download.png"
              alt="Download QR"
              className="w-full h-full rounded-2xl object-cover lift-hover"
            />
          </div>
        </div>
      </section>

      <section id="stores" className="panel rounded-3xl p-6 md:p-10 mb-8 md:mb-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div>
            <h2 className="text-slate-900 font-bold">Get cashback at thousands of your favorite stores</h2>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Stores reward us for sending shoppers their way. We share that reward directly with you as cashback, so everyone wins.
            </p>
          </div>
          <StoresGrid />
        </div>
      </section>

      <section id="steps" className="py-8 md:py-12">
        <h2 className="text-center font-bold text-slate-900 mb-8">How Deals+ works</h2>
        <HowItWorks />
      </section>

      <section id="download" className="mt-8 panel rounded-3xl p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl font-bold text-slate-900">Don't miss cashback on your phone</h3>
          <p className="mt-3 text-slate-600 text-lg">Scan the code, install Deals+, and start shopping smarter today.</p>
        </div>
        <div className="flex justify-center">
          <div className="rounded-2xl bg-white p-3 border border-cyan-100 shadow-md">
            <img src="/assets/qr-download.png" alt="Download QR" className="w-48 h-48 md:w-64 md:h-64 rounded-xl object-cover" />
          </div>
        </div>
      </section>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        title="Back to top"
        className={
          'fixed right-4 bottom-6 z-50 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg transition-all duration-200 bg-[var(--brand-accent)] hover:bg-[var(--brand-accent-2)] ' +
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


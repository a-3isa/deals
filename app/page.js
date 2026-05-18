"use client"
import { useState, useEffect } from 'react'
import Screenshot from '../components/Screenshot'
import StoresGrid from '../components/StoresGrid'
import HowItWorks from '../components/HowItWorks'

export default function Home() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.pageYOffset > 200)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-8 items-center py-24">
        <div>
          <h1 className="text-[#111827] font-extrabold text-4xl md:text-6xl leading-tight">
            Get the app that gets you Cash Back
          </h1>
          <p className="lead mt-6 text-gray-700 text-lg md:text-xl max-w-lg">
            Get App-only deals and Cash Back at over 4,500 stores.
          </p>
        </div>

        {/* right side: first image from top->middle, second from bottom->middle */}
        <div className="flex items-center justify-end">
          <div className="relative w-full h-80 md:h-[640px] lg:h-[760px]">
            {/* app screenshot: anchored to top, increased height so it reaches toward middle */}
            <img
              src="/assets/hero-phone.png"
              alt="app screenshot"
              className="absolute left-0 top-0 h-[60%] md:h-[70%] w-auto md:w-[480px] rounded-xl shadow-xl object-cover"
            />
            {/* qr card: anchored to bottom, increased height so it reaches toward middle */}
            <div className="absolute right-0 bottom-0 h-[60%] md:h-[70%] flex items-center">
              <div className="bg-white p-4 rounded-xl shadow-lg mx-4">
                <img
                  src="/assets/qr-download.png"
                  alt="qr code"
                  className="w-32 h-32 md:w-56 md:h-56 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* decorative separator */}
      <div className="my-8 flex justify-center">
        <div className="w-full h-12 rounded-lg bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 opacity-30 transform -skew-y-2"></div>
      </div>

      {/* Section 2 */}
      <section id="stores" className="grid md:grid-cols-2 gap-8 items-start py-20 bg-white rounded-lg p-12 mb-8">
        <div>
          <h2 className="text-[#111827] font-bold">Get Cash Back at thousands of your favorite stores</h2>
          <p className="mt-4 text-gray-700">Sound too good to be true? Here's the deal: Stores pay us a commission for sending you their way. We share that with you as Cash Back. Everyone wins!</p>
        </div>
        <StoresGrid />
      </section>

      {/* decorative separator (inverted skew) */}
      <div className="my-8 flex justify-center">
        <div className="w-full h-10 rounded-lg bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 opacity-25 transform skew-y-2"></div>
      </div>

      {/* Section 3 */}
      <section id="steps" className="py-20">
        <h2 className="text-center font-bold text-[#111827] mb-8">Here's how deals works</h2>
        <div className="max-w-5xl mx-auto">
          <HowItWorks />
        </div>
      </section>

      {/* thin decorative stripe */}
      <div className="my-6 flex justify-center">
        <div className="w-56 h-1 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 opacity-40"></div>
      </div>

      {/* Section 4 */}
      <section id="download" className="grid md:grid-cols-2 gap-8 items-center py-20 bg-[var(--soft-bg)] p-12 rounded-lg">
        <div>
          <h3 className="text-2xl font-bold">Don't miss Cash Back on your phone!</h3>
          <p className="mt-3 text-gray-700">Scan the QR code and install the app.</p>
        </div>
        <div className="flex justify-center">
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <img
              src="/assets/qr-download.png"
              alt="qr"
              className="w-32 h-32 md:w-56 md:h-56 object-contain"
            />
          </div>
        </div>
      </section>

      {/* scroll-to-top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
        className={
          "fixed right-4 bottom-6 z-50 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg transition-opacity duration-200 " +
          (showTop ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")
        }
      >
        <span className="sr-only">Scroll to top</span>
        <svg className="w-6 h-6 text-white bg-[var(--brand-accent)] rounded-full p-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="12" r="12" fill="var(--brand-accent)"/>
          <path d="M7.5 13.5L12 9l4.5 4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}

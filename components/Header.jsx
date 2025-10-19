"use client"
import Image from 'next/image'

export default function Header(){
  const handleScroll = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* left: logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/logo.svg"
            alt="Deals+"
            width={144}
            height={40}
            className="rounded object-contain"
          />
        </div>

        {/* center: navigation */}
        <div className="flex-1 flex justify-center">
          <nav className="flex items-center gap-6">
            <a href="#stores" onClick={(e)=>handleScroll(e,'stores')} className="text-sm text-gray-700 hover:text-[var(--brand-accent)]">Stores</a>
            <a href="#steps"  onClick={(e)=>handleScroll(e,'steps')}  className="text-sm text-gray-700 hover:text-[var(--brand-accent)]">Steps</a>
            <a href="#download" onClick={(e)=>handleScroll(e,'download')} className="text-sm text-gray-700 hover:text-[var(--brand-accent)]">Download</a>
          </nav>
        </div>

        {/* right: signature */}
        <div className="text-sm text-gray-600 italic">Keep it in pocket</div>
      </div>
    </header>
  )
}

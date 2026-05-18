export default function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] text-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h4 className="font-semibold mb-3 text-white">Download</h4>
          <ul className="text-sm space-y-2 text-slate-300">
            <li><a href="/#download" className="hover:text-[#d8b56d] transition-colors">Android (Play Store)</a></li>
            <li><a href="/#download" className="hover:text-[#d8b56d] transition-colors">iOS (App Store)</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-white">About</h4>
          <ul className="text-sm space-y-2 text-slate-300">
            <li><a href="/about" className="hover:text-[#d8b56d] transition-colors">About us</a></li>
            <li><a href="/terms" className="hover:text-[#d8b56d] transition-colors">Terms & Conditions</a></li>
            <li><a href="/faq" className="hover:text-[#d8b56d] transition-colors">FAQs</a></li>
            <li><a href="/privacy" className="hover:text-[#d8b56d] transition-colors">Privacy Policy</a></li>
            <li><a href="/contact" className="hover:text-[#d8b56d] transition-colors">Contact us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-white">Top stores</h4>
          <ul className="text-sm space-y-2 text-slate-300">
            <li>AliExpress</li>
            <li>Amazon</li>
            <li>eBay</li>
            <li>Walmart</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-white">Popular categories</h4>
          <ul className="text-sm space-y-2 text-slate-300">
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Travel</li>
            <li>Home & Garden</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Deals+. All rights reserved.
      </div>
    </footer>
  )
}


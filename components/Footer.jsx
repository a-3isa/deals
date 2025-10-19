export default function Footer(){
  return (
    <footer className="mt-12" style={{background: 'var(--footer-bg)', color:'#e5e7eb'}}>
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-semibold mb-3">Download</h4>
          <ul className="text-sm">
            <li><a href="#" className="text-gray-200">Android (Play Store)</a></li>
            <li><a href="#" className="text-gray-200">iOS (App Store)</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">About</h4>
          <ul className="text-sm">
            <li><a href="/about">About us</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Stores & brands</h4>
          <ul className="text-sm">
            <li>Amazon</li>
            <li>eBay</li>
            <li>Walmart</li>
            <li>AliExpress</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Popular categories</h4>
          <ul className="text-sm">
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Travel</li>
            <li>Home & Garden</li>
          </ul>
        </div>
      </div>
      <div className="py-4 text-center text-sm">© {new Date().getFullYear()} Deals+. All rights reserved.</div>
    </footer>
  )
}

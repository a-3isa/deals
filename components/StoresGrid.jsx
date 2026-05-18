export default function StoresGrid() {
  const storeCards = [
    '/assets/store-card-1.png',
    '/assets/store-card-2.png',
    '/assets/store-card-3.png',
    '/assets/store-card-4.png',
    '/assets/store-card-5.png',
    '/assets/store-card-6.png',
    '/assets/store-card-7.png',
    '/assets/store-card-8.png',
    '/assets/store-card-9.png',
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {storeCards.map((src, idx) => (
        <div
          key={idx}
          className="group panel rounded-2xl p-3 md:p-4 overflow-hidden fade-up lift-hover"
          style={{ animationDelay: `${idx * 70}ms` }}
        >
          <img
            src={src}
            alt={`deals-card-${idx + 1}`}
            className="w-full h-32 md:h-36 rounded-xl object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      ))}
    </div>
  )
}


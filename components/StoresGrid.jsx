export default function StoresGrid(){
  const logos = [
    '/assets/store-logo-1.png',
    '/assets/store-logo-2.png',
    '/assets/store-logo-3.png',
    '/assets/store-logo-4.png',
    '/assets/store-logo-5.png',
    '/assets/store-logo-6.png',
    '/assets/store-logo-7.png',
    '/assets/store-logo-8.png',
    '/assets/store-logo-9.png',
  ];
  return (
    <div className="grid grid-cols-3 gap-4">
      {logos.map((src,idx)=>(
        <div key={idx} className="bg-white rounded-lg p-4 shadow-sm grid place-items-center">
          <img src={src} alt={`store-${idx}`} className="max-h-20 object-contain"/>
        </div>
      ))}
    </div>
  )
}

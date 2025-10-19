export default function StoresGrid(){
  const logos = Array.from({length:9}).map((_,i)=>`/assets/stores-placeholder.svg`);
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

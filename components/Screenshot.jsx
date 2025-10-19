export default function Screenshot({src, alt}){ 
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <img src={src} alt={alt} className="rounded max-h-[520px]"/>
    </div>
  )
}

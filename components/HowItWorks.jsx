export default function HowItWorks(){
  const steps = [
    {t:'Download & Sign up', d:'Get the app and create your account.'},
    {t:'Shop & Earn', d:'Shop through the app and get discounts and cashback.'},
    {t:'Refer & Earn', d:'Invite friends and get rewards.'},
    {t:'Upgrade Tiers', d:'Move between tiers to unlock premium features.'},
  ]
  return (
    <div className="grid md:grid-cols-4 gap-6">
      {steps.map((s,idx)=>(
        <div key={idx} className="bg-white p-6 rounded-lg text-center shadow-sm">
          <img src={`/assets/feature-${idx+1}.png`} className="w-20 h-20 mx-auto mb-4 object-contain" alt="feature"/>
          <h4 className="font-semibold mb-2">{s.t}</h4>
          <p className="text-sm text-gray-600">{s.d}</p>
        </div>
      ))}
    </div>
  )
}

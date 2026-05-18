export default function HowItWorks() {
  const steps = [
    { t: 'Download & Sign up', d: 'Install Deals+ in seconds and create your account to unlock app-only rewards.', i: '/assets/feature-1.png' },
    { t: 'Shop & Earn', d: 'Browse partners, activate offers, and shop normally while cashback tracks automatically.', i: '/assets/feature-2.png' },
    { t: 'Refer & Earn', d: 'Invite your friends with your link and get bonus rewards every time they complete purchases.', i: '/assets/feature-3.png' },
    { t: 'Upgrade Tiers', d: 'Move up your tier with activity and enjoy higher cashback, extra perks, and priority campaigns.', i: '/assets/feature-4.png' },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {steps.map((s, idx) => (
        <div key={idx} className="panel rounded-2xl p-5 text-center fade-up lift-hover" style={{ animationDelay: `${idx * 90}ms` }}>
          <img src={s.i} className="w-full h-40 rounded-xl object-cover mb-4" alt={s.t} />
          <h4 className="font-semibold text-slate-900 mb-2">{s.t}</h4>
          <p className="text-sm text-slate-600 leading-relaxed">{s.d}</p>
        </div>
      ))}
    </div>
  )
}


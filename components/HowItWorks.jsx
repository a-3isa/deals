export default function HowItWorks() {
  const steps = [
    { n: '01', t: 'Open Deals+', d: 'Start from the app before checkout so the store visit can be tracked.', i: '/assets/feature-1.png' },
    { n: '02', t: 'Activate the offer', d: 'Choose the cashback or deal you want, then continue to the store.', i: '/assets/feature-2.png' },
    { n: '03', t: 'Shop normally', d: 'Complete your order with the partner store just like you usually would.', i: '/assets/feature-3.png' },
    { n: '04', t: 'Watch rewards grow', d: 'Follow your cashback status and keep building savings over time.', i: '/assets/feature-4.png' },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {steps.map((s, idx) => (
        <div key={idx} className="rounded-lg border border-[var(--border)] bg-[var(--soft-panel)] p-4 fade-up lift-hover" style={{ animationDelay: `${idx * 90}ms` }}>
          <img src={s.i} className="w-full h-40 rounded-md object-cover mb-5" alt={s.t} />
          <p className="text-xs font-extrabold text-[var(--signal)]">{s.n}</p>
          <h4 className="font-bold text-[var(--ink)] mt-1 mb-2">{s.t}</h4>
          <p className="text-sm text-[var(--muted)] leading-relaxed">{s.d}</p>
        </div>
      ))}
    </div>
  )
}


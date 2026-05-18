export default function FAQ() {
  const faqs = [
    {
      q: 'How does cashback work?',
      a: 'When you shop through Deals+, partner stores pay us a commission and we share part of it with you as cashback.',
    },
    {
      q: 'When will my cashback appear?',
      a: 'Most transactions appear as pending within 24 to 72 hours, then become payable after order confirmation.',
    },
    {
      q: 'Why was my cashback not tracked?',
      a: 'Tracking can fail if ad blockers, coupon extensions, or multi-tab checkout interfere with the purchase journey.',
    },
    {
      q: 'Is Deals+ free to use?',
      a: 'Yes. You can browse deals, activate offers, and earn cashback with no subscription fee.',
    },
  ]

  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="panel rounded-3xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">FAQs</h1>
        <div className="mt-6 space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-2xl border border-cyan-100 bg-white p-4 md:p-5">
              <h2 className="text-lg font-semibold text-slate-900">{item.q}</h2>
              <p className="mt-2 text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


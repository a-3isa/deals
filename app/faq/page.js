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
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-14 md:py-20">
      <div className="rounded-lg border border-[var(--border)] bg-[var(--soft-panel)] p-6 md:p-10">
        <p className="eyebrow mb-3">Support</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--ink)]">FAQs</h1>
        <div className="mt-6 space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-lg border border-[var(--border)] bg-white p-4 md:p-5">
              <h2 className="text-lg font-bold text-[var(--ink)]">{item.q}</h2>
              <p className="mt-2 text-[var(--muted)]">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


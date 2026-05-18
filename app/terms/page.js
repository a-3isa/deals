export default function Terms() {
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-14 md:py-20">
      <div className="rounded-lg border border-[var(--border)] bg-[var(--soft-panel)] p-6 md:p-10">
        <p className="eyebrow mb-3">Terms</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--ink)]">Terms & Conditions</h1>
        <p className="mt-4 text-[var(--muted)] leading-relaxed">By using Deals+, you agree to use the platform responsibly and in compliance with applicable laws.</p>
        <ul className="mt-5 space-y-3 text-[var(--muted)] list-disc pl-5">
          <li>Cashback eligibility depends on store rules, tracking, and order completion.</li>
          <li>Promo offers may be limited in duration and may change without prior notice.</li>
          <li>Abuse, fraud, or manipulation of rewards may result in account suspension.</li>
          <li>Deals+ may update these terms periodically. Continued use means acceptance of changes.</li>
        </ul>
      </div>
    </section>
  )
}


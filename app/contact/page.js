export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-14 md:py-20">
      <div className="rounded-lg border border-[var(--border)] bg-[var(--soft-panel)] p-6 md:p-10">
        <p className="eyebrow mb-3">Contact</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--ink)]">Contact us</h1>
        <p className="mt-4 text-[var(--muted)]">Need help with cashback, payments, or your account? Our support team is here for you.</p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4 text-[var(--muted)]">
          <div className="rounded-lg border border-[var(--border)] bg-white p-4">
            <h2 className="font-bold text-[var(--ink)]">Support email</h2>
            <p className="mt-1">support@dealsplus.app</p>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-white p-4">
            <h2 className="font-bold text-[var(--ink)]">Business inquiries</h2>
            <p className="mt-1">partners@dealsplus.app</p>
          </div>
        </div>
      </div>
    </section>
  )
}


export default function Privacy() {
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-14 md:py-20">
      <div className="rounded-lg border border-[var(--border)] bg-[var(--soft-panel)] p-6 md:p-10">
        <p className="eyebrow mb-3">Privacy</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--ink)]">Privacy Policy</h1>
        <p className="mt-4 text-[var(--muted)] leading-relaxed">
          We collect only the data needed to provide cashback tracking, account access, and relevant deal recommendations.
        </p>
        <ul className="mt-5 space-y-3 text-[var(--muted)] list-disc pl-5">
          <li>Account data: name, email, and login details.</li>
          <li>Transaction data: purchase metadata needed for cashback validation.</li>
          <li>Usage data: interactions that help improve app performance and recommendations.</li>
          <li>Security: we apply technical and organizational safeguards to protect user data.</li>
        </ul>
      </div>
    </section>
  )
}


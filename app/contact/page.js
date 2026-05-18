export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="panel rounded-3xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Contact us</h1>
        <p className="mt-4 text-slate-600">Need help with cashback, payments, or your account? Our support team is here for you.</p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4 text-slate-700">
          <div className="rounded-2xl border border-cyan-100 bg-white p-4">
            <h2 className="font-semibold">Support email</h2>
            <p className="mt-1">support@dealsplus.app</p>
          </div>
          <div className="rounded-2xl border border-cyan-100 bg-white p-4">
            <h2 className="font-semibold">Business inquiries</h2>
            <p className="mt-1">partners@dealsplus.app</p>
          </div>
        </div>
      </div>
    </section>
  )
}


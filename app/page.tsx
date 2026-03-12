import Link from "next/link";

const features = [
  {
    title: "VETTR Score",
    description:
      "A proprietary 0–100 rating that distills a company's overall health into a single, easy-to-understand number.",
    icon: "📊",
  },
  {
    title: "Red Flag Detection",
    description:
      "Automatically surfaces warning signs like insider selling, excessive dilution, related-party transactions, and late filings.",
    icon: "🚩",
  },
  {
    title: "Executive Pedigree",
    description:
      "Evaluates management teams based on their track record, board relationships, and history across multiple companies.",
    icon: "👤",
  },
  {
    title: "Real-Time Alerts",
    description:
      "Get notified when a stock triggers a new red flag, releases a filing, or sees a significant score change.",
    icon: "🔔",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Vet Your Stocks{" "}
              <span className="text-vettr-accent">Before You Invest</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              AI-powered due diligence for the stocks you care about. VETTR
              Scores, Red Flag Detection, Executive Pedigree tracking, and
              real-time alerts — all in one app.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/features"
                className="rounded-lg bg-vettr-accent px-6 py-3 text-sm font-semibold text-vettr-navy shadow-sm hover:bg-vettr-accent/90 transition-colors"
              >
                Explore Features
              </Link>
              <Link
                href="/developers"
                className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
              >
                API Docs <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-vettr-dark py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to invest with confidence
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl bg-vettr-card p-6 border border-white/5 hover:border-vettr-accent/30 transition-colors"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stop guessing. Start vetting.
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Download VETTR for iOS or Android and see your first VETTR Score in
            under a minute.
          </p>
          <div className="mt-8">
            <Link
              href="/blog"
              className="rounded-lg bg-vettr-accent px-6 py-3 text-sm font-semibold text-vettr-navy shadow-sm hover:bg-vettr-accent/90 transition-colors"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

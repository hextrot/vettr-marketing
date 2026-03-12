import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | VETTR",
  description:
    "Explore VETTR's powerful features: VETTR Score, Red Flag Detection, Executive Pedigree tracking, and real-time alerts.",
};

const features = [
  {
    title: "VETTR Score",
    description:
      "Our proprietary rating from 0 to 100 distills a company's overall health into a single number. It combines financial metrics, filing history, management quality, and market signals into one easy-to-understand score.",
    icon: "📊",
  },
  {
    title: "Red Flag Detection",
    description:
      "Our AI automatically scans filings, press releases, and market data to surface warning signs. From insider selling and excessive dilution to related-party transactions and late filings — nothing slips through.",
    icon: "🚩",
  },
  {
    title: "Executive Pedigree",
    description:
      "Know who's running the show. VETTR tracks management teams across companies, evaluating their track records, board relationships, and history so you can assess leadership quality at a glance.",
    icon: "👤",
  },
  {
    title: "Real-Time Alerts",
    description:
      "Stay informed without staying glued to your screen. Get notified when a stock you follow triggers a new red flag, releases a filing, or sees a significant score change.",
    icon: "🔔",
  },
  {
    title: "Filing Analysis",
    description:
      "AI-powered summaries of financial statements, MD&A sections, and technical reports. Get the key takeaways from complex regulatory filings in seconds, not hours.",
    icon: "📄",
  },
  {
    title: "Watchlist & Portfolio",
    description:
      "Track the stocks you care about most. Build watchlists, monitor score changes over time, and get a holistic view of risk across your entire portfolio.",
    icon: "⭐",
  },
];

export default function FeaturesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Features
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Powerful tools to help you make informed investment decisions
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl bg-vettr-card p-8 border border-white/5 hover:border-vettr-accent/30 transition-colors"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h2 className="text-xl font-semibold text-white mb-3">
              {feature.title}
            </h2>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

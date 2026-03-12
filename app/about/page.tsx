import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | VETTR",
  description:
    "Learn about VETTR — the AI-powered platform helping investors perform thorough due diligence on mining and resource stocks.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          About VETTR
        </h1>
        <p className="text-lg text-gray-400">
          Making stock due diligence accessible to every investor.
        </p>
      </div>

      <div className="space-y-8 text-gray-400">
        <div className="rounded-xl bg-vettr-card p-8 border border-white/5">
          <h2 className="text-xl font-semibold text-white mb-4">Our Mission</h2>
          <p>
            Retail investors in the mining and resource sector face a unique
            challenge. Unlike blue-chip stocks with abundant analyst coverage,
            mining companies often fly under the radar with limited research
            available. VETTR was built to level the playing field — giving
            everyday investors the same quality of analysis that institutional
            investors rely on.
          </p>
        </div>

        <div className="rounded-xl bg-vettr-card p-8 border border-white/5">
          <h2 className="text-xl font-semibold text-white mb-4">What We Do</h2>
          <p>
            We use AI to automate the due diligence process. Our platform scans
            filings, tracks executives, detects red flags, and synthesizes
            everything into the VETTR Score — a single number that tells you how
            a company stacks up. Whether you are evaluating a gold explorer, a
            lithium developer, or a base metals producer, VETTR helps you make
            informed decisions backed by data, not hype.
          </p>
        </div>

        <div className="rounded-xl bg-vettr-card p-8 border border-white/5">
          <h2 className="text-xl font-semibold text-white mb-4">Built for Investors</h2>
          <p>
            VETTR is available on iOS and Android. Search for any mining stock,
            see your first VETTR Score in under a minute, and build watchlists
            to stay on top of the companies you care about. Stop guessing and
            start vetting.
          </p>
        </div>
      </div>
    </section>
  );
}

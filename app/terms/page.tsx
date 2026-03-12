import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | VETTR",
  description: "VETTR's terms of service — rules and guidelines for using our platform.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Terms of Service
      </h1>

      <div className="prose prose-invert prose-gray max-w-none space-y-6 text-gray-400">
        <p>
          <strong className="text-white">Last updated:</strong> January 15, 2025
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">1. Acceptance of Terms</h2>
        <p>
          By accessing or using VETTR, you agree to be bound by these terms of
          service. If you do not agree, do not use the platform.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">2. Not Financial Advice</h2>
        <p>
          VETTR provides information and analysis for educational and
          informational purposes only. Nothing on this platform constitutes
          financial, investment, legal, or tax advice. Always consult a qualified
          professional before making investment decisions.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">3. Use of Service</h2>
        <p>
          You agree to use VETTR only for lawful purposes and in accordance with
          these terms. You may not use the platform to distribute misleading
          information or manipulate markets.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">4. Intellectual Property</h2>
        <p>
          All content, features, and functionality of VETTR — including the VETTR
          Score algorithm, text, graphics, and software — are owned by VETTR and
          protected by intellectual property laws.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">5. Limitation of Liability</h2>
        <p>
          VETTR shall not be liable for any indirect, incidental, special, or
          consequential damages resulting from your use of the platform or
          reliance on any information provided.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">6. Contact</h2>
        <p>
          Questions about these terms can be directed to{" "}
          <a href="mailto:legal@vettr.app" className="text-vettr-accent hover:underline">
            legal@vettr.app
          </a>
          .
        </p>
      </div>
    </section>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | VETTR",
  description: "VETTR's privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Privacy Policy
      </h1>

      <div className="prose prose-invert prose-gray max-w-none space-y-6 text-gray-400">
        <p>
          <strong className="text-white">Last updated:</strong> January 15, 2025
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">1. Information We Collect</h2>
        <p>
          We collect information you provide directly, such as your name, email
          address, and account preferences when you create an account. We also
          collect usage data including pages visited, features used, and search
          queries to improve our service.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">2. How We Use Your Information</h2>
        <p>
          We use your information to provide, maintain, and improve the VETTR
          platform, send you alerts and notifications you have opted into, and
          communicate important service updates.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">3. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your
          personal information. All data is encrypted in transit and at rest.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">4. Third-Party Services</h2>
        <p>
          We may use third-party services for analytics and infrastructure. These
          services have their own privacy policies and we encourage you to review
          them.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">5. Contact Us</h2>
        <p>
          If you have questions about this privacy policy, please contact us at{" "}
          <a href="mailto:privacy@vettr.app" className="text-vettr-accent hover:underline">
            privacy@vettr.app
          </a>
          .
        </p>
      </div>
    </section>
  );
}

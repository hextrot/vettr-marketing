import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API & Developers | VETTR",
  description:
    "Access VETTR data programmatically. Explore our REST API for VETTR Scores, red flags, executive data, and more.",
};

const endpoints = [
  {
    method: "GET",
    path: "/api/v1/scores/{ticker}",
    description: "Retrieve the current VETTR Score for a given stock ticker.",
  },
  {
    method: "GET",
    path: "/api/v1/red-flags/{ticker}",
    description: "List all active red flags detected for a company.",
  },
  {
    method: "GET",
    path: "/api/v1/executives/{ticker}",
    description:
      "Get executive pedigree data including board history and track records.",
  },
  {
    method: "GET",
    path: "/api/v1/filings/{ticker}",
    description: "Retrieve AI-generated summaries of recent filings.",
  },
  {
    method: "GET",
    path: "/api/v1/alerts",
    description: "List recent alerts for stocks on your watchlist.",
  },
];

export default function DevelopersPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Developer API
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Access VETTR data programmatically. Build integrations, dashboards,
          and custom workflows with our REST API.
        </p>
      </div>

      <div className="mb-12 rounded-xl bg-vettr-card p-8 border border-white/5">
        <h2 className="text-xl font-semibold text-white mb-4">Quick Start</h2>
        <pre className="bg-vettr-navy rounded-lg p-4 overflow-x-auto text-sm text-gray-300">
          <code>{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
  https://api.vettr.app/v1/scores/GOLD.TO`}</code>
        </pre>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white mb-6">Endpoints</h2>
        {endpoints.map((endpoint) => (
          <div
            key={endpoint.path}
            className="rounded-xl bg-vettr-card p-6 border border-white/5"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="rounded bg-vettr-accent/20 px-2 py-1 text-xs font-mono font-semibold text-vettr-accent">
                {endpoint.method}
              </span>
              <code className="text-sm text-gray-300">{endpoint.path}</code>
            </div>
            <p className="text-sm text-gray-400">{endpoint.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/developers/swagger"
          className="rounded-lg bg-vettr-accent px-6 py-3 text-sm font-semibold text-vettr-navy shadow-sm hover:bg-vettr-accent/90 transition-colors"
        >
          View Full API Docs (Swagger)
        </Link>
      </div>
    </section>
  );
}

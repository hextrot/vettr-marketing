import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swagger API Docs | VETTR",
  description: "Interactive API documentation for the VETTR REST API.",
};

export default function SwaggerPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          API Documentation
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Interactive API reference for the VETTR platform.
        </p>
      </div>

      <div className="rounded-xl bg-vettr-card p-8 border border-white/5 text-center">
        <p className="text-gray-400 mb-4">
          Full interactive Swagger documentation is coming soon.
        </p>
        <p className="text-sm text-gray-500">
          In the meantime, check out the{" "}
          <a
            href="/developers"
            className="text-vettr-accent hover:underline"
          >
            API overview
          </a>{" "}
          for available endpoints.
        </p>
      </div>
    </section>
  );
}

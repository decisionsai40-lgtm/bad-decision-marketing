import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-radial-glow py-32">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <div className="text-8xl font-bold text-gradient">404</div>
        <h1 className="mt-6 text-3xl font-bold text-[var(--color-foreground)]">
          Page not found
        </h1>
        <p className="mt-3 text-lg text-[var(--color-text-secondary)]">
          The page you're looking for doesn't exist, was moved, or never existed in the
          first place. Like a stale lead list — let's move on to something better.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          <Home className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </section>
  );
}

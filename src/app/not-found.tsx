import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-gray-50 py-32">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <div className="text-8xl font-extrabold text-gray-900">404</div>
        <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
          That was a bad decision
        </h1>
        <p className="mt-3 text-lg font-medium text-gray-600">
          The page you were looking for does not exist, was moved, or never
          existed in the first place. Let us take you back to a page that does,
          so you can get on with finding customers.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary inline-flex">
            <Home className="h-4 w-4" />
            Back to home
          </Link>
          <Link href="/how-it-works" className="btn-secondary inline-flex">
            See how it works
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

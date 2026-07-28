import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function PageHeader({ title, subtitle, align = "center" }: PageHeaderProps) {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div
        className={cn(
          "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8",
          align === "center" ? "text-center" : "text-left"
        )}
      >
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p
            className={cn(
              "mt-4 text-lg font-medium text-gray-600 sm:text-xl",
              align === "center" && "mx-auto max-w-2xl"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

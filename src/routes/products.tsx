import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Cpu, Search, Shirt } from "lucide-react";
import { products } from "@/data/products";
import { PageHero, Section } from "@/components/site/Section";
import { PlaceholderMedia } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | HYPER FASHION BASE LLC" },
      {
        name: "description",
        content:
          "Browse fashion and technology products supplied by HYPER FASHION BASE LLC for wholesale, distribution and B2B sourcing.",
      },
    ],
  }),
  component: ProductsPage,
});

type Category = "All" | "Fashion" | "Technology";

function ProductsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = category === "All" || product.category === category;
      const haystack = `${product.name} ${product.description} ${product.category}`.toLowerCase();
      const matchQuery = haystack.includes(query.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [query, category]);

  return (
    <>
      <PageHero
        eyebrow="Product Catalogue"
        title="Wholesale Fashion And Technology Products"
        description="Explore our current catalogue of B2B-focused product lines. Search products directly within this page and filter by category."
      />

      <Section>
        <div className="card-premium p-6 md:p-8">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="relative">
              <Search className="text-muted-foreground absolute top-1/2 left-4 size-4 -translate-y-1/2" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products by name, category or keyword..."
                className="border-border bg-background focus:ring-accent h-12 w-full rounded-md border pl-11 pr-4 text-sm outline-none focus:ring-2"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {(["All", "Fashion", "Technology"] as Category[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={cn(
                    "rounded-md border px-4 py-2 text-sm font-medium transition-all",
                    category === item
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border bg-background hover:border-accent hover:text-accent",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-col justify-between gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center">
            <p>
              Showing <span className="text-foreground font-semibold">{filtered.length}</span> products
            </p>
            <p>Wholesale catalogue · Product imagery displayed where available</p>
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((product, index) => (
              <Reveal key={product.slug} delay={(index % 6) * 60}>
                <article className="card-premium h-full overflow-hidden">
                  <div className="product-image-frame">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="product-image"
                      />
                    ) : (
                      <PlaceholderMedia
                        label={`${product.name} placeholder`}
                        icon={product.category === "Fashion" ? Shirt : Cpu}
                      />
                    )}
                  </div>

                  <div className="p-7">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="eyebrow">{product.category}</span>
                        <h2 className="mt-3 text-xl font-semibold tracking-tight">{product.name}</h2>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {product.description}
                    </p>

                    <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                      <div className="rounded-lg bg-surface p-3">
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          MOQ
                        </div>
                        <div className="mt-1 font-medium text-foreground">{product.specs.moq}</div>
                      </div>

                      <div className="rounded-lg bg-surface p-3">
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          Packaging
                        </div>
                        <div className="mt-1 line-clamp-2 font-medium text-foreground">
                          {product.specs.packaging}
                        </div>
                      </div>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <Link
                        to="/products/$slug"
                        params={{ slug: product.slug }}
                        className="btn-base btn-navy"
                      >
                        View Details
                      </Link>

                      <Link to="/contact" className="btn-base btn-outline-navy">
                        Request Quote <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-border bg-surface p-10 text-center">
            <h2 className="text-lg font-semibold">No products found</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different keyword or switch the category filter.
            </p>
          </div>
        )}
      </Section>
    </>
  );
}

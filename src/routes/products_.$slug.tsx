import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Box,
  Cpu,
  Globe2,
  Package,
  Shirt,
  Truck,
} from "lucide-react";

import { getProduct, products } from "@/data/products";
import {
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site/Section";
import { PlaceholderMedia } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/products_/$slug")({
  head: ({ params }) => {
    const product = getProduct(params.slug);

    return {
      meta: [
        {
          title: `${product?.name ?? "Product"} | HYPER FASHION BASE LLC`,
        },
        {
          name: "description",
          content:
            product?.description ??
            "Product information for wholesale buyers at HYPER FASHION BASE LLC.",
        },
      ],
    };
  },

  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { slug } = Route.useParams();

  const product = getProduct(slug);

  /* =========================
     PRODUCT NOT FOUND
  ========================= */

  if (!product) {
    return (
      <Section>
        <div className="card-premium p-10 text-center">
          <h1 className="text-2xl font-bold">
            Product Not Found
          </h1>

          <p className="mt-3 text-sm text-muted-foreground">
            The requested product could not be found in our current catalogue.
          </p>

          <div className="mt-6 flex justify-center">
            <Link
              to="/products"
              className="btn-base btn-navy"
            >
              Back To Products
            </Link>
          </div>
        </div>
      </Section>
    );
  }

  /* =========================
     PRODUCT GALLERY
  ========================= */

  const galleryImages =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : product.image
        ? [product.image]
        : [];

  const mainImage = galleryImages[0];

  /* =========================
     RELATED PRODUCTS
  ========================= */

  const related = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.slug !== product.slug,
    )
    .slice(0, 3);

  return (
    <>
      {/* ========================================
          HERO
      ======================================== */}

      <PageHero
        eyebrow={product.category}
        title={product.name}
        description={product.description}
      />

      {/* ========================================
          PRODUCT DETAIL
      ======================================== */}

      <Section>
        {/* Back */}

        <div className="mb-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" />

            Back to Products
          </Link>
        </div>

        {/* Main layout */}

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* =========================
              PRODUCT IMAGES
          ========================= */}

          <Reveal>
            <div className="card-premium overflow-hidden">
              {/* MAIN IMAGE */}

              <div className="product-detail-image-frame">
                {mainImage ? (
                  <img
                    src={mainImage}
                    alt={product.name}
                    className="product-detail-image"
                  />
                ) : (
                  <PlaceholderMedia
                    label={`${product.name} gallery placeholder`}
                    icon={
                      product.category === "Fashion"
                        ? Shirt
                        : Cpu
                    }
                  />
                )}
              </div>

              {/* THUMBNAIL GALLERY */}

              {galleryImages.length > 1 && (
                <div
                  className={`grid gap-px bg-border ${
                    galleryImages.slice(1, 4).length === 1
                      ? "grid-cols-1"
                      : galleryImages.slice(1, 4).length === 2
                        ? "grid-cols-2"
                        : "grid-cols-3"
                  }`}
                >
                  {galleryImages
                    .slice(1, 4)
                    .map((image, index) => (
                      <div
                        key={`${image}-${index}`}
                        className="aspect-square overflow-hidden bg-[#f7f7f5]"
                      >
                        <img
                          src={image}
                          alt={`${product.name} view ${index + 2}`}
                          loading="lazy"
                          className="product-gallery-image"
                        />
                      </div>
                    ))}
                </div>
              )}
            </div>
          </Reveal>

          {/* =========================
              PRODUCT INFORMATION
          ========================= */}

          <div>
            <SectionHeading
              eyebrow={product.category}
              title={product.name}
              description={product.description}
            />

            {/* SPECS */}

            <Reveal
              delay={100}
              className="mt-7 grid gap-4 sm:grid-cols-2"
            >
              {[
                {
                  label: "Material",
                  value: product.specs.material,
                  icon: BadgeCheck,
                },
                {
                  label: "Size",
                  value: product.specs.size,
                  icon: Box,
                },
                {
                  label: "Color",
                  value: product.specs.color,
                  icon: Globe2,
                },
                {
                  label: "MOQ",
                  value: product.specs.moq,
                  icon: Package,
                },
                {
                  label: "Packaging",
                  value: product.specs.packaging,
                  icon: Truck,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-surface p-4"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    <item.icon className="size-4 text-accent" />

                    {item.label}
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </Reveal>

            {/* =========================
                CONTACT CTA
            ========================= */}

            <Reveal
              delay={160}
              className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-card"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                  <span className="eyebrow">
                    B2B Purchasing
                  </span>

                  <h3 className="mt-3 text-xl font-semibold">
                    Interested In This Product?
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Contact our team for wholesale pricing,
                    available specifications, packaging options,
                    lead time and customized sourcing requirements.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                    <span>• Wholesale orders</span>

                    <span>• OEM / ODM support</span>

                    <span>• Custom packaging</span>

                    <span>• Global shipping</span>
                  </div>
                </div>

                <div className="shrink-0">
                  <Link
                    to="/contact"
                    className="btn-base btn-gold"
                  >
                    Contact Us

                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ========================================
          RELATED PRODUCTS
      ======================================== */}

      <Section tone="muted">
        <SectionHeading
          eyebrow="Related Products"
          title="You May Also Be Interested In"
          description="Additional catalogue items from the same supply category."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {related.map((item, index) => (
            <Reveal
              key={item.slug}
              delay={index * 80}
            >
              <article className="card-premium h-full overflow-hidden">
                {/* RELATED PRODUCT IMAGE */}

                <div className="h-64 overflow-hidden bg-[#f7f7f5]">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="related-product-image"
                    />
                  ) : (
                    <PlaceholderMedia
                      label={`${item.name} placeholder`}
                      icon={
                        item.category === "Fashion"
                          ? Shirt
                          : Cpu
                      }
                    />
                  )}
                </div>

                {/* RELATED PRODUCT CONTENT */}

                <div className="p-6">
                  <span className="eyebrow">
                    {item.category}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  <Link
                    to="/products/$slug"
                    params={{
                      slug: item.slug,
                    }}
                    className="btn-base btn-outline-navy mt-6"
                  >
                    View Product
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
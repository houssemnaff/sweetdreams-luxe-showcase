import { createFileRoute } from "@tanstack/react-router";

import heroPoster from "@/assets/hero.jpg";
import heroVideo from "@/assets/hero-loop.mp4.asset.json";
import { categories, INSTAGRAM_URL, whatsappLink } from "@/lib/sweet-dreams";
import { ProductCard, WhatsAppIcon } from "@/components/sweet-dreams/ProductCard";
import { InstagramIcon } from "@/components/sweet-dreams/InstagramIcon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sweet Dreams | Luxury Patisserie & Cake Atelier" },
      {
        name: "description",
        content:
          "Sweet Dreams luxury patisserie: birthday cakes, engagement cakes, kaak warka and baklawa. Order directly on WhatsApp.",
      },
      { property: "og:title", content: "Sweet Dreams | Luxury Patisserie & Cake Atelier" },
      {
        property: "og:description",
        content:
          "Handcrafted cakes with gold leaf detail and traditional Tunisian pastries, made to order.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Anniversaire", href: "#anniversaire" },
  { label: "Fiançailles", href: "#fiancailles" },
  { label: "Salés & Traiteur", href: "#sales" },
  { label: "L'Atelier", href: "#atelier" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Catalog />
        <Atelier />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8 lg:py-4">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-gradient font-display text-sm font-bold text-primary-foreground">
            SD
          </span>
          <span className="truncate font-brand text-3xl leading-none sm:text-4xl">
            Sweet Dreams
          </span>
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-xs font-medium uppercase tracking-[0.18em] text-gold transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-gradient after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sweet Dreams on Instagram"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/40 text-gold transition-all duration-400 hover:bg-gold-gradient hover:text-primary-foreground hover:shadow-gold"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gold-gradient px-6 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground shadow-soft transition-transform duration-300 hover:scale-105 sm:inline-flex"
          >
            Commander
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background px-5 pb-20 pt-10 sm:px-8">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-secondary blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 animate-float-slow rounded-full bg-accent/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] shadow-gold sm:rounded-[2.5rem]">
          <video
            className="h-[78vh] min-h-[26rem] w-full animate-kenburns object-cover"
            src={heroVideo.url}
            poster={heroPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Sweet Dreams patisserie atelier"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/35 to-background/45" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="animate-rise text-[0.65rem] font-medium uppercase tracking-[0.42em] text-gold sm:text-xs">
              Pâtisserie de Luxe · Tunisie
            </p>
            <h1 className="mt-4 animate-rise font-brand text-6xl leading-[0.95] sm:text-8xl lg:text-[8.5rem]">
              Sweet Dreams
            </h1>
            <div className="gold-rule mt-6 w-40 animate-rise sm:w-64" />
            <p className="mt-6 max-w-xl animate-rise font-display text-lg font-light text-foreground sm:text-2xl">
              Gâteaux d'exception, feuilles d'or et douceurs traditionnelles — façonnés à la main
              pour vos plus beaux moments.
            </p>
            <div className="mt-9 flex animate-rise flex-col items-center gap-3 sm:flex-row">
              <a
                href="#anniversaire"
                className="rounded-full bg-gold-gradient px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-gold transition-transform duration-300 hover:scale-105"
              >
                Explore Catalog
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-background/70 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors duration-300 hover:bg-secondary"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Commander
              </a>
            </div>
          </div>
        </div>

        <dl className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            ["100%", "Fait main"],
            ["Or 24k", "Détails comestibles"],
            ["Sur mesure", "Chaque commande"],
            ["Livraison", "Sur rendez-vous"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl bg-pink-veil p-5 text-center shadow-soft">
              <dt className="font-display text-xl font-semibold text-gold sm:text-2xl">{value}</dt>
              <dd className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Catalog() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
      {categories.map((category) => (
        <div key={category.id} id={category.id} className="scroll-mt-28 pb-20">
          <div className="mb-10 text-center">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.32em] text-accent-foreground">
              {category.subtitle}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {category.title}
            </h2>
            <div className="gold-rule mx-auto mt-5 w-28" />
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {category.products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function Atelier() {
  return (
    <section id="atelier" className="scroll-mt-28 bg-pink-veil px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-[2rem] shadow-gold">
          <img
            src={heroPoster}
            alt="Sweet Dreams pastry atelier detailing a cake with gold leaf"
            loading="lazy"
            width={1920}
            height={1088}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.32em] text-gold">
            L'Atelier
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            L'art de la haute pâtisserie
          </h2>
          <div className="gold-rule mt-5 w-24" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Chaque création Sweet Dreams naît d'un dialogue : votre occasion, vos couleurs, votre
            histoire. Nous travaillons des ingrédients nobles, des ganaches soyeuses et des finitions
            à la feuille d'or pour des pièces uniques, aussi belles que délicieuses.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Commandes personnalisées sur mesure",
              "Pièces montées pour fiançailles et mariages",
              "Plateaux traiteur salés & douceurs tunisiennes",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-gradient" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-gold transition-transform duration-300 hover:scale-105"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Discuter de votre gâteau
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background px-5 py-14 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
        <span className="font-brand text-5xl leading-none">Sweet Dreams</span>
        <div className="gold-rule w-40" />
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-gold transition-all duration-400 hover:bg-gold-gradient hover:text-primary-foreground hover:shadow-gold"
          >
            <InstagramIcon className="h-4 w-4" />
            @amal_sghairi
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-gold transition-all duration-400 hover:bg-gold-gradient hover:text-primary-foreground hover:shadow-gold"
          >
            <WhatsAppIcon className="h-4 w-4" />
            +216 24 220 772
          </a>
        </div>
        <p className="text-xs tracking-[0.12em] text-muted-foreground">
          © {new Date().getFullYear()} Sweet Dreams · Pâtisserie de luxe
        </p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order Sweet Dreams via WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-gold-gradient px-5 py-4 text-primary-foreground shadow-gold transition-transform duration-300 hover:scale-110"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden text-xs font-semibold uppercase tracking-[0.16em] sm:inline">
        Order now
      </span>
    </a>
  );
}

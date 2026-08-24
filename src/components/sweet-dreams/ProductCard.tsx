import { whatsappLink, type Product } from "@/lib/sweet-dreams";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-gold">
      <div className="relative aspect-4/3 overflow-hidden bg-pink-veil">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-accent-foreground group-hover:animate-pulse-badge">
          {product.badge}
        </span>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background/80 to-transparent" />
      </div>

      <div className="relative p-6">
        <div className="gold-rule mb-5 w-16" />
        <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

        <a
          href={whatsappLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/50 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-gold transition-all duration-400 hover:bg-gold-gradient hover:text-primary-foreground hover:shadow-gold"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Order via WhatsApp
        </a>
      </div>
    </article>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.15-.15.33-.38.5-.58.11-.13.19-.27.28-.45.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.19-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.34 5.1 4.55 2.99 1.2 3.03.85 3.58.8.55-.05 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.6 2 2.17 6.42 2.17 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.36-1.4a9.9 9.9 0 0 0 4.68 1.19h.01c5.44 0 9.86-4.42 9.86-9.86C21.91 6.42 17.48 2 12.04 2Zm0 17.94h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.1.81.83-3.03-.19-.31a8.19 8.19 0 0 1-1.25-4.36c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.86 5.8 2.4a8.15 8.15 0 0 1 2.4 5.8c0 4.53-3.68 8.21-8.21 8.21Z" />
    </svg>
  );
}

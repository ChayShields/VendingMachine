const WHATSAPP_HREF =
  "https://wa.me/447492585595?text=Hi%20Vending%20Forever%2C%20I%27d%20like%20to%20find%20out%20more";
const EMAIL = "chay@hireme.link";
const EMAIL_HREF = `mailto:${EMAIL}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className}>
      <path d="M16.02 3C9.4 3 4.02 8.38 4.02 15c0 2.25.62 4.36 1.7 6.17L4 29l7.99-1.65A11.93 11.93 0 0 0 16.02 27C22.64 27 28 21.62 28 15S22.64 3 16.02 3Zm0 21.8a9.7 9.7 0 0 1-4.95-1.36l-.36-.21-4.74.98.98-4.62-.24-.38A9.72 9.72 0 0 1 6.22 15c0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8Zm5.37-7.34c-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.66.15-.2.29-.76.95-.93 1.15-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.03c.15.19 2.06 3.15 5 4.42.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.73-.71 1.98-1.39.24-.68.24-1.27.17-1.39-.07-.12-.26-.19-.55-.34Z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

const services = [
  {
    name: "Machine Rental",
    tagline: "Your location, your rules.",
    description:
      "Rent one of our vending machines outright and run it your way. You handle stocking and day-to-day upkeep; we make sure the hardware just works.",
    bullets: [
      "Flexible rental terms, no long lock-ins",
      "Full delivery, install, and setup included",
      "Repairs and breakdown support on call",
      "Upgrade or swap machines as demand changes",
    ],
  },
  {
    name: "Full-Service Placement",
    tagline: "We place it. We run it. You collect the upside.",
    description:
      "We site a machine in your location and handle everything from there — stocking, restocking, cleaning, and maintenance. You provide the footfall, we provide the machine and the labour.",
    bullets: [
      "Zero effort from your team, ever",
      "Regular restocking on a set schedule",
      "Proactive maintenance and fast fault fixes",
      "A cut of the revenue, paid to you automatically",
    ],
  },
];

const steps = [
  {
    step: "01",
    title: "Tell us what you need",
    description:
      "Call or email us with your location and what you're after — a machine to rent, or a full hands-off placement.",
  },
  {
    step: "02",
    title: "We size it up",
    description:
      "We assess footfall, space, and power, then recommend the right machine and the right deal for the site.",
  },
  {
    step: "03",
    title: "Install and go live",
    description:
      "We deliver, install, and switch the machine on. Full-service sites get their first stock load on day one.",
  },
  {
    step: "04",
    title: "We keep it running",
    description:
      "Rentals get maintenance support on call. Full-service sites get scheduled restocking, cleaning, and upkeep — forever.",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-semibold tracking-tight">
            Vending<span className="text-accent">Forever</span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted sm:flex">
            <a href="#services" className="hover:text-foreground">
              Services
            </a>
            <a href="#how-it-works" className="hover:text-foreground">
              How It Works
            </a>
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
          </nav>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp us
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            Vending machines, sorted
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Rent a machine, or let us run one for you.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Vending Forever gets vending machines working in your space — no
            fuss. Take one on rental and run it yourself, or let us place,
            stock, and maintain a machine at your location while you sit
            back and collect a share of the revenue.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
            >
              Get a machine placed
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-accent hover:text-accent"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </section>

        <section id="services" className="border-t border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Two ways to work with us
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              Whichever fits your space and how hands-on you want to be.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="rounded-2xl border border-border bg-surface-2 p-8"
                >
                  <h3 className="text-2xl font-semibold">{service.name}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {service.tagline}
                  </p>
                  <p className="mt-4 text-muted">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm">
                        <span className="mt-0.5 text-accent">✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How it works
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((item) => (
                <div key={item.step}>
                  <p className="text-sm font-semibold text-accent">
                    {item.step}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-border bg-surface"
        >
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="rounded-2xl border border-border bg-surface-2 p-10 sm:p-14">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to get a machine working?
              </h2>
              <p className="mt-4 max-w-xl text-muted">
                Whether you want to rent a machine or have us place and run
                one for you, get in touch and we&apos;ll sort the details.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <a
                  href={EMAIL_HREF}
                  className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-accent hover:text-accent"
                >
                  <MailIcon className="h-4 w-4" />
                  Email us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            Vending<span className="text-accent">Forever</span> &mdash;
            vending machine rental &amp; full-service placement.
          </p>
          <div className="flex gap-6">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={EMAIL_HREF}
              className="flex items-center gap-2 hover:text-foreground"
            >
              <MailIcon className="h-4 w-4" />
              Email us
            </a>
          </div>
        </div>
      </footer>

      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </>
  );
}

const PHONE_DISPLAY = "07492 585595";
const PHONE_HREF = "tel:+447492585595";
const EMAIL = "chay@hireme.link";
const EMAIL_HREF = `mailto:${EMAIL}`;

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
            href={PHONE_HREF}
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90"
          >
            {PHONE_DISPLAY}
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
              href={PHONE_HREF}
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-accent hover:text-accent"
            >
              Call {PHONE_DISPLAY}
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
                  href={PHONE_HREF}
                  className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
                >
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href={EMAIL_HREF}
                  className="rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-accent hover:text-accent"
                >
                  Email {EMAIL}
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
            <a href={PHONE_HREF} className="hover:text-foreground">
              {PHONE_DISPLAY}
            </a>
            <a href={EMAIL_HREF} className="hover:text-foreground">
              {EMAIL}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

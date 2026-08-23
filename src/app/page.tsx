"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

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

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
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

const guarantees = [
  {
    title: "No long lock-ins",
    description:
      "Month-to-month as standard. If it's not working for your space, we'll say so, or you can walk away.",
  },
  {
    title: "Underperforming machine? We fix it or move it",
    description:
      "If a machine isn't earning its spot, we'll swap the product mix, relocate it within your site, or pull it. No argument.",
  },
  {
    title: "Faults handled fast",
    description:
      "Something breaks, you tell us and we're on it. You're never the one stuck troubleshooting a vending machine.",
  },
];

const faqs = [
  {
    q: "Does it cost me anything upfront?",
    a: "Full-service placement costs you nothing to start — we own and run the machine, you provide the space. Machine rental has a straightforward rental fee, agreed before anything's delivered.",
  },
  {
    q: "Who actually owns the machine?",
    a: "On a full-service placement, we own it. On a rental, you're renting it from us for the term you agree, and it stays our hardware, which is why breakdown support is included either way.",
  },
  {
    q: "How do I get paid on a full-service placement?",
    a: "You get a share of the revenue the machine generates in your space, paid out automatically on a set schedule. No invoicing, no chasing.",
  },
  {
    q: "What if it breaks down?",
    a: "Call or WhatsApp us and we'll get it sorted. Rentals and full-service placements both include breakdown support, so it's never on you to fix it.",
  },
  {
    q: "How much space and power does it need?",
    a: "Most machines need a standard wall socket and roughly the footprint of a large fridge. We'll confirm exact requirements against the machine we recommend for your site during the initial assessment.",
  },
  {
    q: "How long until it's actually installed?",
    a: "Once we've agreed the deal, most sites go live within a couple of weeks — delivery, install, and first stock load are all on us.",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            Vending<span className="text-accent">Forever</span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted sm:flex">
            <a href="#services" className="hover:text-foreground">
              Services
            </a>
            <a href="#how-it-works" className="hover:text-foreground">
              How It Works
            </a>
            <a href="#faq" className="hover:text-foreground">
              FAQ
            </a>
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
          </nav>
          <motion.a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp us
          </motion.a>
        </div>
      </header>

      <main id="top" className="flex-1 pb-20 sm:pb-0">
        <section className="relative overflow-hidden">
          <div className="bg-grid pointer-events-none absolute inset-0" />
          <div
            className="pointer-events-none absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, var(--accent), transparent)",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-sm font-medium uppercase tracking-widest text-accent"
            >
              Vending machines, sorted
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-display max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl"
            >
              Turn spare space into income you never have to manage.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 max-w-2xl text-lg text-muted"
            >
              Vending Forever places, stocks, and maintains the machine for
              you, so a corner of your space earns without costing you a
              minute. Prefer to run it yourself? Rent a machine instead, and
              we'll still keep it working.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
              >
                Get a machine placed
              </motion.a>
              <motion.a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, borderColor: "var(--accent)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:text-accent"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </motion.a>
            </motion.div>
          </div>
        </section>

        <section id="services" className="border-t border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Two ways to work with us
              </h2>
              <p className="mt-4 max-w-2xl text-muted">
                Whichever fits your space and how hands-on you want to be.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {services.map((service, i) => (
                <Reveal key={service.name} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4, borderColor: "var(--accent)" }}
                    transition={{ duration: 0.2 }}
                    className="h-full rounded-2xl border border-border bg-surface-2 p-8"
                  >
                    <h3 className="font-display text-2xl font-semibold">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {service.tagline}
                    </p>
                    <p className="mt-4 text-muted">{service.description}</p>
                    <ul className="mt-6 space-y-3">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                How it works
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((item, i) => (
                <Reveal key={item.step} delay={i * 0.08}>
                  <p className="font-display text-sm font-semibold text-accent">
                    {item.step}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Where we stand behind it
              </h2>
              <p className="mt-4 max-w-2xl text-muted">
                No hostage contracts, no dead machines left to rot in the
                corner. If it's not working, we fix it.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {guarantees.map((g, i) => (
                <Reveal key={g.title} delay={i * 0.1}>
                  <div className="h-full rounded-2xl border border-border bg-surface-2 p-6">
                    <h3 className="font-semibold">{g.title}</h3>
                    <p className="mt-2 text-sm text-muted">{g.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Questions people actually ask
              </h2>
            </Reveal>
            <div className="mt-10 space-y-3">
              {faqs.map((item, i) => (
                <Reveal key={item.q} delay={i * 0.05}>
                  <details className="group rounded-xl border border-border bg-surface-2 px-6 py-4 open:border-accent/50">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                      {item.q}
                      <span className="shrink-0 text-accent transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-muted">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Reveal>
              <div className="rounded-2xl border border-border bg-surface-2 p-10 sm:p-14">
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  Ready to get a machine working?
                </h2>
                <p className="mt-4 max-w-xl text-muted">
                  Whether you want to rent a machine or have us place and run
                  one for you, get in touch and we&apos;ll sort the details.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <motion.a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Chat on WhatsApp
                  </motion.a>
                  <motion.a
                    href={EMAIL_HREF}
                    whileHover={{ scale: 1.03, borderColor: "var(--accent)" }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:text-accent"
                  >
                    <MailIcon className="h-4 w-4" />
                    Email us
                  </motion.a>
                </div>
              </div>
            </Reveal>
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
        className="fixed bottom-6 right-6 z-20 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition hover:scale-105 sm:flex"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed inset-x-0 bottom-0 z-20 flex items-center justify-center gap-2 bg-[#25D366] py-4 text-sm font-semibold text-white sm:hidden"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Chat with us on WhatsApp
      </a>
    </>
  );
}

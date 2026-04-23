<<<<<<< Updated upstream
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="h-screen overflow-hidden bg-white">
      <Navbar />
      <main className="h-full overflow-hidden pt-20">
        <Hero />
      </main>
    </div>
  );
=======
"use client";

/**
 * Maimako for NAUSA 2026 — Landing Page
 * Stack: Next.js · Tailwind CSS · shadcn/ui
 *
 * SETUP CHECKLIST
 * ───────────────
 * 1. Add to tailwind.config.ts → theme.extend.colors:
 *
 *    brown: {
 *      50:  "#fdf8f3",
 *      100: "#f5e9d9",
 *      200: "#e9ceaf",
 *      300: "#d4aa80",
 *      400: "#c49a6c",
 *      500: "#a67c50",
 *      600: "#8B5E3C",
 *      700: "#6F4A2F",
 *      800: "#3D2B1F",
 *      900: "#1E130D",
 *    },
 *    gold: {
 *      300: "#f5d78e",
 *      400: "#E8B84B",
 *      500: "#c9962a",
 *      600: "#a67c1e",
 *    },
 *
 * 2. Add Playfair Display to globals.css:
 *    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
 *    And in tailwind.config.ts → theme.extend.fontFamily:
 *    serif: ["Playfair Display", "Georgia", "serif"],
 *
 * 3. Drop this file into app/page.tsx or any route file.
 *    Replace the placeholder divs with real <Image> components.
 *
 * 4. shadcn components used:
 *    npx shadcn@latest add button badge
 */

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About",    href: "#about"    },
  { label: "Platform", href: "#platform" },
  { label: "Vision",   href: "#vision"   },
  { label: "Contact",  href: "#contact"  },
];

const STATS = [
  { value: "2026",  label: "Election Year"  },
  { value: "100%",  label: "Student-first"  },
  { value: "Nile",  label: "University"     },
  { value: "NAUSA", label: "Student Union"  },
];

const SPONSORS = [
  { name: "Nile University of Nigeria", logo: "/nilelogo.png",   abbr: "NU"  },
  { name: "Foundation",                 logo: "/foundation.png", abbr: "FD"  },
  { name: "APC Nigeria",                logo: "/apc.jpg",        abbr: "APC" },
];

const PILLARS = [
  { icon: "⚡", title: "Representation",   body: "Every student's voice heard at every table, every time."         },
  { icon: "🎓", title: "Academic Welfare", body: "Fighting for resources, funding, and the right to learn well."   },
  { icon: "🤝", title: "Unity",            body: "One campus, one movement — across every department and faculty." },
  { icon: "🌍", title: "Legacy",           body: "Building institutions that outlast any single administration."   },
];

const MARQUEE_ITEMS = [
  "Maimako 2026", "NAUSA Campaign", "Nile University",
  "Student Governance", "Vote Maimako", "Change Starts Here",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SponsorCard({
  name, abbr,
}: {
  name: string; logo: string; abbr: string;
}) {
  return (
    <div className="flex items-center gap-3 bg-brown-50 border border-brown-200/60 rounded-xl px-4 py-3">
      {/*
        Replace the placeholder div below with your actual image:
        <Image src={logo} alt={name} width={32} height={32} className="rounded-md object-contain" />
      */}
      <div className="w-8 h-8 rounded-md bg-brown-200/60 flex items-center justify-center text-[10px] font-semibold text-brown-600 shrink-0">
        {abbr}
      </div>
      <span className="text-xs font-medium text-brown-800">{name}</span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MaimakoLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted,  setMounted]  = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-brown-50 text-brown-900 overflow-x-hidden font-sans">

      {/* Global keyframe declarations — Tailwind JIT cannot generate these */}
      <style>{`
        @keyframes fadeUp  { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn  { from { opacity:0; } to { opacity:1; } }
        @keyframes growX   { from { transform:scaleX(0); } to { transform:scaleX(1); } }
        @keyframes marquee { from { transform:translateX(0); } to { transform:translateX(-50%); } }

        .anim-fade-up  { animation: fadeUp  0.9s ease both; }
        .anim-fade-in  { animation: fadeIn  0.8s ease both; }
        .anim-grow-x   { animation: growX   1.2s ease both; transform-origin: left; }
        .anim-marquee  { animation: marquee 22s linear infinite; }

        .d-100  { animation-delay: 0.1s;  }
        .d-250  { animation-delay: 0.25s; }
        .d-500  { animation-delay: 0.5s;  }
        .d-700  { animation-delay: 0.7s;  }
        .d-800  { animation-delay: 0.8s;  }
        .d-1000 { animation-delay: 1.0s;  }
        .d-1400 { animation-delay: 1.4s;  }
      `}</style>

      {/* ════════════════════════════════════════════════
          HEADER
      ════════════════════════════════════════════════ */}
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 h-16 transition-all duration-300",
          scrolled
            ? "bg-brown-50/90 backdrop-blur-md border-b border-brown-200/50 shadow-sm"
            : "bg-transparent border-b border-transparent"
        )}
      >
        {/* Wordmark */}
        <div className="flex items-center gap-2.5">
          {/*
            Replace with your actual logo:
            <Image src="/favicon/ms-icon-310x310.png" alt="Maimako" width={28} height={28} />
          */}
          <div className="w-7 h-7 rounded-full border-2 border-brown-600 flex items-center justify-center">
            <div className="w-2 h-2 bg-gold-400 rounded-full" />
          </div>
          <span className="text-sm font-semibold tracking-wide text-brown-800">Maimako</span>
        </div>

        {/* Nav — hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[11px] uppercase tracking-widest text-brown-500 hover:text-brown-800 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Header CTA */}
        <Button
          asChild
          className="rounded-full bg-brown-600 hover:bg-brown-700 text-white text-[11px] tracking-widest uppercase px-5 py-2 h-auto"
        >
          <a href="#contact">Support the Campaign →</a>
        </Button>
      </header>

      {/* ════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24 pb-20 max-w-6xl mx-auto">

        {/* Soft ambient glows */}
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gold-400/10 blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-brown-200/40 blur-3xl" />
        </div>

        {/* Eyebrow badge */}
        {mounted && (
          <div className="mb-10 anim-fade-in d-100">
            <Badge
              variant="outline"
              className="rounded-full border-gold-400 text-gold-600 bg-gold-300/20 text-[10px] tracking-[0.14em] uppercase px-4 py-1.5 font-medium"
            >
              🗳&nbsp; NAUSA 2026 Campaign — Official
            </Badge>
          </div>
        )}

        {/* Main two-column flex */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">

          {/* LEFT — headline + CTAs */}
          <div className="flex-1 max-w-2xl">

            {mounted && (
              <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-normal leading-none tracking-tight text-brown-900 anim-fade-up d-250">
                Maimako
                <br />
                <em className="italic text-brown-400">for</em>
                <br />
                <span className="text-gold-500">NAUSA</span>
              </h1>
            )}

            {/* Animated rule */}
            {mounted && (
              <div className="h-px bg-brown-300 my-8 anim-grow-x d-700" />
            )}

            {/* Tagline */}
            {mounted && (
              <p className="text-base md:text-lg leading-relaxed text-brown-500 max-w-md font-light anim-fade-up d-800">
                A campaign rooted in service, driven by community, and built for
                the generation that will define tomorrow&apos;s Nigeria.
              </p>
            )}

            {/* Campaign promise tags */}
            {mounted && (
              <div className="mt-6 flex flex-wrap gap-2 anim-fade-up d-800">
                {["Student Welfare", "Academic Excellence", "Unity & Progress", "Transparency"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-widest border border-brown-300 text-brown-500 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTAs */}
            {mounted && (
              <div className="mt-10 flex flex-wrap gap-4 items-center anim-fade-up d-1000">
                <Button
                  asChild
                  className="rounded-full bg-gold-400 hover:bg-gold-500 text-brown-900 font-semibold text-xs tracking-widest uppercase px-8 py-4 h-auto shadow-lg shadow-gold-400/30"
                >
                  <a href="#platform">Our Platform →</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-brown-300 text-brown-700 hover:bg-brown-100 text-xs tracking-widest uppercase px-8 py-4 h-auto"
                >
                  <a href="#about">Read Manifesto</a>
                </Button>
              </div>
            )}
          </div>

          {/* RIGHT — Stats + Sponsors */}
          {mounted && (
            <div className="flex flex-col items-start lg:items-end gap-8 anim-fade-up d-500">

              {/* Stats 2×2 grid */}
              <div className="grid grid-cols-2 gap-6 w-72">
                {STATS.map(({ value, label }) => (
                  <div key={label} className="border-t border-brown-200 pt-4">
                    <p className="text-2xl font-semibold tracking-tight text-brown-800">{value}</p>
                    <p className="text-[10px] uppercase tracking-widest text-brown-400 mt-1">{label}</p>
                  </div>
                ))}
              </div>

              {/* Sponsors */}
              <div className="w-72">
                <p className="text-[10px] uppercase tracking-[0.14em] text-brown-400 mb-3">
                  Proudly Sponsored By
                </p>
                <div className="flex flex-col gap-2">
                  {SPONSORS.map((s) => (
                    <SponsorCard key={s.name} {...s} />
                  ))}
                </div>
              </div>

              {/* Revolution callout card */}
              <div className="w-72 flex items-center gap-4 border border-gold-400/40 rounded-2xl px-5 py-4 bg-gold-300/10">
                {/*
                  Replace with:
                  <Image src="/revolution.png" alt="Revolution" width={48} height={48} className="rounded-xl object-contain" />
                */}
                <div className="w-12 h-12 rounded-xl bg-gold-400/20 flex items-center justify-center text-gold-600 text-lg shrink-0">
                  ✊
                </div>
                <div>
                  <p className="text-sm font-semibold text-brown-800">Revolution in Progress</p>
                  <p className="text-[11px] text-brown-400 mt-0.5">Join the movement shaping Nile&apos;s future</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Scroll cue */}
        {mounted && (
          <div className="mt-20 flex items-center gap-3 opacity-40 anim-fade-in d-1400">
            <div className="w-px h-12 bg-brown-400" />
            <span className="text-[10px] uppercase tracking-widest text-brown-400">Scroll to explore</span>
          </div>
        )}
      </section>

      {/* ════════════════════════════════════════════════
          MARQUEE STRIP
      ════════════════════════════════════════════════ */}
      <div className="bg-brown-800 border-y border-brown-700 overflow-hidden whitespace-nowrap py-3">
        <div className="inline-flex gap-12 anim-marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className={cn(
              "text-[10px] uppercase tracking-[0.16em]",
              i % 2 === 0 ? "text-gold-400 font-medium" : "text-brown-400"
            )}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          CAMPAIGN PILLARS
      ════════════════════════════════════════════════ */}
      <section id="platform" className="px-6 md:px-10 py-24 max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-[10px] uppercase tracking-[0.16em] text-gold-500 mb-3">What We Stand For</p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-brown-900">
            Four pillars.
            <br />
            <em className="italic text-brown-400">One mission.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map(({ icon, title, body }) => (
            <div
              key={title}
              className="group border border-brown-200 rounded-2xl p-6 bg-white hover:border-gold-400 hover:shadow-lg hover:shadow-gold-400/10 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gold-300/30 flex items-center justify-center text-lg mb-5 group-hover:bg-gold-400/30 transition-colors">
                {icon}
              </div>
              <h3 className="text-xs font-semibold text-brown-800 mb-2 uppercase tracking-wide">{title}</h3>
              <p className="text-xs leading-relaxed text-brown-400">{body}</p>
              <div className="mt-5 h-px bg-brown-100 group-hover:bg-gold-400 transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          CTA BAND
      ════════════════════════════════════════════════ */}
      <section
        id="contact"
        className="mx-6 md:mx-10 mb-20 rounded-3xl bg-brown-800 px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div>
          <p className="text-[10px] uppercase tracking-[0.14em] text-gold-400 mb-3">Make Your Voice Count</p>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-white leading-tight">
            Stand with Maimako.
            <br />
            <em className="italic text-gold-400">Vote for change.</em>
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Button className="rounded-full bg-gold-400 hover:bg-gold-500 text-brown-900 font-semibold text-xs tracking-widest uppercase px-8 py-4 h-auto shadow-lg shadow-gold-400/20">
            Join the Campaign →
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-white/20 text-white hover:bg-white/10 text-xs tracking-widest uppercase px-8 py-4 h-auto"
          >
            Contact the Team
          </Button>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════ */}
      <footer className="border-t border-brown-200 px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-brown-400">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full border border-brown-400 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
          </div>
          <span className="font-medium text-brown-600">Maimako for NAUSA 2026</span>
        </div>
        <p className="uppercase tracking-widest">Official Campaign · Nile University of Nigeria</p>
        <p>© 2026 · All rights reserved</p>
      </footer>

    </div>
  );
>>>>>>> Stashed changes
}
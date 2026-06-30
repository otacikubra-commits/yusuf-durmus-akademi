import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, ArrowRight } from "lucide-react";

const links = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/kurumsal", label: "Kurumsal" },
  { to: "/lise-bilim-ve-olimpiyat-kamplari", label: "Bilim Kampları" },
  { to: "/ortaokul-ekoloji-ve-doga-okulu", label: "Doğa Okulu" },
  { to: "/gurur-tablosu", label: "Gurur Tablosu" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-deep/92 backdrop-blur-xl border-b border-white/10 shadow-elegant"
          : "bg-transparent"
      }`}
    >
      {/* Top utility bar */}
      <div
        className={`hidden md:block border-b border-white/10 transition-all duration-500 ${
          scrolled ? "max-h-0 opacity-0 overflow-hidden" : "max-h-12 opacity-100"
        }`}
      >
        <div className="container-prose flex h-10 items-center justify-between text-[11px] tracking-wider uppercase text-cream/65">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              2026 Kontenjanları Açıldı
            </span>
            <span className="hidden lg:inline text-cream/45">·</span>
            <span className="hidden lg:inline">Hacettepe Üniversitesi koordinatörlüğünde</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="tel:+903120000000" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="h-3 w-3" /> +90 (312) 000 00 00
            </a>
            <a href="mailto:kayit@yusufdurmusakademi.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="h-3 w-3" /> kayit@yusufdurmusakademi.com
            </a>
          </div>
        </div>
      </div>

      <div className="container-prose flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-cream">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/60 text-gold font-display text-lg shadow-gold">
            YD
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-lg text-cream">
              Yusuf Durmuş Akademi
            </span>
            <span className="eyebrow text-[0.6rem]">
              Bilim &amp; Doğa Kampları
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-cream/80 hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/merkezi-kayit-formu"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-2.5 text-sm font-semibold text-navy-deep shadow-gold hover:-translate-y-0.5 transition-transform"
          >
            Kayıt Ol
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-cream"
          aria-label="Menüyü aç"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-deep border-t border-white/10 animate-fade-in">
          <div className="container-prose py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-cream/90 hover:text-gold"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/merkezi-kayit-formu"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep"
            >
              Kayıt Ol <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-3 pt-4 border-t border-white/10 flex flex-col gap-2 text-xs text-cream/60">
              <a href="tel:+903120000000" className="flex items-center gap-2"><Phone className="h-3 w-3" /> +90 (312) 000 00 00</a>
              <a href="mailto:kayit@yusufdurmusakademi.com" className="flex items-center gap-2"><Mail className="h-3 w-3" /> kayit@yusufdurmusakademi.com</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

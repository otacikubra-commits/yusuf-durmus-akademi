import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/kurumsal", label: "Kurumsal" },
  { to: "/lise-bilim-ve-olimpiyat-kamplari", label: "Lise Kampları" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-deep/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-prose flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-cream">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/60 text-gold font-display text-lg">
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
            className="inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep hover:bg-gold-soft transition-colors"
          >
            Kayıt Ol
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
        <div className="lg:hidden bg-navy-deep border-t border-white/10">
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
              className="mt-2 inline-flex w-fit items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep"
            >
              Kayıt Ol
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

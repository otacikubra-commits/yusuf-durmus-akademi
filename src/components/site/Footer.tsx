import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Award, ShieldCheck, Sparkles, Users, Phone, Mail, MapPin } from "lucide-react";

const trustBadges = [
  { icon: Award, text: "120+ Olimpiyat Madalyası" },
  { icon: Users, text: "5.000+ Mezun Öğrenci" },
  { icon: ShieldCheck, text: "7/24 Güvenli Konaklama" },
  { icon: Sparkles, text: "15+ Yıllık Vizyon" },
];

export function Footer() {
  return (
    <footer className="relative bg-navy-deep text-cream/80 mt-32 grain overflow-hidden">
      {/* Decorative gold glow */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[60%] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
      />

      {/* CTA strip */}
      <div className="relative border-b border-white/10">
        <div className="container-prose py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <span className="eyebrow">Hazır mısınız?</span>
            <h3 className="mt-3 font-display text-3xl md:text-4xl text-cream leading-tight">
              Sınırlı kontenjan. Akademik bir mevsim sizi bekliyor.
            </h3>
          </div>
          <Link to="/merkezi-kayit-formu" className="btn-primary self-start md:self-auto">
            Merkezi Kayıt Formu
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Trust badges */}
      <div className="relative border-b border-white/10">
        <div className="container-prose py-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((b) => (
            <div key={b.text} className="flex items-center gap-3 text-sm text-cream/75">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 text-gold">
                <b.icon className="h-4 w-4" />
              </span>
              {b.text}
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="relative container-prose py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5 max-w-md">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/60 text-gold font-display text-xl">
              YD
            </span>
            <div className="leading-tight">
              <div className="font-display text-xl text-cream">
                Yusuf Durmuş Akademi
              </div>
              <div className="eyebrow text-[0.6rem]">
                Bilim &amp; Doğa Kampları
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-cream/65">
            Prof. Dr. Yusuf Durmuş koordinatörlüğünde; TÜBİTAK olimpiyatlarına
            hazırlanan lise öğrencilerinden, doğayı keşfeden ortaokul
            kâşiflerine kadar Türkiye’nin en kapsamlı yatılı bilim kamplarını
            buluşturuyoruz.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="eyebrow mb-5">Sayfalar</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/kurumsal" className="hover:text-gold transition-colors">Kurumsal</Link></li>
            <li><Link to="/lise-bilim-ve-olimpiyat-kamplari" className="hover:text-gold transition-colors">Lise Kampları</Link></li>
            <li><Link to="/ortaokul-ekoloji-ve-doga-okulu" className="hover:text-gold transition-colors">Doğa Okulu</Link></li>
            <li><Link to="/gurur-tablosu" className="hover:text-gold transition-colors">Gurur Tablosu</Link></li>
            <li><Link to="/merkezi-kayit-formu" className="hover:text-gold transition-colors">Kayıt Formu</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="eyebrow mb-5">İletişim</h4>
          <ul className="space-y-4 text-sm text-cream/70">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
              Hacettepe Üniversitesi, Beytepe Kampüsü, Ankara
            </li>
            <li>
              <a href="mailto:kayit@yusufdurmusakademi.com" className="flex items-start gap-3 hover:text-gold transition-colors">
                <Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                kayit@yusufdurmusakademi.com
              </a>
            </li>
            <li>
              <a href="tel:+903120000000" className="flex items-start gap-3 hover:text-gold transition-colors">
                <Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                +90 (312) 000 00 00
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-prose py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Prof. Dr. Yusuf Durmuş Akademi. Tüm hakları saklıdır.</p>
          <p>Akademik mükemmellik için kurulmuştur — Türkiye.</p>
        </div>
      </div>
    </footer>
  );
}

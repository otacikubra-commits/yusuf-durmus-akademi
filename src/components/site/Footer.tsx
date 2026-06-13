import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-cream/80 mt-32">
      <div className="container-prose py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
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
            Prof. Dr. Yusuf Durmuş koordinatörlüğünde, TÜBİTAK olimpiyatlarına
            hazırlanan lise öğrencilerinden, doğayı keşfeden ortaokul
            kâşiflerine kadar Türkiye’nin en kapsamlı yatılı bilim kamplarını
            buluşturuyoruz.
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Sayfalar</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/kurumsal" className="hover:text-gold">Kurumsal</Link></li>
            <li><Link to="/lise-bilim-ve-olimpiyat-kamplari" className="hover:text-gold">Lise Kampları</Link></li>
            <li><Link to="/ortaokul-ekoloji-ve-doga-okulu" className="hover:text-gold">Doğa Okulu</Link></li>
            <li><Link to="/gurur-tablosu" className="hover:text-gold">Gurur Tablosu</Link></li>
            <li><Link to="/merkezi-kayit-formu" className="hover:text-gold">Kayıt Formu</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">İletişim</h4>
          <ul className="space-y-2 text-sm text-cream/65">
            <li>Hacettepe Üniversitesi, Ankara</li>
            <li>kayit@yusufdurmusakademi.com</li>
            <li>+90 (312) 000 00 00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-prose py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Prof. Dr. Yusuf Durmuş Akademi. Tüm hakları saklıdır.</p>
          <p>Akademik mükemmellik için kurulmuştur — Türkiye.</p>
        </div>
      </div>
    </footer>
  );
}

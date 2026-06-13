import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, ShieldCheck, Sparkles, Users } from "lucide-react";
import heroImg from "../assets/hero.jpg";
import liseImg from "../assets/lise.jpg";
import ortaokulImg from "../assets/ortaokul.jpg";
import profesorImg from "../assets/profesor.jpg";
import { SectionHeader } from "../components/site/SectionHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prof. Dr. Yusuf Durmuş Akademi — Bilim ve Doğa Kampları" },
      {
        name: "description",
        content:
          "Türkiye’nin en kapsamlı yatılı bilim ve doğa kampları. TÜBİTAK olimpiyatlarına hazırlık, ekoloji ve keşif odaklı programlar.",
      },
      {
        property: "og:title",
        content: "Prof. Dr. Yusuf Durmuş Akademi — Bilim ve Doğa Kampları",
      },
      {
        property: "og:description",
        content:
          "Akademik başarıyı vizyonla buluşturan yatılı bilim ve doğa kampları.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const badges = [
  {
    icon: Award,
    title: "%94 Başarı Oranı",
    text: "TÜBİTAK olimpiyatları, tıp ve mühendislik fakültelerinde kanıtlanmış yerleşme başarısı.",
  },
  {
    icon: Sparkles,
    title: "15+ Yıllık Deneyim",
    text: "Türkiye’nin dört bir yanından binlerce öğrenciye bilimi sevdiren köklü vizyon.",
  },
  {
    icon: Users,
    title: "Prof. Dr. Yönetiminde",
    text: "Ulusal ve uluslararası bilim projelerinde jüri ve yürütücü akademik liderlik.",
  },
  {
    icon: ShieldCheck,
    title: "7/24 Güvenli Konaklama",
    text: "Tam zamanlı rehberlik, doktor gözetimi ve tam donanımlı tesis güvencesi.",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-end bg-navy-deep text-cream overflow-hidden">
        <img
          src={heroImg}
          alt="Laboratuvarda mikroskopla çalışan lise öğrencileri ve doğada keşfeden ortaokul öğrencileri"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
          width={1920}
          height={1080}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-navy-deep/40"
          aria-hidden
        />
        <div className="container-prose relative pb-24 pt-40">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-rule" />
            <span className="eyebrow">Elite Bilim Akademisi · Türkiye</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] max-w-5xl">
            Geleceğin bilim insanları,{" "}
            <em className="text-gold not-italic font-normal">burada</em>{" "}
            yetişir.
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-cream/80 leading-relaxed">
            Prof. Dr. Yusuf Durmuş koordinatörlüğünde; TÜBİTAK olimpiyatlarına
            hazırlanan lise öğrencilerinden, doğayı keşfeden ortaokul
            kâşiflerine kadar akademik başarıyı vizyonla buluşturan yatılı
            bilim kampları.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/lise-bilim-ve-olimpiyat-kamplari"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy-deep hover:bg-gold-soft transition-colors"
            >
              Lise Bilim &amp; Olimpiyat Kampları
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/ortaokul-ekoloji-ve-doga-okulu"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream hover:border-gold hover:text-gold transition-colors"
            >
              Ortaokul Doğa Okulunu Keşfet
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST RIBBON */}
      <section className="bg-navy-deep text-cream border-t border-white/10">
        <div className="container-prose py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {badges.map((b) => (
            <div key={b.title} className="flex gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                <b.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl text-cream">{b.title}</h3>
                <p className="mt-1 text-sm text-cream/65 leading-relaxed">
                  {b.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEGMENT CARDS */}
      <section className="py-28 bg-cream">
        <div className="container-prose">
          <SectionHeader
            eyebrow="İki Yaş Grubu, Tek Vizyon"
            title={
              <>
                Her öğrenci için <em className="text-gold not-italic">doğru</em>{" "}
                program.
              </>
            }
            intro="Hedefini zirveye taşımak isteyen lise öğrencileri ve doğayı keşfetmek isteyen ortaokul kâşifleri için iki ayrı kamp programı."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {/* Lise */}
            <article className="group relative overflow-hidden rounded-2xl bg-navy-deep text-cream">
              <div className="absolute inset-0">
                <img
                  src={liseImg}
                  alt="Mikroskop başında çalışan lise öğrencisi"
                  className="h-full w-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                  width={1600}
                  height={1200}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-transparent" />
              </div>
              <div className="relative p-10 lg:p-12 flex flex-col min-h-[460px] justify-end">
                <span className="eyebrow text-gold">Lise · 9-12. Sınıflar</span>
                <h3 className="mt-3 font-display text-4xl leading-tight">
                  Geleceğini zirveye taşımak isteyenler için.
                </h3>
                <p className="mt-4 text-cream/75 text-sm leading-relaxed max-w-md">
                  Yoğunlaştırılmış Biyoloji, Fizik, Kimya ve Matematik
                  programları. TÜBİTAK Bilim Olimpiyatları’na eksiksiz teorik ve
                  laboratuvar hazırlığı.
                </p>
                <Link
                  to="/lise-bilim-ve-olimpiyat-kamplari"
                  className="mt-8 inline-flex items-center gap-2 text-gold hover:text-gold-soft text-sm font-semibold"
                >
                  Lise müfredatını ve kontenjanları gör
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>

            {/* Ortaokul */}
            <article className="group relative overflow-hidden rounded-2xl bg-navy-deep text-cream">
              <div className="absolute inset-0">
                <img
                  src={ortaokulImg}
                  alt="Doğada büyüteçle inceleyen ortaokul öğrencileri"
                  className="h-full w-full object-cover opacity-45 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                  width={1600}
                  height={1200}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/65 to-transparent" />
              </div>
              <div className="relative p-10 lg:p-12 flex flex-col min-h-[460px] justify-end">
                <span className="eyebrow text-gold">
                  Ortaokul · 5-8. Sınıflar
                </span>
                <h3 className="mt-3 font-display text-4xl leading-tight">
                  Doğayı laboratuvara dönüştüren kâşifler için.
                </h3>
                <p className="mt-4 text-cream/75 text-sm leading-relaxed max-w-md">
                  Mikroskop kullanımı, saha gözlemleri ve ekoloji odaklı
                  pratikler. Ekranlardan uzak, doğayla bağ kuran, özgüven
                  artırıcı aktiviteler.
                </p>
                <Link
                  to="/ortaokul-ekoloji-ve-doga-okulu"
                  className="mt-8 inline-flex items-center gap-2 text-gold hover:text-gold-soft text-sm font-semibold"
                >
                  Doğa kampı detaylarını incele
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ACADEMY INTRO */}
      <section className="py-28 bg-cream-soft">
        <div className="container-prose grid gap-14 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 border border-gold/40 rounded-sm" aria-hidden />
            <img
              src={profesorImg}
              alt="Prof. Dr. Yusuf Durmuş"
              className="relative w-full rounded-sm object-cover"
              loading="lazy"
              width={1400}
              height={1600}
            />
          </div>
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Akademi Hakkında"
              title={
                <>
                  Bir ömrü bilimin ve doğanın hizmetine adamış{" "}
                  <em className="text-gold not-italic">bir akademisyen</em>.
                </>
              }
              intro="1967’de Trabzon Araklı’nın elektriksiz bir köyünde başlayan bir hikâye; bugün Hacettepe Üniversitesi’nde Türkiye’nin en başarılı bilim insanlarını yetiştiren bir vizyona dönüştü."
            />
            <ul className="mt-8 space-y-4 text-foreground/80 text-base leading-relaxed">
              <li>
                <span className="text-gold font-semibold">22 yıl</span> TÜBİTAK
                Biyoloji Olimpiyatları Bilim Komitesi üyeliği.
              </li>
              <li>
                <span className="text-gold font-semibold">9</span> TÜBİTAK Doğa
                Eğitimi, <span className="text-gold font-semibold">14</span>{" "}
                BİDEB Öğretmen Eğitimi ve{" "}
                <span className="text-gold font-semibold">4</span> BİDEB Öğrenci
                projesi yürütücülüğü.
              </li>
              <li>
                Gezici Müze ve bilim konferanslarıyla yılda{" "}
                <span className="text-gold font-semibold">30.000+</span> kişiye
                ulaşan akademik vizyon.
              </li>
            </ul>
            <Link
              to="/kurumsal"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy-deep px-7 py-3.5 text-sm font-semibold text-cream hover:bg-navy-soft transition-colors"
            >
              Tam özgeçmiş ve başarılar
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-deep text-cream">
        <div className="container-prose text-center max-w-3xl mx-auto">
          <span className="eyebrow">Başvurular Açıldı</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-cream">
            Sınırlı kontenjan. Akademik yıl bekleyen bir vizyon.
          </h2>
          <p className="mt-5 text-cream/70">
            Çocuğunuz için doğru kampı 4 adımlık merkezi başvuru formumuzla
            saniyeler içinde rezerve edin.
          </p>
          <Link
            to="/merkezi-kayit-formu"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy-deep hover:bg-gold-soft transition-colors"
          >
            Başvuru Formunu Aç
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

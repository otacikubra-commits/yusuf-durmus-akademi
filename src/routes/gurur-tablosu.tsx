import { createFileRoute, Link } from "@tanstack/react-router";
import gururImg from "../assets/gurur.jpg";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import { ArrowRight, Quote, Trophy } from "lucide-react";

export const Route = createFileRoute("/gurur-tablosu")({
  head: () => ({
    meta: [
      { title: "Gurur Tablosu — Başarı Hikayeleri" },
      {
        name: "description",
        content:
          "Olimpiyat madalyaları, üniversite yerleşmeleri, veli ve öğrenci yorumlarıyla akademimizin başarı tablosu.",
      },
      { property: "og:title", content: "Gurur Tablosu — Başarı Hikayeleri" },
      {
        property: "og:description",
        content: "Akademimizin ürettiği bilimsel başarı ve sosyal kanıt.",
      },
      { property: "og:url", content: "/gurur-tablosu" },
    ],
    links: [{ rel: "canonical", href: "/gurur-tablosu" }],
  }),
  component: GururPage,
});

const stats = [
  { n: "120+", label: "Olimpiyat Madalyası" },
  { n: "%94", label: "Üniversite Yerleşme" },
  { n: "5.000+", label: "Yetişen Öğrenci" },
  { n: "30.000+", label: "Yıllık Konferans Katılımcısı" },
];

const testimonials = [
  {
    name: "Ayşe K. — Tıp Öğrencisi Velisi",
    quote:
      "Kızımın TÜBİTAK Biyoloji Olimpiyatları’nda bronz madalya kazanmasında bu kampların payı tartışılmaz. Akademik program kadar disiplinli ortam da çok kıymetli.",
  },
  {
    name: "Mehmet T. — 11. Sınıf Öğrencisi",
    quote:
      "Hayatımda ilk kez ‘öğrenmek’ ile ‘yarışmak’ arasında bir fark olduğunu anladım. Soru analizinde kazandığım hız okula döndüğümde de devam etti.",
  },
  {
    name: "Elif D. — 7. Sınıf Öğrencisi Velisi",
    quote:
      "Telefonsuz iki hafta… İlk başta kabul ettiremedim. Döndüğünde mikroskop almamı isteyen bir çocukla karşılaştım. Tek kelimeyle dönüşüm.",
  },
  {
    name: "Prof. Dr. Selim B. — Hacettepe Üniversitesi",
    quote:
      "Yıllardır gözlemlediğim öğrencilerin, kampa katıldıktan sonraki akademik üretkenliklerindeki sıçrama, programın ciddiyetini açıkça gösteriyor.",
  },
];

const medals = ["Altın", "Gümüş", "Bronz", "Mansiyon"];

function GururPage() {
  return (
    <>
      <PageHero
        eyebrow="Gurur Tablosu"
        title={
          <>
            Madalyalar, başarılar ve{" "}
            <em className="text-gold not-italic">aile hikâyeleri</em>.
          </>
        }
        intro="Akademimizden geçen öğrencilerin uluslararası bilim arenasında ve hayatta yazdığı hikâyeler."
        image={gururImg}
      />

      {/* Stats */}
      <section className="py-20 bg-cream">
        <div className="container-prose grid gap-px bg-border md:grid-cols-4 rounded-sm overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-cream p-10 text-center">
              <div className="font-display text-5xl md:text-6xl text-navy-deep">
                {s.n}
              </div>
              <div className="mt-3 eyebrow text-foreground/60">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Medals */}
      <section className="py-24 bg-navy-deep text-cream">
        <div className="container-prose">
          <SectionHeader
            eyebrow="Olimpiyat Madalyaları"
            title={
              <span className="text-cream">
                Ulusal ve uluslararası arenada{" "}
                <em className="text-gold not-italic">kazanılan dereceler</em>.
              </span>
            }
          />
          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {medals.map((m) => (
              <div
                key={m}
                className="border border-gold/30 rounded-sm p-8 text-center bg-white/[0.02]"
              >
                <Trophy className="mx-auto h-8 w-8 text-gold" />
                <div className="mt-4 font-display text-2xl">{m}</div>
                <div className="mt-1 text-xs text-cream/55 uppercase tracking-wider">
                  Madalyalar
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-cream">
        <div className="container-prose">
          <SectionHeader
            eyebrow="Veli & Öğrenci Yorumları"
            title="Kampı yaşayanların sözleriyle."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="relative bg-cream-soft rounded-sm p-10 border border-border"
              >
                <Quote className="h-6 w-6 text-gold" />
                <blockquote className="mt-4 font-display text-2xl leading-snug text-navy-deep">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-foreground/65 uppercase tracking-wider">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              to="/merkezi-kayit-formu"
              className="inline-flex items-center gap-2 rounded-full bg-navy-deep px-7 py-3.5 text-sm font-semibold text-cream hover:bg-navy-soft"
            >
              Sıradaki başarı hikâyesi sizin olsun
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

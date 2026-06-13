import { createFileRoute, Link } from "@tanstack/react-router";
import liseImg from "../assets/lise.jpg";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/lise-bilim-ve-olimpiyat-kamplari")({
  head: () => ({
    meta: [
      { title: "Lise Bilim & TÜBİTAK Olimpiyat Kampları" },
      {
        name: "description",
        content:
          "9-12. sınıf öğrencileri için yoğunlaştırılmış Biyoloji, Fizik, Kimya ve Matematik programları. TÜBİTAK olimpiyatlarına eksiksiz teorik ve laboratuvar hazırlığı.",
      },
      {
        property: "og:title",
        content: "Lise Bilim & TÜBİTAK Olimpiyat Kampları",
      },
      {
        property: "og:description",
        content:
          "Geleceğin bilim insanları ve Türkiye dereceleri burada yetişiyor.",
      },
      { property: "og:url", content: "/lise-bilim-ve-olimpiyat-kamplari" },
    ],
    links: [
      { rel: "canonical", href: "/lise-bilim-ve-olimpiyat-kamplari" },
    ],
  }),
  component: LisePage,
});

const outcomes = [
  "TÜBİTAK Olimpiyat altyapısı ve soru analiz yeteneği.",
  "İleri düzey laboratuvar ve mikroskop deneyimi.",
  "YKS (TYT-AYT) Fen-Matematik sınavlarında mutlak üstünlük ve hız.",
  "Hedefi yüksek, elit bir akran grubuyla çalışma fırsatı.",
];

const branches = [
  {
    title: "İleri Düzey Biyoloji",
    topics: [
      "Sitoloji ve Moleküler Biyoloji (enzim kinetiği, hücresel solunum)",
      "Genetik ve Biyoteknoloji (DNA replikasyonu, rekombinant DNA)",
      "Bitki Anatomisi ve Fizyolojisi",
      "İnsan ve Hayvan Fizyolojisi — tıp fakültesi düzeyinde sistem analizi",
      "Mikroskop ve diseksiyon laboratuvar pratikleri",
    ],
  },
  {
    title: "İleri Düzey Fizik",
    topics: [
      "İleri Mekanik (vektörler, Newton yasaları, iş-enerji)",
      "Dönme Mekaniği ve Kütle Çekimi (açısal momentum, Kepler)",
      "Elektromanyetizma (Coulomb, Gauss, indüksiyon)",
      "Termodinamik ve Optik",
    ],
  },
  {
    title: "İleri Düzey Kimya",
    topics: [
      "Atomun Kuantum Modeli ve Periyodik Özellikler (VSEPR)",
      "Gazlar ve Faz Diyagramları",
      "Kimyasal Termodinamik ve Kinetik (Gibbs serbest enerjisi)",
      "Kimyasal Denge ve Elektrokimya (Nernst denklemi)",
      "Organik Kimyaya Giriş",
    ],
  },
  {
    title: "Olimpiyat & İleri Matematik",
    topics: [
      "Sonlu Matematik ve Kombinatorik (güvercin yuvası, graf teorisi)",
      "Sayılar Teorisi (modüler aritmetik, Diofant denklemleri)",
      "Gelişmiş Geometri (Menelaus ve Ceva teoremleri)",
      "Fonksiyonlar ve analiz eğilimleri",
    ],
  },
];

const schedule = [
  ["08:00 – 09:00", "Açık Büfe Kahvaltı"],
  ["09:00 – 12:30", "1. Blok Dersler — Teorik & Olimpiyat Soru Analizi"],
  ["12:30 – 13:30", "Öğle Yemeği ve Dinlenme"],
  ["13:30 – 16:30", "2. Blok Dersler — Laboratuvar, Deney, Uygulama"],
  ["16:30 – 18:30", "Spor & Sosyal Aktiviteler (voleybol, akıl oyunları, doğa yürüyüşü)"],
  ["18:30 – 19:30", "Akşam Yemeği"],
  ["19:30 – 21:30", "Gece Etütü — Bireysel Soru Çözümü & Soru-Cevap"],
  ["21:30 – 22:30", "Günün Değerlendirmesi ve Serbest Zaman"],
];

function LisePage() {
  return (
    <>
      <PageHero
        eyebrow="Lise · 9-12. Sınıflar"
        title={
          <>
            Geleceğin bilim insanları ve{" "}
            <em className="text-gold not-italic">Türkiye dereceleri</em> burada
            yetişir.
          </>
        }
        intro="Yoğunlaştırılmış branş eğitimi, ileri düzey laboratuvar ve TÜBİTAK olimpiyat hazırlığını tek bir yatılı programda buluşturuyoruz."
        image={liseImg}
      />

      {/* Outcomes */}
      <section className="py-28 bg-cream">
        <div className="container-prose grid gap-14 lg:grid-cols-2">
          <SectionHeader
            eyebrow="Kazanımlar"
            title="Kamp sonunda öğrencimiz ne kazanır?"
          />
          <ul className="space-y-5">
            {outcomes.map((o) => (
              <li key={o} className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-gold" />
                <span className="text-lg text-foreground/85 leading-snug">
                  {o}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Branches */}
      <section className="py-28 bg-cream-soft">
        <div className="container-prose">
          <SectionHeader
            eyebrow="Branş Ders İçerikleri"
            title="Tıp fakültesi seviyesinde dört temel branş."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {branches.map((b) => (
              <article
                key={b.title}
                className="bg-cream rounded-sm p-10 border border-border hover:border-gold/60 transition-colors"
              >
                <h3 className="font-display text-2xl text-navy-deep">
                  {b.title}
                </h3>
                <span className="gold-rule mt-4 inline-block" />
                <ul className="mt-6 space-y-3 text-sm text-foreground/80 leading-relaxed">
                  {b.topics.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 rounded-full bg-gold shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-28 bg-navy-deep text-cream">
        <div className="container-prose">
          <SectionHeader
            eyebrow="Örnek Günlük Program"
            title={
              <span className="text-cream">
                Disiplin, derinlik ve{" "}
                <em className="text-gold not-italic">dengeli</em> bir ritim.
              </span>
            }
          />
          <div className="mt-14 overflow-hidden rounded-sm border border-white/10">
            {schedule.map(([time, item], i) => (
              <div
                key={time}
                className={`flex flex-col md:flex-row md:items-center gap-2 md:gap-10 px-6 md:px-10 py-5 ${
                  i % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"
                }`}
              >
                <span className="font-display text-2xl text-gold md:w-48 shrink-0">
                  {time}
                </span>
                <span className="text-cream/85">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/merkezi-kayit-formu"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy-deep hover:bg-gold-soft"
            >
              Lise Kampına Başvur <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

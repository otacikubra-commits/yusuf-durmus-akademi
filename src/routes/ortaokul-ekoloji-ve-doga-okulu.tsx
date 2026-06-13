import { createFileRoute, Link } from "@tanstack/react-router";
import ortaokulImg from "../assets/ortaokul.jpg";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/ortaokul-ekoloji-ve-doga-okulu")({
  head: () => ({
    meta: [
      { title: "Ortaokul Ekoloji & Doğa Okulu" },
      {
        name: "description",
        content:
          "5-8. sınıf öğrencileri için ekran detoksu, saha gözlemleri ve mikroskop atölyeleriyle özgüven artırıcı doğa kampı programı.",
      },
      { property: "og:title", content: "Ortaokul Ekoloji & Doğa Okulu" },
      {
        property: "og:description",
        content: "Doğayı laboratuvara, merakı keşfe dönüştürüyoruz.",
      },
      { property: "og:url", content: "/ortaokul-ekoloji-ve-doga-okulu" },
    ],
    links: [{ rel: "canonical", href: "/ortaokul-ekoloji-ve-doga-okulu" }],
  }),
  component: OrtaokulPage,
});

const outcomes = [
  "Ekranlardan tamamen uzak, gerçek bir dijital detoks dönemi.",
  "Araziden toplanan örneklerle mikroskop başında inceleme yetisi.",
  "Ormanın kalbinde yaşayarak öğrenilen kalıcı çevre bilinci.",
  "Evden uzakta problem çözebilen çocuklarda katlanan özgüven.",
];

const workshops = [
  {
    n: "01",
    title: "Mikro Dünyanın Keşfi",
    text: "Göletlerden su, ormandan bitki lifleri toplayıp laboratuvar çadırında amipleri ve hücre yapılarını bizzat inceleme.",
  },
  {
    n: "02",
    title: "Oryantiring — Doğada Yön Bulma",
    text: "Pusula ve harita yardımıyla doğanın içine gizlenmiş şifreleri çözerek hedefe ulaşma taktikleri.",
  },
  {
    n: "03",
    title: "Gece Gözlemleri ve Gökyüzü Kâşifliği",
    text: "Teleskoplarla Ay kraterleri, gezegenler ve takımyıldızları; gece faal canlıların seslerini dinleme.",
  },
  {
    n: "04",
    title: "Ekoloji ve Biyoçeşitlilik Avı",
    text: "Kuş gözlem dürbünleriyle gökyüzünü tarama, endemik bitkileri keşfetme ve ekosistem dengesini yerinde kavrama.",
  },
];

const faqs = [
  {
    q: "Çocuğum evden ilk kez ayrılacak, yapabilir mi?",
    a: "Her 6-8 öğrenciye bir deneyimli grup lideri öğretmen düşer. Yemekten uyku düzenine kadar her an yanlarındadırlar.",
  },
  {
    q: "Güvenlik ve sağlık önlemleri nelerdir?",
    a: "Kamp alanları dışarıya tamamen kapalı, korunaklı tesislerdir. İlk yardım personeli ve acil durum aracı 7/24 hazır bekler.",
  },
  {
    q: "Aileli kamplar nasıl oluyor?",
    a: "Belirli dönemlerde açılan ‘Anne-Baba-Çocuk’ kamplarında konaklama aileye özel odalarda/çadırlarda yapılır, etkinliklere ebeveynler de katılır.",
  },
];

function OrtaokulPage() {
  return (
    <>
      <PageHero
        eyebrow="Ortaokul · 5-8. Sınıflar"
        title={
          <>
            Doğayı laboratuvara, merakı{" "}
            <em className="text-gold not-italic">keşfe</em> dönüştürüyoruz.
          </>
        }
        intro="Ekran detoksu, saha gözlemleri ve mikroskop pratikleriyle çocuklarınızın özgüvenini büyüten yatılı doğa okulu."
        image={ortaokulImg}
      />

      {/* Outcomes */}
      <section className="py-28 bg-cream">
        <div className="container-prose grid gap-14 lg:grid-cols-2">
          <SectionHeader eyebrow="Kazanımlar" title="Kamp sonunda kazanılanlar." />
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

      {/* Workshops */}
      <section className="py-28 bg-cream-soft">
        <div className="container-prose">
          <SectionHeader
            eyebrow="Macera Temalı Atölyeler"
            title="Dört atölye, sayısız keşif anı."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {workshops.map((w) => (
              <article
                key={w.title}
                className="group relative bg-cream rounded-sm p-10 border border-border hover:border-gold/60 transition-all"
              >
                <span className="font-display text-6xl text-gold/30 group-hover:text-gold/60 transition-colors">
                  {w.n}
                </span>
                <h3 className="mt-3 font-display text-2xl text-navy-deep">
                  {w.title}
                </h3>
                <p className="mt-4 text-foreground/75 leading-relaxed">
                  {w.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-navy-deep text-cream">
        <div className="container-prose grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Veliler İçin SSS"
              title={
                <span className="text-cream">
                  Aklınızdaki ilk üç soru —{" "}
                  <em className="text-gold not-italic">net cevaplarla</em>.
                </span>
              }
              intro="Kamp sürecine ilişkin daha fazla sorunuz varsa bizimle iletişime geçmekten çekinmeyin."
            />
          </div>
          <div className="lg:col-span-7 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                  <span className="font-display text-xl text-cream group-open:text-gold transition-colors">
                    {f.q}
                  </span>
                  <span className="mt-1 text-gold text-2xl leading-none group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-cream/75 leading-relaxed pr-12">
                  {f.a}
                </p>
              </details>
            ))}

            <div className="pt-10">
              <Link
                to="/merkezi-kayit-formu"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy-deep hover:bg-gold-soft"
              >
                Doğa Kampına Başvur <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import profesorImg from "../assets/profesor.jpg";
import { PageHero } from "../components/site/PageHero";
import { SectionHeader } from "../components/site/SectionHeader";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/kurumsal")({
  head: () => ({
    meta: [
      { title: "Kurumsal — Prof. Dr. Yusuf Durmuş" },
      {
        name: "description",
        content:
          "Prof. Dr. Yusuf Durmuş’un biyografisi, TÜBİTAK olimpiyat deneyimi, projeleri ve akademinin neden tercih edildiğini gösteren referanslar.",
      },
      { property: "og:title", content: "Kurumsal — Prof. Dr. Yusuf Durmuş" },
      {
        property: "og:description",
        content:
          "Akademik güvenilirlik ve doğa sevgisiyle geçen bir ömrün hikâyesi.",
      },
      { property: "og:url", content: "/kurumsal" },
    ],
    links: [{ rel: "canonical", href: "/kurumsal" }],
  }),
  component: Kurumsal,
});

const reasons = [
  {
    title: "TÜBİTAK Olimpiyat Komitelerinde 22 Yıllık Deneyim",
    text: "1993’ten 2015’e kadar aralıksız TÜBİTAK Biyoloji Olimpiyatları Bilim Komitesi üyeliği. 2000 yılında Uluslararası Biyoloji Olimpiyatları organizasyon komitesinde görev.",
  },
  {
    title: "Madalyalı Öğrenciler ve Referans Gücü",
    text: "Eğittiği öğrenciler ulusal ve uluslararası olimpiyatlarda altın, gümüş ve bronz madalyalar kazandı; bugün dünyanın saygın üniversitelerinde kürsü başkanı ve seçkin fakültelerde hekim.",
  },
  {
    title: "Türkiye’de Alanında En Çok Proje Yapan Akademisyen",
    text: "9 adet TÜBİTAK Doğa Eğitimi, 14 adet BİDEB Öğretmen Eğitimi ve 4 adet BİDEB Öğrenci Projesi yürütücülüğü.",
  },
  {
    title: "Gezici Müze & Konferanslar",
    text: "Hacettepe Üniversitesi Zooloji Müzesi’nin kurucularındandır. Kendine ait Gezici Müze ile yılda 30.000+ kişiye bilim konferansları verir. TRT’nin “Renklerin Dansı” ve “Akrep” belgesellerinde bilimsel danışmanlık.",
  },
];

const schools = [
  "Burdur Ercan Akın Fen Lisesi",
  "İzmir Bahçeşehir Koleji (50. Yıl & Güzelbahçe)",
  "Isparta TED Koleji",
  "Balıkesir Fatma Emin Kutvar Anadolu Lisesi",
  "İzmir İSTEK Vakfı Okulları",
  "Balıkesir AÇI Koleji",
  "Ankara ASO Mesleki ve Teknik Anadolu Lisesi",
  "Eskişehir Bahçeşehir Koleji",
];

function Kurumsal() {
  return (
    <>
      <PageHero
        eyebrow="Kurumsal"
        title={
          <>
            Akademik güvenilirlik ve doğa sevgisiyle geçen{" "}
            <em className="text-gold not-italic">bir ömür</em>.
          </>
        }
        intro="Prof. Dr. Yusuf Durmuş — Türkiye’nin en köklü bilim eğitimcilerinden birinin hikâyesi ve akademinin kuruluş vizyonu."
        image={profesorImg}
      />

      {/* Biyografi */}
      <section className="py-28 bg-cream">
        <div className="container-prose grid gap-14 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="relative">
              <div className="absolute -inset-4 border border-gold/40" aria-hidden />
              <img
                src={profesorImg}
                alt="Prof. Dr. Yusuf Durmuş portresi"
                className="relative w-full object-cover"
                loading="lazy"
                width={1400}
                height={1600}
              />
            </div>
            <div className="mt-6 text-sm text-muted-foreground italic">
              “En büyük ve kalıcı yatırım, insana yapılan yatırımdır.”
            </div>
          </aside>
          <div className="lg:col-span-8">
            <SectionHeader
              eyebrow="Biyografi"
              title="Bir Anadolu çocuğundan Hacettepe akademisyenine."
            />
            <div className="mt-8 space-y-6 text-foreground/85 text-lg leading-[1.8]">
              <p>
                1967 yılında Trabzon’un Araklı ilçesinde, elektrik olmayan bir
                köyde, gaz lambasının ışığında başlayan bir eğitim yolculuğu…
                İlkokul ve ortaokula her gün kara lastikleriyle 5 kilometreden
                fazla yürüyerek giden, okul dışındaki zamanlarında ise ailesine
                yardım edip inek otlatan bir Anadolu çocuğunun, bugün
                Türkiye’nin en başarılı bilim insanlarını yetiştiren bir
                Hacettepe Üniversitesi akademisyenine dönüşmesinin hikâyesi.
              </p>
              <p>
                Atatürk Üniversitesi Eğitim Fakültesi Biyoloji Bölümü’nden
                mezun olan ve lisansüstü eğitimini Gazi Üniversitesi’nde
                tamamlayan Prof. Dr. Yusuf Durmuş, 30 yılı aşkın akademik
                hayatı boyunca <em>“en büyük ve kalıcı yatırımın insana
                yapılan yatırım olduğu”</em> inancıyla hareket etmiştir.
                Kendisi evli ve iki çocuk babasıdır; çocuklarından biri Uzman
                Diş Hekimi, diğeri ise Tıp Doktorudur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-28 bg-cream-soft">
        <div className="container-prose">
          <SectionHeader
            eyebrow="Neden Bu Kampları Seçmelisiniz?"
            title="Bilimsel mükemmellik, kanıtlanmış referans."
          />
          <div className="mt-16 grid gap-px bg-border lg:grid-cols-2 rounded-sm overflow-hidden">
            {reasons.map((r, i) => (
              <div key={r.title} className="bg-cream p-10 flex gap-6">
                <span className="font-display text-5xl text-gold leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-navy-deep">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-foreground/75 leading-relaxed">
                    {r.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <section id="referanslar" className="py-28 bg-navy-deep text-cream">
        <div className="container-prose">
          <SectionHeader
            eyebrow="Referans Kurumlar"
            title={
              <span className="text-cream">
                Türkiye’nin{" "}
                <em className="text-gold not-italic">seçkin okullarında</em>{" "}
                konferans ve saha çalışmaları.
              </span>
            }
          />
          <ul className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 rounded-sm overflow-hidden">
            {schools.map((s) => (
              <li
                key={s}
                className="bg-navy-deep px-8 py-6 flex items-center gap-4 text-cream/85"
              >
                <span className="h-2 w-2 rounded-full bg-gold" />
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-16 text-center">
            <Link
              to="/merkezi-kayit-formu"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy-deep hover:bg-gold-soft"
            >
              Kamp Başvurusu Yap <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

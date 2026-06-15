import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Award, ShieldCheck, Sparkles, Users } from "lucide-react";
import heroImg from "../assets/hero.jpg";
import liseImg from "../assets/lise.jpg";
import ortaokulImg from "../assets/ortaokul.jpg";
import profesorImg from "../assets/profesor.jpg";
import gururImg from "../assets/gurur.jpg";
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
  { icon: Award, title: "%94", text: "TÜBİTAK ve üniversite yerleşme oranı" },
  { icon: Sparkles, title: "15+ Yıl", text: "Bilimi sevdiren köklü vizyon" },
  { icon: Users, title: "Prof. Dr.", text: "Akademik yönetim ve müfredat" },
  { icon: ShieldCheck, title: "7/24", text: "Güvenli konaklama ve sağlık" },
];

function Index() {
  return (
    <>
      {/* HERO — büyük tipografi, az metin, layered gradient */}
      <section className="relative min-h-[100vh] flex items-end bg-navy-deep text-cream overflow-hidden grain">
        <img
          src={heroImg}
          alt="Bilim ve doğa kamplarından sahneler"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          width={1920}
          height={1080}
        />
        {/* Vignette + warm gold glow */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-navy-deep/40"
        />
        <div
          aria-hidden
          className="absolute -bottom-40 left-1/4 h-[40rem] w-[40rem] rounded-full opacity-25 blur-[120px]"
          style={{ background: "var(--gradient-gold)" }}
        />
        <div
          aria-hidden
          className="absolute top-0 right-0 h-[30rem] w-[30rem] rounded-full opacity-30 blur-[120px]"
          style={{ background: "radial-gradient(circle, oklch(0.38 0.06 258 / 0.8), transparent 70%)" }}
        />

        <div className="container-prose relative pb-28 pt-44">
          <div className="reveal flex items-center gap-3 mb-8">
            <span className="gold-rule" />
            <span className="eyebrow">Elite Bilim Akademisi · Türkiye</span>
          </div>
          <h1 className="reveal font-display text-[3.2rem] sm:text-7xl lg:text-[7.5rem] leading-[0.98] tracking-[-0.025em] max-w-6xl">
            Geleceğin bilim insanları{" "}
            <em className="text-gold not-italic font-normal italic">burada</em>{" "}
            yetişir.
          </h1>
          <div className="reveal mt-10 flex flex-wrap items-center gap-x-12 gap-y-6">
            <p className="max-w-md text-base md:text-lg text-cream/75 leading-[1.7]">
              Hacettepe Üniversitesi koordinatörlüğünde, akademik başarıyı
              vizyonla buluşturan yatılı bilim kampları.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/lise-bilim-ve-olimpiyat-kamplari" className="btn-primary group">
                Lise Kamplarını Keşfet
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/ortaokul-ekoloji-ve-doga-okulu" className="btn-ghost">
                Doğa Okulu
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/40 text-[10px] tracking-[0.4em] uppercase flex flex-col items-center gap-2">
          <span className="h-10 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
          Aşağı Kaydır
        </div>
      </section>

      {/* TRUST RIBBON */}
      <section className="relative bg-navy-deep text-cream border-t border-white/10">
        <div className="container-prose py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {badges.map((b) => (
            <div key={b.title} className="reveal flex gap-5 group">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold/40 text-gold group-hover:bg-gold/10 transition-colors">
                <b.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-3xl text-cream leading-none">{b.title}</h3>
                <p className="mt-2 text-sm text-cream/65 leading-relaxed">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEGMENT CARDS — büyük görseller, kart yerine sahne */}
      <section className="py-32 bg-cream">
        <div className="container-prose">
          <SectionHeader
            eyebrow="İki Yaş Grubu, Tek Vizyon"
            title={
              <>
                Her öğrenci için <em className="text-gold not-italic">doğru</em>{" "}
                program.
              </>
            }
            intro="Hedefini zirveye taşımak isteyen lise öğrencileri ve doğayı keşfetmek isteyen ortaokul kâşifleri için iki ayrı yatılı program."
          />

          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            {/* Lise */}
            <article className="reveal group relative overflow-hidden rounded-sm bg-navy-deep text-cream shadow-elegant">
              <div className="absolute inset-0">
                <img
                  src={liseImg}
                  alt="Mikroskop başında çalışan lise öğrencisi"
                  className="h-full w-full object-cover opacity-55 group-hover:opacity-65 group-hover:scale-[1.04] transition-all duration-[1200ms] ease-out"
                  loading="lazy"
                  width={1600}
                  height={1200}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/10" />
              </div>
              <div className="relative p-10 lg:p-14 flex flex-col min-h-[560px] justify-end">
                <span className="eyebrow text-gold">Lise · 9-12. Sınıflar</span>
                <h3 className="mt-4 font-display text-4xl lg:text-5xl leading-[1.05] tracking-[-0.015em]">
                  Geleceğini zirveye taşımak isteyenler.
                </h3>
                <p className="mt-5 text-cream/75 text-base leading-[1.7] max-w-md">
                  Biyoloji, Fizik, Kimya ve Matematik. TÜBİTAK Bilim
                  Olimpiyatları’na eksiksiz teorik ve laboratuvar hazırlığı.
                </p>
                <Link
                  to="/lise-bilim-ve-olimpiyat-kamplari"
                  className="mt-10 inline-flex items-center gap-2 link-gold text-sm font-semibold uppercase tracking-[0.18em]"
                >
                  Müfredatı Gör
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>

            {/* Ortaokul */}
            <article className="reveal group relative overflow-hidden rounded-sm bg-navy-deep text-cream shadow-elegant">
              <div className="absolute inset-0">
                <img
                  src={ortaokulImg}
                  alt="Doğada büyüteçle inceleyen ortaokul öğrencileri"
                  className="h-full w-full object-cover opacity-55 group-hover:opacity-65 group-hover:scale-[1.04] transition-all duration-[1200ms] ease-out"
                  loading="lazy"
                  width={1600}
                  height={1200}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/65 to-navy-deep/10" />
              </div>
              <div className="relative p-10 lg:p-14 flex flex-col min-h-[560px] justify-end">
                <span className="eyebrow text-gold">Ortaokul · 5-8. Sınıflar</span>
                <h3 className="mt-4 font-display text-4xl lg:text-5xl leading-[1.05] tracking-[-0.015em]">
                  Doğayı laboratuvara dönüştüren kâşifler.
                </h3>
                <p className="mt-5 text-cream/75 text-base leading-[1.7] max-w-md">
                  Mikroskop atölyeleri, saha gözlemleri, ekoloji pratikleri.
                  Ekranlardan uzak, özgüven artırıcı bir doğa okulu.
                </p>
                <Link
                  to="/ortaokul-ekoloji-ve-doga-okulu"
                  className="mt-10 inline-flex items-center gap-2 link-gold text-sm font-semibold uppercase tracking-[0.18em]"
                >
                  Doğa Kampını İncele
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* EĞİTİM ŞERİDİ — seçkin process strip */}
      <section className="py-28 bg-cream-soft border-y border-border/60">
        <div className="container-prose">
          <SectionHeader
            eyebrow="Eğitim Süreci"
            title={
              <>
                Disiplinli bir gün, <em className="text-gold not-italic">premium</em> bir ritim.
              </>
            }
          />
          <ol className="mt-16 grid gap-px bg-border md:grid-cols-4 rounded-sm overflow-hidden">
            {[
              { n: "01", t: "Sabah Etüdü", d: "Teorik ders blokları ve olimpiyat soru analizi." },
              { n: "02", t: "Laboratuvar", d: "İleri mikroskop, deney ve veri analizi pratikleri." },
              { n: "03", t: "Saha & Spor", d: "Doğa yürüyüşü, voleybol, akıl oyunları." },
              { n: "04", t: "Gece Etüdü", d: "Birebir mentor desteği ve serbest çalışma." },
            ].map((s) => (
              <li key={s.n} className="reveal bg-cream p-10 group">
                <span className="font-display text-5xl text-gold/40 group-hover:text-gold transition-colors">{s.n}</span>
                <h3 className="mt-4 font-display text-2xl text-navy-deep">{s.t}</h3>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CASE STUDY — veri + hikaye + görsel */}
      <section className="py-32 bg-cream">
        <div className="container-prose">
          <SectionHeader
            eyebrow="Başarı Hikâyesi"
            title={
              <>
                Bir madalyanın <em className="text-gold not-italic">arkasındaki</em> iki yaz.
              </>
            }
          />
          <div className="mt-16 grid gap-12 lg:grid-cols-12 items-center">
            <div className="reveal lg:col-span-7 relative">
              <div className="absolute -inset-3 border border-gold/40" aria-hidden />
              <img
                src={gururImg}
                alt="TÜBİTAK Olimpiyatı'nda madalya alan öğrenci"
                className="relative w-full object-cover shadow-elegant"
                loading="lazy"
                width={1600}
                height={1100}
              />
            </div>
            <div className="reveal lg:col-span-5 space-y-8">
              <blockquote className="font-display text-2xl md:text-3xl leading-[1.25] text-navy-deep tracking-[-0.01em]">
                “İlk yaz mikroskobu öğrendim, ikinci yaz Türkiye derecesine
                yürüdüm. Hocaların hem bilime hem bana inandığını hissettim.”
              </blockquote>
              <div className="text-xs uppercase tracking-[0.22em] text-foreground/55">
                Zeynep A. — TÜBİTAK Biyoloji Olimpiyatı Bronz Madalya
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                {[
                  { n: "2", l: "Yaz Programı" },
                  { n: "186", l: "Lab Saati" },
                  { n: "1", l: "Madalya" },
                ].map((m) => (
                  <div key={m.l}>
                    <div className="font-display text-4xl text-gold leading-none">{m.n}</div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-foreground/55">{m.l}</div>
                  </div>
                ))}
              </div>
              <Link to="/gurur-tablosu" className="inline-flex items-center gap-2 link-gold text-sm font-semibold uppercase tracking-[0.18em]">
                Tüm Başarı Hikâyeleri <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMY INTRO */}
      <section className="py-32 bg-cream-soft">
        <div className="container-prose grid gap-16 lg:grid-cols-12 items-center">
          <div className="reveal lg:col-span-5 relative">
            <div className="absolute -inset-5 border border-gold/40" aria-hidden />
            <img
              src={profesorImg}
              alt="Prof. Dr. Yusuf Durmuş"
              className="relative w-full object-cover shadow-elegant"
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
                  Bir ömrü bilime adamış{" "}
                  <em className="text-gold not-italic">bir akademisyen</em>.
                </>
              }
              intro="1967’de Trabzon Araklı’nın elektriksiz bir köyünde başlayan hikâye; bugün Hacettepe Üniversitesi’nde Türkiye’nin en başarılı bilim insanlarını yetiştiren bir vizyona dönüştü."
            />
            <ul className="reveal mt-10 space-y-5 text-foreground/85 text-base md:text-lg leading-[1.8]">
              <li>
                <span className="text-gold font-semibold">22 yıl</span> TÜBİTAK
                Biyoloji Olimpiyatları Bilim Komitesi üyeliği.
              </li>
              <li>
                <span className="text-gold font-semibold">9</span> Doğa Eğitimi,{" "}
                <span className="text-gold font-semibold">14</span> Öğretmen ve{" "}
                <span className="text-gold font-semibold">4</span> Öğrenci
                projesi yürütücülüğü.
              </li>
              <li>
                Gezici Müze ve konferanslarla yılda{" "}
                <span className="text-gold font-semibold">30.000+</span> kişiye
                ulaşan akademik vizyon.
              </li>
            </ul>
            <Link to="/kurumsal" className="mt-12 inline-flex items-center gap-2 rounded-full bg-navy-deep px-8 py-4 text-sm font-semibold text-cream hover:bg-navy-soft hover:-translate-y-0.5 shadow-elegant transition-all">
              Tam Özgeçmiş ve Başarılar
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-28 bg-navy-deep text-cream overflow-hidden grain">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "var(--gradient-navy-radial)" }}
        />
        <div
          aria-hidden
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 h-80 w-[70%] rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-gold)" }}
        />
        <div className="relative container-prose text-center max-w-3xl mx-auto">
          <span className="eyebrow">Başvurular Açıldı</span>
          <h2 className="reveal mt-5 font-display text-4xl md:text-6xl text-cream leading-[1.05] tracking-[-0.02em]">
            Sınırlı kontenjan. Akademik bir mevsim sizi bekliyor.
          </h2>
          <p className="reveal mt-6 text-cream/70 text-lg">
            4 adımlık merkezi başvuru formuyla çocuğunuz için doğru kampı
            saniyeler içinde rezerve edin.
          </p>
          <Link to="/merkezi-kayit-formu" className="btn-primary mt-12">
            Başvuru Formunu Aç
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

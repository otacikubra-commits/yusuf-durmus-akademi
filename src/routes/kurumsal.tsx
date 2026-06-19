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

      {/* Selamlama */}
      <section className="py-24 bg-cream">
        <div className="container-prose">
          <div className="reveal max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-navy-deep leading-tight">
              Yusuf Durmuş Kimdir?
            </h2>
            <p className="mt-8 text-xl md:text-2xl text-foreground/80 leading-relaxed font-display italic">
              "Saygıdeğer Öğretmen Arkadaşlarım, Sevgili Öğrenciler, Veliler ve Sayfa Ziyaretçileri,"
            </p>
          </div>
        </div>
      </section>

      {/* Biyografi — tüm bölümler */}
      <section className="pb-24 bg-cream">
        <div className="container-prose grid gap-14 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
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
              <div className="mt-6 text-sm text-muted-foreground italic text-center">
                "En büyük ve kalıcı yatırım, insana yapılan yatırımdır."
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-20">
            {/* Bölüm 1: İlk Yıllar */}
            <div className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <span className="gold-rule" />
                <span className="eyebrow">Biyografi</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-navy-deep leading-tight mb-8">
                İlk Yıllar ve Eğitim Hayatı
              </h3>
              <div className="space-y-6 text-foreground/85 text-lg leading-[1.8]">
                <p>
                  1967 yılında Trabzon ili, Araklı ilçesi, Değirmencik köyünde doğdum. İlkokul ve ortaöğrenimimi, henüz elektrik olmayan köyümde, gaz lambası ışığında tamamladım. Okula gidebilmek için her gün 5 kilometreden fazla yolu kara lastiklerimle yürüyerek katettim; okul dışındaki zamanlarımda ise inek otlatıp köy işlerine yardım ettim. Lise hayatımı Araklı'da, arkadaşlarımla birlikte bir odada kalıp kendi yemeğimizi yaparak okudum ve hafta sonları yine köyüme dönerek aileme destek oldum.
                </p>
                <p>
                  Bu zorlu ama değerli şartların ardından, Atatürk Üniversitesi Eğitim Fakültesi Biyoloji Bölümü'nü bitirdim. Lisansüstü eğitimimi ise Gazi Üniversitesi'nde tamamladım.
                </p>
                <div className="bg-cream-soft border-l-4 border-gold p-6 rounded-r-md">
                  <p className="text-foreground/80">
                    <strong>Eşim:</strong> Seval Durmuş (Öğretmen)
                  </p>
                  <p className="text-foreground/80 mt-2">
                    <strong>Çocuklarım:</strong> Uzman Diş Doktoru Duygu Durmuş (Alkan) ve Doktor Ayşe Deniz Durmuş.
                  </p>
                </div>
              </div>
            </div>

            {/* Bölüm 2: Akademik Kariyer */}
            <div className="reveal">
              <h3 className="font-display text-3xl md:text-4xl text-navy-deep leading-tight mb-8">
                Akademik ve Mesleki Kariyer
              </h3>
              <div className="space-y-6 text-foreground/85 text-lg leading-[1.8]">
                <p>
                  Halen Hacettepe Üniversitesi Biyoloji Bölümü'nde Öğretim Görevlisi olarak görev yapmaktayım. 30 yıllık akademik hayatım boyunca kesintisiz olarak eğitim ve araştırma faaliyetlerinde bulundum. Meslek hayatım boyunca birçok bilimsel araştırma projesinde görev aldım, çok sayıda bilimsel makale ve kitap bölümü yazdım. Hiçbir siyasi partiye üye değilim.
                </p>
                <p>
                  Yürüttüğüm birbirinden farklı çalışmalarda, en kalıcı yatırımın insana yapılan yatırım olduğunu bizzat yaşayarak öğrendim. Sivil toplum kuruluşlarında uzun yıllar yönetim kurulu üyesi ve başkan olarak görev aldım. Ayrıca Hacettepe Beytepe İlköğretim Okulu'nun yapılandırılması ve eğitiminin geliştirilmesi kapsamında uzun yıllar yönetim kurulu başkanlığı görevini üstlendim.
                </p>
              </div>
            </div>

            {/* Bölüm 3: Müze */}
            <div className="reveal">
              <h3 className="font-display text-3xl md:text-4xl text-navy-deep leading-tight mb-8">
                Müze Kuruculuğu ve Yayınlar
              </h3>
              <div className="space-y-6 text-foreground/85 text-lg leading-[1.8]">
                <p>
                  Ülkemizde sayıları çok az olan iki önemli müzenin kurucuları arasında yer almaktayım:
                </p>
                <ul className="space-y-3 list-disc list-inside text-foreground/85">
                  <li>Hacettepe Üniversitesi Zooloji Müzesi.</li>
                  <li>Kemaliye'de kurmuş olduğumuz Prof. Dr. Ali Demirsoy Doğa Tarihi Müzesi.</li>
                </ul>
                <p>
                  Kurucuları arasında bulunduğum Hacettepe Üniversitesi Zooloji Müzesi'nde her yıl binlerce ziyaretçiyi kabul ederek eğitimler vermekteyim.
                </p>
              </div>
            </div>

            {/* Bölüm 4: Medya */}
            <div className="reveal">
              <h3 className="font-display text-3xl md:text-4xl text-navy-deep leading-tight mb-8">
                Medya ve Belgesel Çalışmaları
              </h3>
              <div className="space-y-6 text-foreground/85 text-lg leading-[1.8]">
                <p>
                  TRT Kurumu tarafından desteklenen ve halen TRT'de yayınlanmakta olan iki adet belgesel çekiminde bilimsel danışmanlık yaptım: <em>Renklerin Dansı</em> (4 Bölüm) ve <em>Akrep Belgeseli</em> (1 Bölüm).
                </p>
                <p>
                  YouTube kanalımda ise doğaya dair 200 civarında özgün belgeselim bulunmaktadır.{" "}
                  <a
                    href="https://www.youtube.com/@yusufdurmus1942"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold underline underline-offset-4 hover:text-navy-deep transition-colors"
                  >
                    YouTube kanalım için tıklayınız.
                  </a>
                </p>
              </div>
            </div>

            {/* Bölüm 5: Projeler */}
            <div className="reveal">
              <h3 className="font-display text-3xl md:text-4xl text-navy-deep leading-tight mb-8">
                Projeler ve Doğa Eğitimi Çalışmaları
              </h3>
              <div className="space-y-6 text-foreground/85 text-lg leading-[1.8]">
                <p>
                  30 yıldır ülkemiz gençlerinin ve öğretmenlerinin eğitilmesi amacıyla çok sayıda projede aktif görev aldım. Türkiye'de alanında en çok proje yapan akademisyen olduğumu söyleyebilirim. Proje yürütücülüğü ve yardımcılığı yapmış olduğum bu çalışmalarda 100'den fazla öğretim elemanı görev almıştır.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-cream-soft p-6 rounded-sm border border-border/50">
                    <div className="font-display text-4xl text-gold">12</div>
                    <div className="mt-2 text-foreground/80">Araştırma Projesi</div>
                  </div>
                  <div className="bg-cream-soft p-6 rounded-sm border border-border/50">
                    <div className="font-display text-4xl text-gold">9</div>
                    <div className="mt-2 text-foreground/80">TÜBİTAK Doğa Eğitimi Projesi</div>
                  </div>
                  <div className="bg-cream-soft p-6 rounded-sm border border-border/50">
                    <div className="font-display text-4xl text-gold">14</div>
                    <div className="mt-2 text-foreground/80">TÜBİTAK BİDEB Öğretmen Eğitimi</div>
                  </div>
                  <div className="bg-cream-soft p-6 rounded-sm border border-border/50">
                    <div className="font-display text-4xl text-gold">680+</div>
                    <div className="mt-2 text-foreground/80">Eğitilen Öğretmen, Öğrenci ve Doğasever</div>
                  </div>
                </div>
                <p>
                  9 tane TÜBİTAK destekli Doğa Eğitimi projesi yürüterek; 680 civarında öğretmen, öğrenci ve doğaseverin eğitilmesine katkı sağladım. 14 tane TÜBİTAK BİDEB destekli Öğretmen Eğitimi projesi gerçekleştirdim. Bu eğitimlere katılan 546 öğretmen arkadaşım, halen ülkemizin başarılı ve seçkin okullarında görev yapmaktadır.
                </p>
                <p>
                  Bilecik ve Bozüyük'te gerçekleşen TÜBİTAK destekli 4007 projesinde görev alarak konferanslar verdim ve uygulama eğitimleri gerçekleştirdim. Bu etkinliklere binlerce öğrenci katılım sağladı.
                </p>
              </div>
            </div>

            {/* Bölüm 6: Olimpiyatlar */}
            <div className="reveal">
              <h3 className="font-display text-3xl md:text-4xl text-navy-deep leading-tight mb-8">
                Bilim Olimpiyatları Başarıları
              </h3>
              <div className="space-y-6 text-foreground/85 text-lg leading-[1.8]">
                <p>
                  Ülkemiz, Dünya Biyoloji Olimpiyatlarına ilk kez 26 yıl önce katıldı. Ben de TÜBİTAK Olimpiyatları'nın kurulduğu 1993 tarihinden 2015 yılına kadar, 22 yıl boyunca aralıksız olarak Türkiye TÜBİTAK Biyoloji Olimpiyatlarında görev yaptım. Bu vesileyle binlerce öğrenciye eğitmenlik etme fırsatı buldum.
                </p>
                <p>
                  2000 yılında Antalya'da gerçekleştirilen Uluslararası TÜBİTAK Biyoloji Olimpiyatları'nda TÜBİTAK Bilim Komitesi'nde görev aldım. Uluslararası Olimpiyatlarda dünya birincisi olan ve çok sayıda madalya kazanan öğrencilerin eğitimlerinde bilfiil görev yaptım.
                </p>
                <p>
                  TÜBİTAK BİDEB destekli, başarılı ortaöğretim öğrencilerine yönelik 4 proje yürüttüm. Bu eğitimlere katılan 320 başarılı öğrencimizin bir kısmı Ulusal Biyoloji Olimpiyatlarında; bir kısmı ise Uluslararası Biyoloji Olimpiyatlarında Altın, Gümüş ve Bronz madalyalar kazandılar.
                </p>
                <p>
                  Bu 320 öğrencimizin bazıları bugün üniversiteyi bitirip meslek hayatına atılırken, bazıları da üniversitelerimizin en seçkin bölümlerinde eğitimlerine devam etmektedir. Dünyanın sayılı üniversitelerine referans olarak öğrenci göndermenin mutluluğunu yaşadım; günümüzde dünyanın en iyi üniversitelerinde kürsü başkanı konumunda olan öğrencilerim bulunmaktadır.
                </p>
              </div>
            </div>

            {/* Bölüm 7: Kamplar */}
            <div className="reveal">
              <h3 className="font-display text-3xl md:text-4xl text-navy-deep leading-tight mb-8">
                Bilim Kampları ve Gezici Müze Faaliyetleri
              </h3>
              <div className="space-y-6 text-foreground/85 text-lg leading-[1.8]">
                <p>
                  Başarılı ve hedefi olan öğrenci ile öğretmenlere yönelik Biyoloji Bilim Kampları düzenlemekteyim. Her yıl yarıyıl tatilinde ve yaz aylarında; Biyoloji, Fizik, Kimya ve Matematik Bilim Kamplarının proje yürütücülüğünü üstleniyorum. Bu kamp ve etkinliklerimize her yıl bin civarında öğrenci katılıyor.
                </p>
                <p>
                  Kişisel biyolojik örneklerden, fotoğraflardan, fosillerden ve mikroskoplardan oluşan bir Gezici Müzem bulunmaktadır. Gezici müze ile her yıl çok sayıda eğitim kurumuna davet ediliyor; buralarda konferanslar verip, sergiler açıyor ve uygulama eğitimleri düzenliyorum.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-cream-soft p-6 rounded-sm border border-border/50 text-center">
                    <div className="font-display text-4xl text-gold">30.000+</div>
                    <div className="mt-2 text-sm text-foreground/70">Yıllık Katılımcı</div>
                  </div>
                  <div className="bg-cream-soft p-6 rounded-sm border border-border/50 text-center">
                    <div className="font-display text-4xl text-gold">100+</div>
                    <div className="mt-2 text-sm text-foreground/70">Son 3 Yılda Kurum</div>
                  </div>
                  <div className="bg-cream-soft p-6 rounded-sm border border-border/50 text-center">
                    <div className="font-display text-4xl text-gold">0 ₺</div>
                    <div className="mt-2 text-sm text-foreground/70">Ücret Talebi</div>
                  </div>
                </div>
                <p>
                  Yaptığım tüm bu etkinliklere her yıl yaklaşık 30 bine yakın kişi katılmaktadır. Son 3 yılda 100'den fazla eğitim kurumunda bilimsel etkinlik gerçekleştirdim. Davetli konferanslar, sergiler, uygulama eğitimleri, arazi çalışmaları ve doğa eğitimleri için hiçbir ücret talep etmemekte, farklı illerdeki bu etkinliklere kendi imkânlarımla gitmekteyim.
                </p>
              </div>
            </div>

            {/* Bölüm 8: Vizyon */}
            <div className="reveal bg-navy-deep text-cream p-10 md:p-14 rounded-sm">
              <h3 className="font-display text-3xl md:text-4xl text-cream leading-tight mb-8">
                Vizyonum ve Felsefem
              </h3>
              <div className="space-y-6 text-cream/85 text-lg leading-[1.8]">
                <p>
                  Hayattaki temel felsefem; öncelikle insanı sevmek, fedakârlık yapabilmek, hedef koymak ve o hedefe kararlılıkla yürümektir.
                </p>
                <p>
                  En iyi yatırımın, geleceğimiz olan gençlere yapılan yatırım olduğu yaklaşımından yola çıkarak; bugüne kadar olduğu gibi bundan sonra da gençlerin yetişmesine yönelik projeler üretmeye devam edeceğim. Yolumun kesiştiği tüm insanlara, hiçbir ayrım gözetmeksizin koşulsuz destek olacağımı bilmenizi isterim.
                </p>
                <p className="font-display text-2xl text-gold pt-4">
                  Selam, Sevgi ve Saygılarımla.
                </p>
              </div>
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
                Türkiye'nin{" "}
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

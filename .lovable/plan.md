Plan: Prof. Dr. Yusuf Durmuş Akademi & Bilim Kampları Kurumsal Web Sitesi

## Özet
Summer Boarding Courses (summerboardingcourses.com) tarzında, "Elite Science Academy" havasında, lacivert-altın-krem renk paletli, lüks serif (Cormorant Garamond + Karla) tipografili, tamamen Türkçe, 6 sayfalık kurumsal bir web sitesi. Backend şimdilik yalnızca UI (mock form); başvuru verileri kaydedilmeyecek.

## Hedef Yapı (Sitemap)
- `/` — Ana sayfa: vitrin, güven rozetleri, hedef kitle segmentasyon kartları, kısa tanıtım.
- `/kurumsal` — Prof. Dr. Yusuf Durmuş biyografisi, başarılar, neden bu kamplar, referans kurumlar listesi.
- `/lise-bilim-ve-olimpiyat-kamplari` — Lise programı, branş ders içerikleri, örnek günlük program.
- `/ortaokul-ekoloji-ve-doga-okulu` — Ortaokul programı, macera atölyeleri, veli SSS.
- `/gurur-tablosu` — Sosyal kanıt, veli/öğrenci yorumları, madalya/istatistik rozetleri.
- `/merkezi-kayit-formu` — Çok adımlı dinamik başvuru formu (4 adım + teşekkür ekranı).

## Tasarım Yönü
- Renk paleti: Oxford Lacivert & Altın
  - `--navy-900`: #0a1a2f (derin arka plan)
  - `--navy-800`: #11264a (kartlar / gece bölümler)
  - `--gold`: #c9a84c (aksan, CTA, rozetler)
  - `--gold-light`: #f0d78c (hover / vurgular)
  - `--cream`: #f5f0e0 (temel metin / açık arka plan)
  - `--cream-dark`: #e8e0cc (sınırlar / ikincil arka plan)
- Tipografi: Cormorant Garamond (display/heading), Karla (body). Google Fonts `<link>` ile `__root.tsx` head'e eklenecek.
- Stil: geniş boşluk, asimetrik hero, büyük tipografi, altın ince çizgiler, fotoğraf ağırlıklı bölümler, sabit üst navigasyon, zarif geçişler (Framer Motion kullanılabilir ama sade tutulacak).
- Kartlar: yarı saydam lacivert cam efekti, altın kenarlıklar, büyük border-radius.
- CTA: dolu altın buton (primary), lacivert kontur buton (secondary).

## Teknik Yapı
- Framework: TanStack Start v1 + React 19 + Vite 7 + Tailwind CSS v4.
- Routes: `src/routes/` altında aşağıdaki dosyalar:
  - `index.tsx`
  - `kurumsal.tsx`
  - `lise-bilim-ve-olimpiyat-kamplari.tsx`
  - `ortaokul-ekoloji-ve-doga-okulu.tsx`
  - `gurur-tablosu.tsx`
  - `merkezi-kayit-formu.tsx`
- `src/styles.css`: yukarıdaki renk token'ları, font token'ları, custom radius/shadow utility'ler.
- `src/components/` altında tekrar kullanılabilir bileşenler:
  - `Header.tsx` — sabit navbar, logo, navigasyon, CTA butonu.
  - `Footer.tsx` — kurumsal footer, kısa linkler, iletişim ve sosyal medya yer tutucuları.
  - `HeroSection.tsx` — hero arka plan + başlık + alt başlık + CTA'lar.
  - `TrustRibbon.tsx` — güven rozetleri şeridi.
  - `SegmentCard.tsx` — hedef kitle kartı.
  - `ProgramFeatures.tsx` — özellik/kazanım listesi.
  - `WorkshopCard.tsx` — atölye kartı.
  - `TestimonialCard.tsx` — yorum kartı.
  - `RegistrationForm.tsx` — çok adımlı form (stepper + koşullu mantık).
- Görseller: `src/assets/` altında AI üretimi / lovable-assets ile hero ve sayfa görselleri (laboratuvar, doğa, çocuklar, mikroskop). Gerçek fotoğraf yoksa üretilen görseller kullanılacak.

## Sayfa İçerikleri
### Ana Sayfa (`/`)
- Hero: video döngüsü / hero görseli, ana başlık, alt başlık, 2 CTA.
- Güven şeridi: %94 başarı, 15+ yıl deneyim, Prof. Dr. yönetiminde, 7/24 güvenli konaklama.
- Segmentasyon kartları: Lise (9-12) ve Ortaokul (5-8) kartları, her biri özet + CTA.
- Kısa " Akademi Hakkında" alanı.
- Footer.

### Kurumsal (`/kurumsal`)
- H1: Akademik Güvenilirlik ve Doğa Sevgisiyle Geçen Bir Ömür.
- Biyografik hikaye (Trabzon/Araklı köyü, Hacettepe, Gazi, Atatürk).
- "Neden Bu Kampları Seçmelisiniz?" 4 maddelik liste.
- Referans kurumlar listesi (8 okul).
- SEO meta: başlık + açıklama + og etiketleri.

### Lise Bilim & Olimpiyat Kampları (`/lise-bilim-ve-olimpiyat-kamplari`)
- H1: Geleceğin Bilim İnsanları ve Türkiye Dereceleri Burada Yetişiyor.
- Kazanımlar listesi.
- Branş ders içerikleri (Biyoloji, Fizik, Kimya, Matematik) — akordeon veya kartlar.
- Örnek günlük program tablosu/zaman çizelgesi.

### Ortaokul Ekoloji & Doğa Okulu (`/ortaokul-ekoloji-ve-doga-okulu`)
- H1: Doğayı Laboratuvara, Merakı Keşfe Dönüştürüyoruz!
- Kazanımlar listesi.
- 4 macera temalı atölye kartı.
- Veli SSS (3 soru/cevap).

### Gurur Tablosu (`/gurur-tablosu`)
- H1: Başarı Hikayelerimiz ve Sosyal Kanıt.
- İstatistik rozetleri (madalya sayısı, öğrenci sayısı, üniversite yerleşme oranı).
- Öğrenci/veli yorum kartları (mock veriler).
- "Eğitimde Güven" rozetleri.

### Merkezi Kayıt Formu (`/merkezi-kayit-formu`)
- H1: Kamp Başvurunuzu Hemen Yapın.
- 4 adımlı stepper:
  1. Temel seçim (eğitim kademesi, katılım türü).
  2. Kamp/dönem seçimi (koşullu filtreleme), okul/sınıf.
  3. Veli ve öğrenci iletişim bilgileri.
  4. Sağlık/güvenlik + onaylar.
- Teşekkür ekranı (başarı mesajı).
- Form verileri şimdilik local state; gönderimde console log ve thank-you ekranı gösterilir.

## SEO
- Her route için unique `head()` meta: title, description, og:title, og:description, canonical.
- Root `__root.tsx` sadece viewport, charset, default og:type ve site geneli font/stylesheet linkleri.
- `robots.txt` ve `sitemap.xml` varsayılan olarak güncellenir; tam URL yoksa göreli canonical.

## Görseller
- Hero görseli: lise laboratuvarı + ortaokul doğa (bölünmüş veya tek kompozit).
- Kurumsal: Prof. Dr. için akademik ortam / portre yer tutucu (fotoğraf yoksa üretilmiş profesyonel görsel).
- Lise: mikroskop/laboratuvar.
- Ortaokul: doğa, büyüteç, çocuklar.
- Gurur: madalya/ Diploma / kutlama görselleri.

## Redirect Notları (Gelecek)
- 301 haritası şimdilik sadece dokümantasyon / TODO yorumu olarak kaydedilecek; canlı redirect'ler backend/domain ayarları gerektirir.

## Doğrulama
- Her route build'de geçerli route ID'ye sahip olacak (TanStack file-based routing).
- Tüm linkler `Link` component kullanacak; `a href` yok.
- `npm run build` veya `bun run build` başarılı olacak; TypeScript strict hatası kalmayacak.
- Preview kontrolü: ana sayfa, navigasyon, form adımları, responsive mobil görünüm.
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import heroImg from "../assets/hero.jpg";

export const Route = createFileRoute("/merkezi-kayit-formu")({
  head: () => ({
    meta: [
      { title: "Merkezi Kayıt Formu — Kamp Başvurusu" },
      {
        name: "description",
        content:
          "4 adımlık dinamik kayıt formu ile lise olimpiyat kampı veya ortaokul doğa okulu için başvurunuzu hemen yapın.",
      },
      { property: "og:title", content: "Merkezi Kayıt Formu" },
      { property: "og:description", content: "Kamp başvurusunu hemen yapın." },
      { property: "og:url", content: "/merkezi-kayit-formu" },
    ],
    links: [{ rel: "canonical", href: "/merkezi-kayit-formu" }],
  }),
  component: KayitPage,
});

type Form = {
  kademe: "" | "ortaokul" | "lise";
  program: string;
  donem: string;
  okul: string;
  sinif: string;
  veliAd: string;
  veliTel: string;
  veliMail: string;
  ogrenciAd: string;
  tckn: string;
  ilac: "evet" | "hayir";
  ilacAciklama: string;
  alerji: "evet" | "hayir";
  alerjiAciklama: string;
  kuralOnay: boolean;
  kvkkOnay: boolean;
};

const steps = [
  "Temel Seçim",
  "Kamp & Dönem",
  "İletişim",
  "Sağlık & Onay",
] as const;

const liseProgramlari = [
  "TÜBİTAK Biyoloji Olimpiyat Kampı",
  "Yoğunlaştırılmış Fizik Kampı",
  "İleri Kimya Kampı",
  "Olimpiyat Matematiği",
];
const ortaokulProgramlari = [
  "Ekoloji & Doğa Okulu",
  "Mikroskop Atölyesi",
];
const donemler = [
  "1. Dönem — 15-29 Haziran",
  "2. Dönem — 1-15 Temmuz",
  "3. Dönem — 18 Temmuz - 1 Ağustos",
  "4. Dönem — 4-18 Ağustos",
];

function KayitPage() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState<Form>({
    kademe: "",
    program: "",
    donem: "",
    okul: "",
    sinif: "",
    veliAd: "",
    veliTel: "",
    veliMail: "",
    ogrenciAd: "",
    tckn: "",
    ilac: "hayir",
    ilacAciklama: "",
    alerji: "hayir",
    alerjiAciklama: "",
    kuralOnay: false,
    kvkkOnay: false,
  });

  const programlar = useMemo(
    () =>
      form.kademe === "lise"
        ? liseProgramlari
        : form.kademe === "ortaokul"
        ? ortaokulProgramlari
        : [],
    [form.kademe],
  );

  const set = <K extends keyof Form>(k: K, v: Form[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const canNext = (() => {
    if (step === 0) {
      return !!form.kademe;
    }
    if (step === 1) return form.program && form.donem && form.okul && form.sinif;
    if (step === 2)
      return (
        form.veliAd &&
        form.veliTel &&
        form.veliMail &&
        form.ogrenciAd &&
        form.tckn.length === 11
      );
    if (step === 3) return form.kuralOnay && form.kvkkOnay;
    return false;
  })();

  const submit = () => {
    console.log("Kamp başvurusu:", form);
    setDone(true);
  };

  if (done) {
    return (
      <>
        <PageHero
          eyebrow="Başvurunuz Alındı"
          title={
            <>
              Akademi ailesine{" "}
              <em className="text-gold not-italic">hoş geldiniz</em>.
            </>
          }
          image={heroImg}
        />
        <section className="py-28 bg-cream">
          <div className="container-prose max-w-2xl mx-auto text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-gold" />
            <h2 className="mt-6 font-display text-3xl text-navy-deep">
              Başvurunuz başarıyla alındı.
            </h2>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              Kamp detayları, konaklama rehberi ve ödeme bilgileri e-posta
              adresinize gönderilmiştir. Eğitim koordinatörümüz en geç 24 saat
              içinde sizinle telefonla iletişime geçecektir.
            </p>
            <Link
              to="/"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy-deep px-7 py-3.5 text-sm font-semibold text-cream hover:bg-navy-soft"
            >
              Ana sayfaya dön
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Merkezi Kayıt Formu"
        title={
          <>
            Kamp başvurunuzu{" "}
            <em className="text-gold not-italic">4 adımda</em> tamamlayın.
          </>
        }
        intro="Çocuğunuzun katılacağı kampı, dönemi ve gerekli bilgileri saniyeler içinde bildirin."
        image={heroImg}
      />

      <section className="py-20 bg-cream">
        <div className="container-prose max-w-3xl mx-auto">
          {/* Stepper */}
          <ol className="flex items-center justify-between gap-2 mb-12">
            {steps.map((label, i) => {
              const active = i === step;
              const complete = i < step;
              return (
                <li key={label} className="flex-1">
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-9 w-9 place-items-center rounded-full text-sm font-semibold border ${
                        active
                          ? "bg-gold border-gold text-navy-deep"
                          : complete
                          ? "bg-navy-deep border-navy-deep text-cream"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={`hidden md:block text-sm ${
                        active
                          ? "text-navy-deep font-semibold"
                          : "text-muted-foreground"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={`hidden md:block mt-4 h-px ${
                        complete ? "bg-navy-deep" : "bg-border"
                      }`}
                    />
                  )}
                </li>
              );
            })}
          </ol>

          <div className="bg-white rounded-sm border border-border p-8 md:p-12">
            {step === 0 && (
              <div className="space-y-8">
                <Field label="Öğrencinin Eğitim Kademesi">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Choice
                      active={form.kademe === "ortaokul"}
                      onClick={() => set("kademe", "ortaokul")}
                      title="Ortaokul"
                      sub="5, 6, 7 veya 8. Sınıf"
                    />
                    <Choice
                      active={form.kademe === "lise"}
                      onClick={() => set("kademe", "lise")}
                      title="Lise"
                      sub="9, 10, 11 veya 12. Sınıf"
                    />
                  </div>
                </Field>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-8">
                <Field label="Kampa katılmak istediğiniz alanı işaretleyiniz">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Biyoloji",
                      "Fizik",
                      "Kimya",
                      "Matematik",
                      "Ekoloji Temelli Doğa Eğitimi",
                    ].map((alan) => (
                      <Choice
                        key={alan}
                        active={form.program === alan}
                        onClick={() => set("program", alan)}
                        title={alan}
                      />
                    ))}
                  </div>
                </Field>

                <Field label="Kamp Dönemi / Tarihi">
                  <select
                    className="input"
                    value={form.donem}
                    onChange={(e) => set("donem", e.target.value)}
                  >
                    <option value="">Seçiniz…</option>
                    {donemler.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </Field>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Öğrencinin Mevcut Okulu">
                    <input
                      className="input"
                      value={form.okul}
                      onChange={(e) => set("okul", e.target.value)}
                      placeholder="Örn. Ankara Fen Lisesi"
                    />
                  </Field>
                  <Field label="Sınıfı">
                    <input
                      className="input"
                      value={form.sinif}
                      onChange={(e) => set("sinif", e.target.value)}
                      placeholder="Örn. 10"
                    />
                  </Field>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Veli Ad Soyad">
                    <input
                      className="input"
                      value={form.veliAd}
                      onChange={(e) => set("veliAd", e.target.value)}
                    />
                  </Field>
                  <Field label="Veli Telefon (SMS için)">
                    <input
                      className="input"
                      value={form.veliTel}
                      onChange={(e) => set("veliTel", e.target.value)}
                      placeholder="05XX XXX XX XX"
                    />
                  </Field>
                </div>
                <Field label="Veli E-posta (broşür ve fatura için)">
                  <input
                    type="email"
                    className="input"
                    value={form.veliMail}
                    onChange={(e) => set("veliMail", e.target.value)}
                  />
                </Field>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Öğrenci Ad Soyad">
                    <input
                      className="input"
                      value={form.ogrenciAd}
                      onChange={(e) => set("ogrenciAd", e.target.value)}
                    />
                  </Field>
                  <Field
                    label="Öğrenci T.C. Kimlik No"
                    hint="Sigorta ve resmi konaklama bildirimi için yasal zorunluluktur."
                  >
                    <input
                      inputMode="numeric"
                      maxLength={11}
                      className="input"
                      value={form.tckn}
                      onChange={(e) =>
                        set("tckn", e.target.value.replace(/\D/g, ""))
                      }
                    />
                  </Field>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <Field label="Düzenli ilaç kullanımı var mı?">
                  <YesNo
                    value={form.ilac}
                    onChange={(v) => set("ilac", v)}
                  />
                  {form.ilac === "evet" && (
                    <textarea
                      className="input mt-4"
                      rows={3}
                      placeholder="Lütfen ilaç adı ve dozajını belirtin"
                      value={form.ilacAciklama}
                      onChange={(e) => set("ilacAciklama", e.target.value)}
                    />
                  )}
                </Field>
                <Field label="Alerji durumu var mı?">
                  <YesNo
                    value={form.alerji}
                    onChange={(v) => set("alerji", v)}
                  />
                  {form.alerji === "evet" && (
                    <textarea
                      className="input mt-4"
                      rows={3}
                      placeholder="Lütfen alerjenleri ve şiddetini belirtin"
                      value={form.alerjiAciklama}
                      onChange={(e) => set("alerjiAciklama", e.target.value)}
                    />
                  )}
                </Field>
                <div className="space-y-3 pt-4 border-t border-border">
                  <Check
                    checked={form.kuralOnay}
                    onChange={(v) => set("kuralOnay", v)}
                    label="Akademi Kamp Kuralları ve Katılım Şartlarını okudum, onaylıyorum."
                  />
                  <Check
                    checked={form.kvkkOnay}
                    onChange={(v) => set("kvkkOnay", v)}
                    label="KVKK kapsamında verilerimin işlenmesini ve kamp fotoğraf/videolarının tanıtımlarda kullanılmasını onaylıyorum."
                  />
                </div>
              </div>
            )}

            <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-navy-deep hover:bg-cream-soft disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" />
                Geri
              </button>

              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canNext}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-navy-deep hover:bg-gold-soft disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Devam <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={submit}
                  disabled={!canNext}
                  className="inline-flex items-center gap-2 rounded-full bg-navy-deep px-7 py-3 text-sm font-semibold text-cream hover:bg-navy-soft disabled:opacity-40"
                >
                  Başvuruyu Gönder <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          background: var(--color-cream);
          border: 1px solid var(--color-border);
          border-radius: 4px;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: var(--color-navy-deep);
          font-family: var(--font-sans);
          transition: border-color .15s;
        }
        .input:focus {
          outline: none;
          border-color: var(--color-gold);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-gold) 20%, transparent);
        }
      `}</style>
    </>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-navy-deep mb-2">
        {label}
      </span>
      {children}
      {hint && <p className="mt-2 text-xs text-muted-foreground">{hint}</p>}
    </label>
  );
}

function Choice({
  active,
  onClick,
  title,
  sub,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  sub: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left rounded-sm border p-5 transition ${
        active
          ? "border-gold bg-gold/10"
          : "border-border bg-cream hover:border-navy-deep/40"
      }`}
    >
      <div className="font-display text-xl text-navy-deep">{title}</div>
      <div className="text-sm text-muted-foreground mt-1">{sub}</div>
    </button>
  );
}

function YesNo({
  value,
  onChange,
}: {
  value: "evet" | "hayir";
  onChange: (v: "evet" | "hayir") => void;
}) {
  return (
    <div className="flex gap-2">
      {(["hayir", "evet"] as const).map((v) => (
        <button
          key={v}
          type="button"
          onClick={() => onChange(v)}
          className={`flex-1 rounded-full border px-5 py-2 text-sm font-medium capitalize transition ${
            value === v
              ? "border-gold bg-gold text-navy-deep"
              : "border-border text-foreground/70 hover:border-navy-deep/40"
          }`}
        >
          {v === "hayir" ? "Hayır" : "Evet"}
        </button>
      ))}
    </div>
  );
}

function Check({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 accent-[var(--color-gold)]"
      />
      <span className="text-sm text-foreground/80 leading-relaxed">
        {label}
      </span>
    </label>
  );
}

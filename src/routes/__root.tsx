import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-deep px-4 text-cream">
      <div className="max-w-md text-center">
        <span className="eyebrow">404</span>
        <h1 className="mt-3 font-display text-5xl text-cream">Sayfa bulunamadı</h1>
        <p className="mt-3 text-sm text-cream/70">
          Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep hover:bg-gold-soft"
        >
          Ana sayfaya dön
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-deep px-4 text-cream">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-cream">Bir şeyler ters gitti</h1>
        <p className="mt-2 text-sm text-cream/70">
          Sayfayı yeniden yüklemeyi deneyin ya da ana sayfaya dönün.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep hover:bg-gold-soft"
          >
            Tekrar dene
          </button>
          <a
            href="/"
            className="inline-flex items-center rounded-full border border-cream/30 px-5 py-2.5 text-sm font-medium text-cream hover:border-gold hover:text-gold"
          >
            Ana sayfa
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Prof. Dr. Yusuf Durmuş Akademi — Bilim ve Doğa Kampları" },
      {
        name: "description",
        content:
          "TÜBİTAK olimpiyatlarına hazırlanan lise öğrencilerinden, doğayı keşfeden ortaokul kâşiflerine kadar Türkiye’nin en kapsamlı yatılı bilim kampları.",
      },
      { property: "og:site_name", content: "Prof. Dr. Yusuf Durmuş Akademi" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Prof. Dr. Yusuf Durmuş Akademi — Bilim ve Doğa Kampları" },
      { name: "twitter:title", content: "Prof. Dr. Yusuf Durmuş Akademi — Bilim ve Doğa Kampları" },
      { name: "description", content: "Corporate website for Yusuf Durmuş Akademi & Bilim Kampları, showcasing programs and information." },
      { property: "og:description", content: "Corporate website for Yusuf Durmuş Akademi & Bilim Kampları, showcasing programs and information." },
      { name: "twitter:description", content: "Corporate website for Yusuf Durmuş Akademi & Bilim Kampları, showcasing programs and information." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/53ffb3c5-0c5d-4f51-b05b-4bd373f170b3/id-preview-d89d9278--14f93495-e335-4de2-bc95-14f9cad6f157.lovable.app-1781552318711.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/53ffb3c5-0c5d-4f51-b05b-4bd373f170b3/id-preview-d89d9278--14f93495-e335-4de2-bc95-14f9cad6f157.lovable.app-1781552318711.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Karla:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}

import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} — EV Charging Infrastructure for Africa`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "EV charging Nigeria",
    "electric vehicle charging infrastructure",
    "EV charging stations Lagos",
    "electric mobility Africa",
    "DC fast charging Nigeria",
    "Blue Point Technology Solutions",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: site.url,
    siteName: site.name,
    title: `${site.shortName} — EV Charging Infrastructure for Africa`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} — EV Charging Infrastructure for Africa`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#030c17",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              alternateName: site.shortName,
              url: site.url,
              description: site.description,
              email: site.email,
              telephone: site.phoneIntl,
              address: {
                "@type": "PostalAddress",
                streetAddress: `${site.address.line1}, ${site.address.line2}`,
                addressLocality: "Abuja",
                addressRegion: "FCT",
                addressCountry: "NG",
              },
              areaServed: ["Nigeria", "Africa"],
            }),
          }}
        />
      </body>
    </html>
  );
}

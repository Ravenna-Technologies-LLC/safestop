import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://safestop.global"),
  title: {
    default: "Child Car Safety & Hot Car Prevention App | SafeStop",
    template: "%s | SafeStop",
  },
  description:
    "SafeStop is an iOS child car safety app with back seat reminders, caregiver alerts, trusted partner notifications, and child checkout confirmation.",
  keywords: [
    "child car safety app",
    "hot car prevention app",
    "back seat reminder app",
    "child left in car alert",
    "baby in car reminder",
    "caregiver safety app",
    "summer child car safety",
    "protect children from hot cars",
    "hot car death prevention",
    "SafeStop",
  ],
  category: "Child Safety",
  applicationName: "SafeStop",
  creator: "Ravenna Technologies LLC",
  publisher: "Ravenna Technologies LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "SafeStop Child Car Safety App",
    description: "Back seat reminders, caregiver alerts, and checkout confirmation help families build a safer routine for every drive.",
    url: "https://safestop.global",
    siteName: "SafeStop",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "SafeStop child car safety app" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeStop Child Car Safety App",
    description: "Back seat reminders and caregiver alerts for safer family trips.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/app-icon.jpeg",
    apple: "/app-icon.jpeg",
  },
  alternates: { canonical: "https://safestop.global" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

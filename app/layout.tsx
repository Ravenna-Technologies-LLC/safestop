import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://safestop.global"),
  title: {
    default: "Caregiver Accountability & Child Car Safety App | SafeStop",
    template: "%s | SafeStop",
  },
  description:
    "SafeStop helps adults coordinate child transportation with check-ins, back seat reminders, trusted partner notifications, checkout confirmation, and trip history.",
  keywords: [
    "child car safety app",
    "hot car prevention app",
    "back seat reminder app",
    "child transportation safety",
    "caregiver accountability",
    "child drop-off confirmation",
    "babysitter child pickup verification",
    "carpool child safety",
    "trusted partner notifications",
    "prevent children being left in vehicles",
    "SafeStop",
  ],
  category: "Family and caregiver coordination",
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
    title: "SafeStop — Every trip. Accounted for.",
    description: "Check in, share responsibility, confirm checkout, and keep every caregiver in the loop.",
    url: "https://safestop.global",
    siteName: "SafeStop",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "SafeStop child car safety app" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeStop — Every trip. Accounted for.",
    description: "Shared responsibility and clear handoffs for every family ride.",
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

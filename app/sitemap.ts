import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: "https://safestop.global", lastModified, changeFrequency: "monthly", priority: 1 },
    { url: "https://safestop.global/contact", lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://safestop.global/privacy", lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: "https://safestop.global/terms", lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}

import { office } from "../lib/site";

interface StructuredDataProps {
  type: "Organization" | "Person" | "LegalService" | "WebPage";
  data: Record<string, unknown>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://adhukukvedanismanlik.com";
  const schema =
    type === "Person"
      ? {
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": `${siteUrl}/#ali-deniz`,
          name: "Ali Deniz",
          jobTitle: "Avukat",
          url: `${siteUrl}/hakkimda/`,
          worksFor: { "@id": `${siteUrl}/#office` },
        }
      : {
          "@context": "https://schema.org",
          "@type": type === "WebPage" ? "WebPage" : "LegalService",
          "@id": `${siteUrl}/#office`,
          name: office.name,
          url: siteUrl,
          image: `${siteUrl}/images/hukukgorsel.png`,
          telephone: office.phone,
          email: office.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: office.address,
            addressLocality: "Kocasinan",
            addressRegion: "Kayseri",
            addressCountry: "TR",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "08:30",
              closes: "20:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "10:00",
              closes: "15:00",
            },
          ],
        };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ ...schema, ...data }).replace(/</g, "\\u003c"),
      }}
    />
  );
}

import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
}

export const SEO = ({
  title,
  description,
  keywords = "création site web, agence web, site vitrine, e-commerce, maintenance web, SEO, Altera",
  url = "https://altera.fr",
  image = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b1daad4e-85e2-4713-bd69-fd7a8910b96d/id-preview-8b3351c2--176e2a79-62c9-4fab-9cee-6e30f29c7373.lovable.app-1772818146176.png",
  type = "website",
  noindex = false,
}: SEOProps) => {
  const siteTitle = `${title} | ALTÉRA`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

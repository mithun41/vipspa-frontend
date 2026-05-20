import Head from "next/head";

const PageHead = ({ headTitle, metaDescription, siteConfig, canonicalUrl }) => {
  // siteConfig jodi props theke na ase, tobe amra layout-er backup use korbo
  const config = siteConfig || null;

  // ✅ আপনার ব্যবসার স্কিমা ডাটা (ডোমেইন আপডেট করা হয়েছে)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Vip Spa Dhaka",
    "image": "https://vipspa.pythonanywhere.com/media/site/logos/Screenshot_5_VdiUXfP.png",
    "@id": "https://www.vipspadhaka.com/#localbusiness",
    "url": "https://www.vipspadhaka.com/",
    "telephone": "01891450300",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "91-b Rd 24",
      "addressLocality": "Dhaka",
      "postalCode": "1212",
      "addressCountry": "BD"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <>
      <Head>
        <title>
          {headTitle || config?.meta_title || "VIP Spa Dhaka || Premier Spa Destination"}
        </title>

        <meta
          name="description"
          content={metaDescription || config?.meta_description || "Luxury spa and wellness services in Dhaka."}
        />
        <link rel="canonical" href={canonicalUrl} />

        {/* --- ✅ JSON-LD Schema Script --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content={headTitle || config?.og_title || config?.meta_title || "VIP Spa Dhaka"}
        />
        <meta
          property="og:description"
          content={metaDescription || config?.meta_description || "Experience top-tier luxury spa services."}
        />
        
        <meta 
          property="og:image" 
          content={config?.og_image || "/images/screenshot.jpg"} 
        />
        
        <meta 
          property="og:url" 
          content={config?.site_url || "https://vipspadhaka.com"} 
        />
        
        <meta property="og:type" content="website" />
        
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,600&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
  );
};

export default PageHead;
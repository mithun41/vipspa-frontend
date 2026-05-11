import Head from "next/head";

const PageHead = ({ headTitle, metaDescription, siteConfig }) => {
  // siteConfig jodi props theke na ase, tobe amra layout-er backup use korbo
  const config = siteConfig || null;

  return (
    <>
      <Head>
        {/* Title Logic: 
            1. Layout theke dynamic title (jemon config.home_meta_title) ashle seta show korbe.
            2. Na thakle headTitle (hardcoded title) show korbe.
            3. Ki-chu na thakle default title.
        */}
        <title>
          {headTitle || config?.meta_title || "VIP Spa Dhaka || Premier Spa Destination"}
        </title>

        {/* Description Logic: Layout theke pathano dynamic description ba default */}
        <meta
          name="description"
          content={metaDescription || config?.meta_description || "Luxury spa and wellness services in Dhaka."}
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content={headTitle || config?.og_title || config?.meta_title || "Elite Spa Dhaka"}
        />
        <meta
          property="og:description"
          content={metaDescription || config?.meta_description || "Experience top-tier luxury spa services."}
        />
        
        {/* og:image: Database theke og_image link */}
        <meta 
          property="og:image" 
          content={config?.og_image || "/images/screenshot.jpg"} 
        />
        
        {/* og:url */}
        <meta 
          property="og:url" 
          content={config?.site_url || "https://vipspadhaka.com"} 
        />
        
        <meta property="og:type" content="website" />
        
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,600&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
  );
};

export default PageHead;
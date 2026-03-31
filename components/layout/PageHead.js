import Head from "next/head";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>
          {headTitle
            ? headTitle
            : "Vip Spa Dhaka || Dhaka's Premier Destination for Luxury Spa"}
        </title>
        <meta
          name="description"
          content="Discover Dhaka's premier destination for luxury spa and wellness. Indulge in exclusive treatments, relax in a serene atmosphere, and rejuvenate your mind and body with our professional services."
        />
        {/* Open Graph Meta Tags for Facebook */}
        <meta
          property="og:title"
          content="Vip Spa Dhaka - Feel Premium and Luxury "
        />
        <meta
          property="og:description"
          content="Discover Dhaka's premier destination for luxury spa and wellness. Indulge in exclusive treatments, relax in a serene atmosphere, and rejuvenate your mind and body with our professional services."
        />
        <meta property="og:image" content="images/screenshort.jpg" />
        <meta property="og:url" content="vipspadhaka.com" />
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

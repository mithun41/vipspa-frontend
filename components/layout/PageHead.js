import Head from "next/head";
import { useEffect, useState } from "react";

const PageHead = ({ headTitle }) => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    // সাইট কনফিগ এপিআই থেকে ডাটা নিয়ে আসা
    fetch("https://vipspa.pythonanywhere.com/api/vipspa/site-config/")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setConfig(data[0]); // প্রথম অবজেক্টটি সেট করা
        }
      });
  }, []);

  return (
    <>
      <Head>
        {/* Title: যদি প্রপস থেকে টাইটেল আসে তবে সেটা, নাহলে ডাটাবেজের meta_title, নাহলে ডিফল্ট */}
        <title>
          {headTitle 
            ? headTitle 
            : (config?.meta_title || "Vip Spa Dhaka || Dhaka's Premier Destination")}
        </title>

        {/* Description: ডাটাবেজের meta_description ব্যবহার করা হয়েছে */}
        <meta
          name="description"
          content={config?.meta_description || "Default description..."}
        />

        {/* Open Graph Tags: এগুলো এখন ডাটাবেজ থেকে আসবে */}
        <meta
          property="og:title"
          content={config?.og_title || config?.meta_title || "Vip Spa Dhaka"}
        />
        <meta
          property="og:description"
          content={config?.meta_description || "Luxury spa services in Dhaka."}
        />
        
        {/* og:image: ডাটাবেজ থেকে আসা ইমেজের লিঙ্ক */}
        <meta property="og:image" content={config?.og_image || "images/screenshort.jpg"} />
        
        {/* og:url: ডাটাবেজের site_url ব্যবহার করা হয়েছে */}
        <meta property="og:url" content={config?.site_url || "vipspadhaka.com"} />
        
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
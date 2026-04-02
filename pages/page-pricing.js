import Layout from "@/components/layout/Layout";
import Instragram from "@/components/sections/innerpages/Instragram";
import PageTitle from "@/components/sections/PageTitle";
import Pricing1 from "@/components/sections/Pricing4";
import WhyChooseUs4 from "@/components/sections/WhyChooseUs4";
import Video3 from "@/components/sections/Video3";
import Funfact from "@/components/sections/Funfact3";

import { useEffect, useState } from "react";

export default function PagePricing() {
   const [homeData, setHomeData] = useState(null);
    const [loading, setLoading] = useState(true); 
  
    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/vipspa/homepage/")
        .then((res) => res.json())
        .then((data) => {
          setHomeData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Fetch error:", err);
          setLoading(false);
        });
    }, []);
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <PageTitle pageName="Our Pricing Plans" />
        <Pricing1 pricingData={homeData?.pricing || {}} />
        {/* <Video3 /> */}
        <Funfact />
        <WhyChooseUs4 />
      </Layout>
    </>
  );
}

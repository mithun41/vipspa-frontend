import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/About1";
import About6 from "@/components/sections/About6";
import Banner2 from "@/components/sections/Banner2";
import Banner1 from "@/components/sections/Banner3";
import Blog1 from "@/components/sections/Blog2";
import Clients1 from "@/components/sections/Clients1";
import Contact1 from "@/components/sections/Contact1";
import DynamicSection from "@/components/sections/DynamicSection";
import Gallery1 from "@/components/sections/Gallery1";
import Instagram1 from "@/components/sections/Instagram1";
import Marquee1 from "@/components/sections/Marquee1";
import Pricing1 from "@/components/sections/Pricing4";
import Services1 from "@/components/sections/Services1";
import Team2 from "@/components/sections/Team2";
import Testimonial1 from "@/components/sections/Testimonial1";
import Video1 from "@/components/sections/Video1";
import { useEffect, useState } from "react";
export default function Home() {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    fetch("https://vipspa.pythonanywhere.com//api/vipspa/homepage/")
      .then((res) => res.json())
      .then((data) => setHomeData(data))
      .catch((err) => console.error(err));
  }, []);
  console.log(homeData?.hero?.slides);
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <Banner1 slides={homeData?.hero?.slides || []} />
        <Clients1 />
        <About6 about={homeData?.about || []} />
        {homeData?.home_sections?.items?.map((section) => (
          <DynamicSection key={section.id} section={section} />
        ))}
        <Services1 servicesData={homeData?.services || []} />
        <Marquee1 marqueeData={homeData?.marquee || []} />
        <Video1 videoData={homeData?.video || []} />
        <Gallery1 galleryData={homeData?.gallery || []} />
        <Pricing1 pricingData={homeData?.pricing || []} />
        <Contact1 />
        <Testimonial1 testimonialData={homeData?.testimonials || []} />
        <Team2 teamData={homeData?.team || []} />
        <Instagram1 />
        <Blog1 blogData={homeData?.blog || []} />
      </Layout>
    </>
  );
}

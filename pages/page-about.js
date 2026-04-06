import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/About5T1";
import Clients8 from "@/components/sections/Clients8";
import Contact1 from "@/components/sections/Contact1";
import PageTitle from "@/components/sections/PageTitle";
import Pricing1 from "@/components/sections/Pricing1";
import Testimonial1 from "@/components/sections/Testimonial1";
import Video1 from "@/components/sections/Video1";
import { useEffect, useState } from "react";

export default function PageAbout() {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true); // লোডিং স্টেট রাখা ভালো

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
        <PageTitle pageName="About Us" />
        <About1 aboutData={homeData?.about || {}} />

        <Clients8 />

        <Video1 videoData={homeData?.video || {}} />

        <Pricing1 pricingData={homeData?.pricing || {}} />

        <Contact1 />

        <Testimonial1 testimonialData={homeData?.testimonials || {}} />
      </Layout>
    </>
  );
}

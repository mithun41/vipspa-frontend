"use client";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import ServiceDetails from "@/components/sections/innerpages/ServiceDetails";

export default function PageServiceDetails() {
  // ১. একটি নতুন স্টেট নিন আইডি সেভ করার জন্য
  const [currentId, setCurrentId] = useState(null); 
  
  const [metaData, setMetaData] = useState({
    title: "Services Details",
    description: ""
  });

  const handleServiceChange = (service) => {
    // ২. সার্ভিস চেঞ্জ হলে আইডি সেট করুন
    setCurrentId(service.id); 
    
    setMetaData({
      title: service.meta_title || service.title,
      description: service.meta_description || ""
    });
  };

  return (
    <>
      <Layout 
        headerStyle={2} 
        footerStyle={2} 
        pageName="services"
        headTitle={metaData.title}
        metaDescription={metaData.description}
        // ৩. এখন currentId ব্যবহার করুন, selectedService নয়
        canonicalPath={currentId ? `/page-service-details?id=${currentId}` : `/page-service-details`}
      >
        <PageTitle pageName={metaData.title} />

        <ServiceDetails onServiceChange={handleServiceChange} />
      </Layout>
    </>
  );
}
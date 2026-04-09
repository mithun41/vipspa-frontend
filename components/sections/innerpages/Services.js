"use client";
import Link from "next/link";
import Services1 from "@/components/sections/Services7";
import Services3 from "@/components/sections/Services3";
import Services5 from "@/components/sections/Services2";
import { useEffect, useState } from "react";

const Services = () => {
  const [servicesData, setServicesData] = useState({
    general_services: [],
    top_services: [],
  });

  useEffect(() => {
    fetch("https://vipspa.pythonanywhere.com/api/vipspa/service-items/")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const general = data.filter(
            (item) => item.service_type === "general",
          );
          const top = data.filter((item) => item.service_type === "top");

          setServicesData({
            general_services: general,
            top_services: top,
          });
        }
      })
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  return (
    <>
      <section className="services-section pt-100">
        <Services1 services={servicesData.general_services} />
        <Services3 services={servicesData.top_services} />
        <div className="service1-pattrn1 bounce-y"></div>
      </section>
    </>
  );
};

export default Services;

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [loading, setLoading] = useState(true);

  // Accordion State for FAQ
  const [activeFaq, setActiveFaq] = useState(0);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(
          "https://vipspa.pythonanywhere.com/api/vipspa/services/",
        );
        setServices(res.data);
        if (res.data.length > 0) {
          setSelectedService(res.data[0]);
        }
      } catch (err) {
        console.error("Error loading services", err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const handleFaqClick = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  if (loading) return <div className="text-center py-5">Loading...</div>;

  return (
    <section className="services-details">
      <div className="container">
        <div className="row">
          {/* --- Sidebar Section --- */}
          <div className="col-xl-4 col-lg-4">
            <div className="service-sidebar">
              <div className="sidebar-widget service-sidebar-single">
                <div className="sidebar-service-list">
                  <ul>
                    {services.map((service) => (
                      <li
                        key={service.id}
                        className={
                          selectedService?.id === service.id ? "current" : ""
                        }
                      >
                        <a
                          onClick={() => setSelectedService(service)}
                          style={{ cursor: "pointer" }}
                        >
                          <i className="fas fa-angle-right"></i>
                          <span>{service.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Help Widget */}
                <div className="service-details-help">
                  <div className="help-shape-1"></div>
                  <div className="help-shape-2"></div>
                  <h2 className="help-title">
                    Contact with <br /> us for any <br /> advice
                  </h2>
                  <div className="help-icon">
                    <span className="lnr-icon-phone-handset"></span>
                  </div>
                  <div className="help-contact">
                    <p>Need help? Talk to an expert</p>
                    <a href="tel:12463330079">+892 ( 123 ) 112 - 9999</a>
                  </div>
                </div>

                {/* PDF Download Widget */}
                <div className="sidebar-widget service-sidebar-single mt-4">
                  <div className="service-sidebar-single-btn">
                    <Link href="#" className="theme-btn btn-style-one d-grid">
                      <span className="btn-title">
                        <span className="fas fa-file-pdf"></span> download pdf
                        file
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- Content Section --- */}
          <div className="col-xl-8 col-lg-8">
            {selectedService && (
              <div className="services-details__content">
                {/* Main Image */}
                <img
                  src={selectedService.background_image}
                  alt={selectedService.title}
                  style={{ width: "100%", borderRadius: "10px" }}
                />

                <h3 className="mt-4">{selectedService.title}</h3>
                <p>{selectedService.short_description}</p>
                <p>{selectedService.long_description}</p>

                <div className="content mt-40">
                  <div className="text">
                    <h3>Service Overview</h3>
                    <p>{selectedService.service_overview}</p>

                    <blockquote className="blockquote-one">
                      Relax, Recharge, and Rediscover yourself with our
                      professional {selectedService.title} treatments.
                    </blockquote>
                  </div>
                </div>

                {/* Dynamic FAQ Section */}
                {selectedService.faq_data &&
                  selectedService.faq_data.length > 0 && (
                    <div className="mt-25">
                      <h3>Frequently Asked Question</h3>
                      <p>
                        Find quick answers to your questions about our{" "}
                        {selectedService.title} service.
                      </p>

                      <ul className="accordion-box">
                        {selectedService.faq_data.map((faq, index) => (
                          <li key={index} className="accordion block">
                            <div
                              className={`acc-btn ${activeFaq === index ? "active" : ""}`}
                              onClick={() => handleFaqClick(index)}
                              style={{ cursor: "pointer" }}
                            >
                              {faq.q}
                              <div className="icon fa fa-plus"></div>
                            </div>
                            <div
                              className={`acc-content ${activeFaq === index ? "current" : ""}`}
                              style={{
                                display: activeFaq === index ? "block" : "none",
                              }}
                            >
                              <div className="content">
                                <div className="text">{faq.a}</div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;

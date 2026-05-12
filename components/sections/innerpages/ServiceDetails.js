import { useEffect, useState } from "react";
import axios from "axios";

const ServiceDetails = ({ onServiceChange }) => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeFaq, setActiveFaq] = useState(0);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(
          "https://vipspa.pythonanywhere.com/api/vipspa/services/",
        );
        setServices(res.data);

        if (res.data.length > 0) {
          const defaultService = res.data[0];
          setSelectedService(defaultService);
          // প্যারেন্টকে ডিফল্ট সার্ভিস ডাটা পাঠানো
          if (onServiceChange) onServiceChange(defaultService);
        }
      } catch (err) {
        console.error("Error loading services", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    // প্যারেন্টকে সিলেক্টেড সার্ভিস ডাটা পাঠানো (মেটা ডাটার জন্য)
    if (onServiceChange) onServiceChange(service);
  };

  const handleFaqClick = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  if (loading) return <div className="text-center py-5">Loading...</div>;

  return (
    <section className="services-details">
      <div className="container">
        <div className="row">
          {/* --- SIDEBAR --- */}
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
                          onClick={() => handleServiceClick(service)}
                          style={{ cursor: "pointer" }}
                        >
                          <i className="fas fa-angle-right"></i>
                          <span>{service.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

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
                    <a href="tel:+8801891450300">01891450300</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- CONTENT --- */}
          <div className="col-xl-8 col-lg-8">
            {selectedService && (
              <div className="services-details__content">
                <img
                  src={selectedService.background_image}
                  alt={selectedService.title}
                  style={{ width: "100%", borderRadius: "10px" }}
                />

                <h3 className="mt-4">{selectedService.title}</h3>

                <div
                  dangerouslySetInnerHTML={{
                    __html: selectedService.short_description || "",
                  }}
                />

                <div
                  className="mt-3"
                  dangerouslySetInnerHTML={{
                    __html: selectedService.long_description || "",
                  }}
                />

                <div className="content mt-40">
                  <div className="text">
                    <h3>Service Overview</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: selectedService.service_overview || "",
                      }}
                    />
                    <blockquote className="blockquote-one">
                      Relax, Recharge, and Rediscover yourself with our
                      professional {selectedService.title} treatments.
                    </blockquote>
                  </div>
                </div>

                {selectedService.faq_data &&
                  selectedService.faq_data.length > 0 && (
                    <div className="mt-25">
                      <h3>Frequently Asked Question</h3>
                      <ul className="accordion-box">
                        {selectedService.faq_data.map((faq, index) => (
                          <li key={index} className="accordion block">
                            <div
                              className={`acc-btn ${
                                activeFaq === index ? "active" : ""
                              }`}
                              onClick={() => handleFaqClick(index)}
                              style={{ cursor: "pointer" }}
                            >
                              {faq.q}
                              <div className="icon fa fa-plus"></div>
                            </div>

                            <div
                              className={`acc-content ${
                                activeFaq === index ? "current" : ""
                              }`}
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
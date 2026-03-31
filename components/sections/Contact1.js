import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact1 = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    form_name: "",
    form_email: "",
    form_subject: "",
    date: "",
    form_number: "",
    form_textarea: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_44wdx1u", // Replace with your EmailJS Service ID
        "template_d545bda", // Replace with your EmailJS Template ID
        form.current, // Pass the form reference
        "KA-ttVx2YeJhBmdAs" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          // console.log("Email sent successfully!", result.text);
          alert("Your appointment has been successfully scheduled");
          // Clear the form inputs
          setFormData({
            form_name: "",
            form_email: "",
            form_subject: "",
            date: "",
            form_number: "",
            form_textarea: "",
          });
        },
        (error) => {
          // console.error("Failed to send email:", error.text);
          alert("There was an error sending your booking.");
        }
      );
  };
  return (
    <>
      <section className="contact-section">
        <div
          className="bg bg-image"
          style={{
            backgroundImage: "url(/images/background/bg-contact1-1.jpg)",
          }}
        ></div>
        <div
          className="bg bg-image curved-shape-top"
          style={{
            backgroundImage: "url(/images/resource/curved-shape-top.png)",
          }}
        ></div>
        <div
          className="bg bg-image curved-shape-bottom"
          style={{
            backgroundImage: "url(/images/resource/curved-shape-bottom.png)",
          }}
        ></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              <div className="form-column offset-xl-7 col-xl-5 offset-lg-6 col-lg-6 offset-md-4 col-md-8">
                <div className="inner-column">
                  <div className="contact-form">
                    <div className="sec-title">
                      <figure className="image">
                        <img src="images/icons/icon1.png" alt="Image" />
                      </figure>
                      <span className="sub-title">Appointment</span>
                      <h3 className="words-slide-up text-split">Book Now</h3>
                      <div className="text">
                        Book your appointment now and immerse yourself in
                        ultimate relaxation at Vip Spa Dhaka.
                      </div>
                    </div>
                    <form
                      id="contact_form"
                      ref={form}
                      onSubmit={sendEmail}
                      name="contact_form"
                      method="post"
                    >
                      <div className="row">
                        <div className="form-group col-lg-6 col-md-6">
                          <input
                            type="text"
                            name="form_name"
                            placeholder="Name *"
                            required
                            value={formData.form_name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                          <input
                            type="email"
                            name="form_email"
                            placeholder="Email Address *"
                            required
                            value={formData.form_email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                          <input
                            type="select"
                            name="form_subject"
                            placeholder="Select Service *"
                            required
                            value={formData.form_subject}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                          <input
                            type="date"
                            name="date"
                            placeholder="Select Date *"
                            required
                            value={formData.date}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group col-lg-12 col-md-12">
                          <input
                            type="tel"
                            name="form_number"
                            placeholder="Number *"
                            required
                            value={formData.form_number}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group col-lg-12">
                          <textarea
                            name="form_textarea"
                            placeholder="Write a Message"
                            rows="2"
                            value={formData.form_textarea}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                        <div className="form-group col-lg-12">
                          <input name="form_botcheck" type="hidden" value="" />
                          <button
                            type="submit"
                            className="theme-btn btn-style-one mb-3 mb-sm-0"
                            data-loading-text="Please wait..."
                          >
                            <span className="btn-title">Book Now</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact1;

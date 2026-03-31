import Link from "next/link";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    form_name: "",
    form_email: "",
    form_subject: "",
    form_phone: "",
    form_message: "",
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
        "template_srx4608", // Replace with your EmailJS Template ID
        form.current, // Pass the form reference
        "KA-ttVx2YeJhBmdAs" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          alert("Your message has been sent!");
          // Clear the form inputs
          setFormData({
            form_name: "",
            form_email: "",
            form_subject: "",
            form_phone: "",
            form_message: "",
          });
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("There was an error sending your message.");
        }
      );
  };

  return (
    <>
      <section className="contact-details">
        <div className="container pt-110 pb-110">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="sec-title">
                <span className="sub-title">Send us email</span>
                <h2>Feel free to write</h2>
              </div>
              {/* Contact Form */}
              <form
                ref={form}
                onSubmit={sendEmail}
                id="contact_form"
                name="contact_form"
                method="post"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_name"
                        className="form-control"
                        type="text"
                        placeholder="Enter Name"
                        value={formData.form_name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_email"
                        className="form-control required email"
                        type="email"
                        placeholder="Enter Email"
                        value={formData.form_email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_subject"
                        className="form-control required"
                        type="text"
                        placeholder="Enter Subject"
                        value={formData.form_subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_phone"
                        className="form-control"
                        type="text"
                        placeholder="Enter Phone"
                        value={formData.form_phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    name="form_message"
                    className="form-control required"
                    rows="7"
                    placeholder="Enter Message"
                    value={formData.form_message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input
                    name="form_botcheck"
                    className="form-control"
                    type="hidden"
                    value=""
                  />
                  <button
                    type="submit"
                    value="Send"
                    className="theme-btn btn-style-one me-2"
                    data-loading-text="Please wait..."
                  >
                    <span className="btn-title">Send message</span>
                  </button>
                  <button
                    type="reset"
                    className="theme-btn btn-style-one"
                    onClick={() =>
                      setFormData({
                        form_name: "",
                        form_email: "",
                        form_subject: "",
                        form_phone: "",
                        form_message: "",
                      })
                    }
                  >
                    <span className="btn-title">Reset</span>
                  </button>
                </div>
              </form>
              {/* Contact Form Validation */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

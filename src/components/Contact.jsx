import React, { useState } from "react";

const Contact = ({ activePage }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const isFormValid =
    formData.fullname.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form submitted", formData);
      // Here you would typically send the data to a server
    }
  };

  return (
    <article
      className={`contact ${activePage === "contact" ? "active" : ""}`}
      data-page="contact"
    >
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="contact-prompt" style={{ marginBottom: "35px" }}>
        <h3 className="h3 form-title" style={{ marginBottom: "15px" }}>
          Let's Build Something Awesome!
        </h3>
        <p
          style={{
            color: "var(--light-gray)",
            fontSize: "15px",
            lineHeight: "1.6",
            marginBottom: "25px",
            fontWeight: "300",
          }}
        >
          I'm currently actively looking for new exciting opportunities. Whether
          you have an innovative project idea, want to discuss scalable system
          design, or simply just want to say hi, my inbox is completely open!
          I'll try my best to get back to you as soon as possible.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          {/* Email Info Card */}
          <a
            href="mailto:saheb142003@gmail.com"
            style={{
              background: "var(--border-gradient-onyx)",
              padding: "20px",
              borderRadius: "14px",
              border: "1px solid var(--jet)",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              boxShadow: "var(--shadow-1)",
              transition: "transform 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.borderColor =
                "var(--orange-yellow-crayola)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "var(--jet)";
            }}
          >
            <div
              className="icon-box"
              style={{
                background: "var(--eerie-black-1)",
                color: "var(--orange-yellow-crayola)",
                fontSize: "22px",
                borderRadius: "10px",
                width: "45px",
                height: "45px",
              }}
            >
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div>
              <p
                style={{
                  color: "var(--light-gray-70)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  marginBottom: "3px",
                  fontWeight: "500",
                  letterSpacing: "0.5px",
                }}
              >
                Email Me Directly
              </p>
              <h4
                style={{
                  color: "var(--white-2)",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                saheb142003@gmail.com
              </h4>
            </div>
          </a>

          {/* LinkedIn Info Card */}
          <a
            href="https://linkedin.com/in/saheb142003"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--border-gradient-onyx)",
              padding: "20px",
              borderRadius: "14px",
              border: "1px solid var(--jet)",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              boxShadow: "var(--shadow-1)",
              transition: "transform 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.borderColor =
                "var(--orange-yellow-crayola)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "var(--jet)";
            }}
          >
            <div
              className="icon-box"
              style={{
                background: "var(--eerie-black-1)",
                color: "#0A66C2",
                fontSize: "22px",
                borderRadius: "10px",
                width: "45px",
                height: "45px",
              }}
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </div>
            <div>
              <p
                style={{
                  color: "var(--light-gray-70)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  marginBottom: "3px",
                  fontWeight: "500",
                  letterSpacing: "0.5px",
                }}
              >
                Connect Professionally
              </p>
              <h4
                style={{
                  color: "var(--white-2)",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                in/saheb142003
              </h4>
            </div>
          </a>
        </div>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form className="form" data-form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
              value={formData.fullname}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            className="form-btn"
            type="submit"
            disabled={!isFormValid}
            data-form-btn
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;

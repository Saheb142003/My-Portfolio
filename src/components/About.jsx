import React, { useState } from "react";

const About = ({ activePage }) => {
  const [modalData, setModalData] = useState({
    isOpen: false,
    avatar: "",
    title: "",
    date: "",
    text: "",
  });

  const testimonials = [
    {
      avatar: "/assets/images/avatar-1.png",
      title: "Daniel lewis",
      date: "14 June, 2021",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    },
    {
      avatar: "/assets/images/avatar-2.png",
      title: "Jessica miller",
      date: "14 June, 2021",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    },
    {
      avatar: "/assets/images/avatar-3.png",
      title: "Emily evans",
      date: "14 June, 2021",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    },
    {
      avatar: "/assets/images/avatar-4.png",
      title: "Henry william",
      date: "14 June, 2021",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    },
  ];

  const openModal = (testimonial) => {
    setModalData({
      isOpen: true,
      ...testimonial,
    });
  };

  const closeModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  return (
    <article
      className={`about ${activePage === "about" ? "active" : ""}`}
      data-page="about"
    >
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I am an aspiring Software Engineer with a strong passion for building
          impactful software. As a strong problem solver, I enjoy tackling
          complex challenges and delivering robust, scalable solutions.
        </p>

        <p>
          My core expertise lies in full-stack development, backend systems, and
          API-driven applications. I have significant technical strength in the
          MERN stack (MongoDB, Express.js, React.js, Node.js), cloud deployment,
          and comprehensive database design. I continually strive to build
          systems that are highly optimized, modular, and performant.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginTop: "25px",
            padding: "15px 20px",
            background: "var(--border-gradient-onyx)",
            borderRadius: "14px",
            border: "1px solid var(--jet)",
            width: "fit-content",
          }}
        >
          <span
            style={{
              color: "var(--light-gray)",
              fontSize: "15px",
              fontWeight: "500",
              marginRight: "10px",
            }}
          >
            Connect with me:
          </span>

          <a
            href="https://github.com/saheb142003"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "var(--eerie-black-1)",
              border: "1px solid var(--jet)",
              transition: "all 0.3s ease",
              color: "#F0F6FC",
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
            <ion-icon
              name="logo-github"
              style={{ fontSize: "20px" }}
            ></ion-icon>
          </a>

          <a
            href="https://linkedin.com/in/saheb142003"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "var(--eerie-black-1)",
              border: "1px solid var(--jet)",
              transition: "all 0.3s ease",
              color: "#0A66C2",
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
            <ion-icon
              name="logo-linkedin"
              style={{ fontSize: "20px" }}
            ></ion-icon>
          </a>

          <a
            href="https://leetcode.com/u/saheb142003"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            title="LeetCode"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "var(--eerie-black-1)",
              border: "1px solid var(--jet)",
              transition: "all 0.3s ease",
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
            <img
              src="https://cdn.simpleicons.org/leetcode/FFA116"
              alt="LeetCode"
              width="18"
              height="18"
            />
          </a>
        </div>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-dev.svg"
                alt="Full Stack Development icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Full-Stack Development</h4>
              <p className="service-item-text">
                Building scalable MERN stack web applications with responsive
                React frontends and Node.js backends.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-app.svg"
                alt="Backend API icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Backend & APIs</h4>
              <p className="service-item-text">
                Designing and implementing RESTful APIs, JWT authentication,
                OAuth, and modular backend services.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-design.svg"
                alt="Database Design icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Database Design</h4>
              <p className="service-item-text">
                Creating efficient MongoDB and MySQL schemas, optimizing
                queries, and implementing data architectures.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-dev.svg"
                alt="Cloud Deployment icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Cloud Deployment</h4>
              <p className="service-item-text">
                Deploying applications using Docker, Render, and Netlify to
                ensure high availability and performance.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;

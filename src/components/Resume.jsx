import React from "react";
import udemyImg from "../assets/certificates/udemy.jpg";
import saylorImg from "../assets/certificates/saylor.jpg";
import nptelImg from "../assets/certificates/nptel.jpg";
import resumePdf from "../assets/Resume.pdf";

const Resume = ({ activePage }) => {
  const skillsData = [
    {
      title: "Languages",
      skills: [
        { name: "C", icon: "code-slash-outline", color: "#00599C" },
        { name: "C++", icon: "code-slash-outline", color: "#00599C" },
        { name: "Python", icon: "logo-python", color: "#3776AB" },
        { name: "JavaScript", icon: "logo-javascript", color: "#F7DF1E" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: "logo-html5", color: "#E34F26" },
        { name: "CSS", icon: "logo-css3", color: "#1572B6" },
        { name: "React.js", icon: "logo-react", color: "#61DAFB" },
        {
          name: "Tailwind CSS",
          icon: "color-palette-outline",
          color: "#38B2AC",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "logo-nodejs", color: "#339933" },
        { name: "Express.js", icon: "server-outline", color: "#FFFFFF" },
        { name: "MongoDB", icon: "leaf-outline", color: "#47A248" },
        { name: "MySQL", icon: "MySQL", color: "#4479A1" },
        {
          name: "REST APIs",
          icon: "swap-horizontal-outline",
          color: "#4DA1FF",
        },
        { name: "JWT Auth", icon: "key-outline", color: "#00B4E6" },
        { name: "OAuth", icon: "shield-checkmark-outline", color: "#FFD166" },
        { name: "Redis", icon: "layers-outline", color: "#DC382D" },
        { name: "WebSocket", icon: "pulse-outline", color: "#FF0084" },
        { name: "Docker", icon: "logo-docker", color: "#2496ED" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: "git-merge-outline", color: "#F05032" },
        { name: "GitHub", icon: "logo-github", color: "#FFFFFF" },
        { name: "Postman", icon: "paper-plane-outline", color: "#FF6C37" },
        { name: "VS Code", icon: "code-slash-outline", color: "#007ACC" },
        { name: "Render", icon: "cloud-upload-outline", color: "#46E3B7" },
        { name: "Netlify", icon: "Netlify", color: "#00C7B7" },
        { name: "Vercel", icon: "Vercel", color: "#00C7B7" },
        { name: "AI", icon: "AI", color: "#00C7B7" },
      ],
    },
  ];

  /* Ensure we have a decent fallback for icons */
  const getIcon = (iconName) => {
    if (iconName === "logo-c" || iconName === "logo-closed-captioning")
      return "code-slash-outline";
    return iconName;
  };

  const certData = [
    {
      title: "Full Stack Web Developer",
      platform: "Udemy",
      thumbnail: udemyImg,
      externalLink:
        "https://udemy-certificate.s3.amazonaws.com/pdf/UC-53a9e3f1-cb41-4419-9419-d5271a67b741.pdf",
    },

    {
      title: "Programming in Java",
      platform: "IIT Kharagpur (NPTEL)",
      thumbnail: nptelImg,
      externalLink:
        "https://drive.google.com/file/d/1QZ_C8XfGIxVyAqLyvEtRDfPKWdStqbn-/view",
    },
    {
      title: "Building with AI",
      platform: "Saylor Academy",
      thumbnail: saylorImg,
      externalLink:
        "https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1763391491/0368517683MA.pdf",
    },
  ];

  return (
    <article
      className={`resume ${activePage === "resume" ? "active" : ""}`}
      data-page="resume"
    >
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div
          className="title-wrapper"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <div className="icon-box" style={{ margin: 0 }}>
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 className="h3" style={{ margin: 0 }}>
              Education
            </h3>
          </div>
          <div style={{ position: "relative", zIndex: 2 }}>
            <a
              href={resumePdf}
              onClick={(e) => {
                e.preventDefault();
                // Open in new tab
                window.open(resumePdf, "_blank", "noopener,noreferrer");
                // Trigger local download
                const link = document.createElement("a");
                link.href = resumePdf;
                link.download = "Saheb-Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="resume-download-btn"
              aria-label="Download Resume PDF"
            >
              Download CV
              <ion-icon name="cloud-download-outline"></ion-icon>
            </a>
          </div>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <h4 className="h4 timeline-item-title" style={{ margin: 0 }}>
                JIS University, Kolkata
              </h4>
              <span style={{ color: "var(--vegas-gold)", fontWeight: 500 }}>
                2022 — 2026
              </span>
            </div>
            <p className="timeline-text" style={{ marginTop: "10px" }}>
              B-Tech (CSE). Current CGPA -
              <b style={{ fontWeight: "bold" }}> 8.56 </b>
            </p>
          </li>
          <li className="timeline-item">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <h4 className="h4 timeline-item-title" style={{ margin: 0 }}>
                R S More College, Dhanbad
              </h4>
              <span style={{ color: "var(--vegas-gold)", fontWeight: 500 }}>
                2020 — 2022
              </span>
            </div>
            <p className="timeline-text" style={{ marginTop: "10px" }}>
              Intermediate. Scored -{" "}
              <b style={{ fontWeight: "bold" }}> 86.60 </b>%.
            </p>
          </li>
          <li className="timeline-item">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <h4 className="h4 timeline-item-title" style={{ margin: 0 }}>
                Roy Academy, Dhanbad
              </h4>
              <span style={{ color: "var(--vegas-gold)", fontWeight: 500 }}>
                2019 — 2020
              </span>
            </div>
            <p className="timeline-text" style={{ marginTop: "10px" }}>
              Matriculation. Scored -{" "}
              <b style={{ fontWeight: "bold" }}> 85.20 </b>%.
            </p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="trophy-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience & Achievements</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <h4 className="h4 timeline-item-title" style={{ margin: 0 }}>
                Full-Stack Development
              </h4>
            </div>
            <p className="timeline-text" style={{ marginTop: "10px" }}>
              Developed end-to-end MERN stack applications featuring real-time,
              API-driven architectures and role-based access. Built over 20+
              projects on GitHub.
            </p>
          </li>
          <li className="timeline-item">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <h4 className="h4 timeline-item-title" style={{ margin: 0 }}>
                Problem Solving & DSA
              </h4>
            </div>
            <p className="timeline-text" style={{ marginTop: "10px" }}>
              Solved 350+ data structures and algorithms problems. Achieved a
              1500+ contest rating on LeetCode.
            </p>
          </li>
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <div className="skills-list content-card">
          {skillsData.map((category, index) => (
            <div
              key={index}
              style={{
                marginBottom: index === skillsData.length - 1 ? "0" : "30px",
              }}
            >
              <h4 className="h4" style={{ marginBottom: "15px" }}>
                {category.title}
              </h4>
              <ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  padding: 0,
                  listStyle: "none",
                }}
              >
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="skill-chip"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "8px 16px",
                      background: "var(--border-gradient-onyx)",
                      borderRadius: "10px",
                      fontSize: "14px",
                      color: "var(--light-gray)",
                      border: "1px solid var(--jet)",
                      boxShadow: "var(--shadow-1)",
                      textTransform: "capitalize",
                      transition: "0.3s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color =
                        "var(--orange-yellow-crayola)";
                      e.currentTarget.style.borderColor =
                        "var(--orange-yellow-crayola)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--light-gray)";
                      e.currentTarget.style.borderColor = "var(--jet)";
                    }}
                  >
                    {skill.icon === "MySQL" ? (
                      <img
                        src="https://cdn.simpleicons.org/mysql/4479A1"
                        alt="MySQL"
                        width="18"
                        height="18"
                      />
                    ) : skill.icon === "Vercel" ? (
                      <img
                        src="https://cdn.simpleicons.org/vercel/white"
                        alt="Vercel"
                        width="18"
                        height="18"
                      />
                    ) : skill.icon === "Netlify" ? (
                      <img
                        src="https://cdn.simpleicons.org/netlify/00C7B7"
                        alt="Netlify"
                        width="18"
                        height="18"
                      />
                    ) : skill.icon === "AI" ? (
                      <ion-icon
                        name="sparkles"
                        style={{
                          fontSize: "20px",
                          color: skill.color || "inherit",
                          transition: "transform 0.3s ease",
                        }}
                      ></ion-icon>
                    ) : (
                      <ion-icon
                        name={getIcon(skill.icon)}
                        style={{
                          fontSize: "20px",
                          color: skill.color || "inherit",
                          transition: "transform 0.3s ease",
                        }}
                      ></ion-icon>
                    )}
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS SECTION AT THE BOTTOM */}
      <section className="timeline" style={{ marginTop: "40px" }}>
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="ribbon-outline"></ion-icon>
          </div>
          <h3 className="h3">Certifications</h3>
        </div>

        <ul
          style={{
            display: "flex",
            gap: "20px",
            padding: "0 0 15px 0",
            listStyle: "none",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
          className="has-scrollbar"
        >
          {certData.map((cert, idx) => (
            <li
              key={idx}
              style={{ margin: 0, flex: "0 0 auto", scrollSnapAlign: "start" }}
            >
              <a
                href={cert.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "250px" /* Reduced card width */,
                  height: "100%",
                  background: "var(--border-gradient-onyx)",
                  border: "1px solid var(--jet)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  textDecoration: "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  transition: "transform 0.3s ease, border-color 0.3s ease",
                  position: "relative",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor =
                    "var(--orange-yellow-crayola)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--jet)";
                }}
              >
                {/* IMAGE THUMBNAIL WRAPPER */}
                <div
                  style={{
                    width: "100%",
                    height: "150px" /* Reduced height */,
                    overflow: "hidden",
                    borderBottom: "1px solid var(--jet)",
                    background: "var(--eerie-black-1)",
                  }}
                >
                  <img
                    src={cert.thumbnail}
                    alt={cert.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* CARD DETAILS */}
                <div
                  style={{
                    padding: "15px" /* Reduced padding */,
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <p
                    style={{
                      marginBottom: "6px",
                      color: "var(--light-gray)",
                      fontSize: "12px",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {cert.platform}
                  </p>
                  <h3
                    style={{
                      marginBottom: "10px",
                      textTransform: "capitalize",
                      color: "var(--white-2)",
                      fontSize: "15px",
                      fontWeight: 600,
                      lineHeight: 1.3,
                    }}
                  >
                    {cert.title}
                  </h3>
                  <div
                    style={{
                      marginTop: "auto",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "13px",
                      fontWeight: "600",
                      paddingTop: "12px",
                      borderTop: "1px solid var(--jet)",
                      width: "100%",
                      transition: "color 0.3s ease",
                      color: "var(--orange-yellow-crayola)",
                    }}
                  >
                    View Official Credential
                    <ion-icon
                      name="arrow-forward-outline"
                      style={{
                        fontSize: "15px",
                        transform: "translateY(1px)",
                      }}
                    ></ion-icon>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="skill" style={{ marginTop: "40px" }}>
        <h3 className="h3 skills-title">Interests</h3>
        <div className="skills-list content-card">
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              padding: 0,
              listStyle: "none",
            }}
          >
            {[
              {
                name: "Chess & Strategic Games",
                icon: "game-controller-outline",
              },
              { name: "Coding & System Design", icon: "laptop-outline" },
              {
                name: "Scalable System Architectures",
                icon: "share-social-outline",
              },
            ].map((interest, idx) => (
              <li
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 20px",
                  background: "var(--border-gradient-onyx)",
                  borderRadius: "12px",
                  fontSize: "15px",
                  color: "var(--white-2)",
                  border: "1px solid var(--jet)",
                  boxShadow: "var(--shadow-1)",
                  fontWeight: "500",
                }}
              >
                <ion-icon
                  name={interest.icon}
                  style={{
                    fontSize: "20px",
                    color: "var(--orange-yellow-crayola)",
                  }}
                ></ion-icon>
                {interest.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
};

export default Resume;

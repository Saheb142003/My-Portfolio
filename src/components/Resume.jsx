import React from "react";

const Resume = ({ activePage }) => {
  const skillsData = [
    {
      title: "Languages",
      skills: [
        { name: "C", icon: "code-slash-outline" },
        { name: "C++", icon: "code-slash-outline" },
        { name: "Python", icon: "logo-python" },
        { name: "JavaScript", icon: "logo-javascript" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: "logo-html5" },
        { name: "CSS", icon: "logo-css3" },
        { name: "React.js", icon: "logo-react" },
        { name: "Tailwind CSS", icon: "color-palette-outline" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "logo-nodejs" },
        { name: "Express.js", icon: "server-outline" },
        { name: "MongoDB", icon: "leaf-outline" },
        { name: "MySQL", icon: "database-outline" },
        { name: "REST APIs", icon: "swap-horizontal-outline" },
        { name: "JWT Auth", icon: "key-outline" },
        { name: "OAuth", icon: "shield-checkmark-outline" },
        { name: "Redis", icon: "layers-outline" },
        { name: "WebSocket", icon: "pulse-outline" },
        { name: "Docker", icon: "logo-docker" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: "git-branch-outline" },
        { name: "GitHub", icon: "logo-github" },
        { name: "Postman", icon: "paper-plane-outline" },
        { name: "VS Code", icon: "code-working-outline" },
        { name: "Render", icon: "cloud-upload-outline" },
        { name: "Netlify", icon: "globe-outline" },
      ],
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
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">JIS University, Kolkata</h4>
            <span>2022 — 2026</span>
            <p className="timeline-text">
              B-Tech in Computer Science and Engineering (CSE). Current CGPA:
              8.56
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              R S More College, Dhanbad
            </h4>
            <span>2020 — 2022</span>
            <p className="timeline-text">Intermediate. Scored 86.60%.</p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Roy Academy, Dhanbad</h4>
            <span>2019 — 2020</span>
            <p className="timeline-text">Matriculation. Scored 85.20%.</p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience & Achievements</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Full-Stack Development</h4>
            <span>2022 — Present</span>
            <p className="timeline-text">
              Developed end-to-end MERN stack applications featuring real-time,
              API-driven architectures and role-based access. Built over 20+
              projects on GitHub.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Problem Solving & DSA</h4>
            <span>2022 — Present</span>
            <p className="timeline-text">
              Solved 350+ data structures and algorithms problems. Achieved a
              1500+ contest rating on LeetCode.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Certifications</h4>
            <span>Various</span>
            <p className="timeline-text">
              Full Stack Web Developer (Udemy), Building with AI (Saylor),
              Programming in Java (IIT Kharagpur).
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
                    }}
                  >
                    <ion-icon
                      name={skill.icon}
                      style={{
                        fontSize: "18px",
                        color: "var(--orange-yellow-crayola)",
                      }}
                    ></ion-icon>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default Resume;

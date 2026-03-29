import React, { useState } from "react";
import leanstream from "../assets/leanstream.JPG";
import cravespace from "../assets/cravespace.JPG";
import bookExchange from "../assets/Book Exchange.JPG";
import sujalInsurance from "../assets/Sujal Insurance.JPG";
import xAudios from "../assets/x-audios 1.JPG";
import paintSimply from "../assets/paint-simply.JPG";
import ipTracker from "../assets/IP Address Tracker.JPG";
import typingGame from "../assets/Typing game.JPG";
import quizApp from "../assets/quiz app.JPG";

const Projects = ({ activePage }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const categories = ["All", "Full-stack", "Frontend"];

  const projects = [
    {
      id: 1,
      title: "LearnStream - AI Ed-Tech",
      category: "Full-stack",
      img: leanstream,
      link: "https://learnstream.netlify.app/",
      stack: "Node.js, Express.js, MongoDB, React.js, OpenAI API",
      points: [
        "AI quiz generation from YouTube transcripts.",
        "Secure auth, rich APIs (30+), and progress tracking.",
      ],
    },
    {
      id: 2,
      title: "CraveYard - Food Marketplace",
      category: "Full-stack",
      img: cravespace,
      link: "https://cravespace.netlify.app",
      stack: "React.js, Node.js, Express.js, MongoDB",
      points: [
        "Multi-vendor platform with listings, ratings, & reviews.",
        "Modular backend services with zero-downtime architecture.",
      ],
    },
    {
      id: 3,
      title: "Book Reselling App",
      category: "Full-stack",
      img: bookExchange,
      link: "https://book-reselling-app.vercel.app/explore",
      stack: "MERN Stack",
      points: [
        "Platform for users to list and buy books with an admin panel.",
        "Automatic 5% platform fee deduction on every sale.",
      ],
    },
    {
      id: 4,
      title: "Sujal Insurance Management",
      category: "Full-stack",
      img: sujalInsurance,
      link: "https://sujalinsurance.netlify.app",
      stack: "MERN Stack",
      points: [
        "Freelance agency system to manage policies and user records.",
        "Automated expiry notifications to ensure high retention.",
      ],
    },
    {
      id: 5,
      title: "X-audios",
      category: "Frontend",
      img: xAudios,
      link: "https://x-audios.netlify.app",
      stack: "HTML, CSS, JavaScript",
      points: [
        "Modern frontend interface for a digital music platform.",
        "Fully responsive layout utilizing semantic structure.",
      ],
    },
    {
      id: 6,
      title: "Paint-simply",
      category: "Frontend",
      img: paintSimply,
      link: "https://paint-simply.netlify.app",
      stack: "HTML, CSS, JavaScript",
      points: [
        "Browser-based drawing application with a responsive canvas.",
        "Dynamic brush sizes, colors, and clearing tools.",
      ],
    },
    {
      id: 7,
      title: "IP Address Tracker",
      category: "Frontend",
      img: ipTracker,
      link: "https://track-ip-location.netlify.app",
      stack: "HTML, CSS, JS, Geolocation API",
      points: [
        "Frontend Mentor challenge with accurate IP tracking capabilities.",
        "Real-time data plotting on an interactive geographic map.",
      ],
    },
    {
      id: 8,
      title: "Speedy Type",
      category: "Frontend",
      img: typingGame,
      link: "https://speedy-type.netlify.app",
      stack: "HTML, CSS, JavaScript",
      points: [
        "Minimalistic typing test game simulating WPM progression.",
        "Built purely using native DOM elements and event listeners.",
      ],
    },
    {
      id: 9,
      title: "Skill-X 2024 Quiz",
      category: "Frontend",
      img: quizApp,
      link: "https://skill-x-2024.netlify.app",
      stack: "HTML, CSS, JavaScript",
      points: [
        "Quiz evaluation app built for college Skill-X competition.",
        "Features dynamic loading of logic questions and score calculation.",
      ],
    },
  ];

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    setIsSelectOpen(false);
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category.toLowerCase() === selectedCategory.toLowerCase(),
        );

  return (
    <article
      className={`portfolio ${activePage === "projects" ? "active" : ""}`}
      data-page="projects"
    >
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {categories.map((category) => (
            <li className="filter-item" key={category}>
              <button
                className={selectedCategory === category ? "active" : ""}
                onClick={() => handleFilterClick(category)}
                data-filter-btn
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button
            className={`filter-select ${isSelectOpen ? "active" : ""}`}
            onClick={() => setIsSelectOpen(!isSelectOpen)}
            data-select
          >
            <div className="select-value" data-selecct-value>
              {selectedCategory === "All"
                ? "Select category"
                : selectedCategory}
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className={`select-list ${isSelectOpen ? "active" : ""}`}>
            {categories.map((category) => (
              <li className="select-item" key={category}>
                <button
                  onClick={() => handleFilterClick(category)}
                  data-select-item
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category.toLowerCase()}
              key={project.id}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.img} alt={project.title} loading="lazy" />
                </figure>

                <div
                  style={{
                    padding: "0 5px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <h3
                    className="project-title"
                    style={{ marginTop: "15px", textTransform: "capitalize" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="project-category"
                    style={{ marginBottom: "15px" }}
                  >
                    {project.category}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginBottom: "15px",
                    }}
                  >
                    {project.stack.split(", ").map((tech, i) => (
                      <span
                        key={i}
                        style={{
                          background: "var(--border-gradient-onyx)",
                          border: "1px solid var(--jet)",
                          color: "var(--orange-yellow-crayola)",
                          fontSize: "11px",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          fontWeight: "600",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul
                    style={{
                      fontSize: "13px",
                      color: "var(--light-gray)",
                      paddingLeft: "14px",
                      listStyleType: "circle",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      marginBottom: "20px",
                    }}
                  >
                    {project.points.map((pt, i) => (
                      <li key={i} style={{ lineHeight: "1.5" }}>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div
                    style={{
                      marginTop: "auto",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "var(--white-2)",
                      fontSize: "14px",
                      fontWeight: "600",
                      padding: "10px 0",
                      borderTop: "1px solid var(--jet)",
                      width: "100%",
                    }}
                  >
                    <span style={{ color: "var(--orange-yellow-crayola)" }}>
                      Live Demo
                    </span>{" "}
                    <ion-icon
                      name="open-outline"
                      style={{
                        fontSize: "16px",
                        color: "var(--orange-yellow-crayola)",
                      }}
                    ></ion-icon>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Projects;

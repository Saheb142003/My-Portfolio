import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

import Contact from "./components/Contact";
import Seo from "./components/Seo";

const App = () => {
  const location = useLocation();

  const routeSeo = {
    "/": {
      title: "Software Engineer Portfolio",
      description:
        "I am an aspiring Software Engineer focused on full-stack development with React, Node.js, MongoDB, and scalable web systems. Explore my projects, resume, and contact details.",
    },
    "/resume": {
      title: "Resume",
      description:
        "Resume of Md Sahebuddin Ansari: education, skills, experience, and certifications. Download the PDF and view official credentials.",
    },
    "/projects": {
      title: "Projects",
      description:
        "Selected full-stack and frontend projects by Md Sahebuddin Ansari, including LearnStream, CraveYard, Sujal Insurance Management, and more.",
    },
    "/contact": {
      title: "Contact",
      description:
        "Contact Md Sahebuddin Ansari for software engineering opportunities and collaborations. Email, location, and social links.",
    },
  };

  const seo = routeSeo[location.pathname] || routeSeo["/"];

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<About activePage="about" />} />
            <Route path="/resume" element={<Resume activePage="resume" />} />
            <Route
              path="/projects"
              element={<Projects activePage="projects" />}
            />
            <Route path="/contact" element={<Contact activePage="contact" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;

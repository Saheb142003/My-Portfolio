import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

import Contact from "./components/Contact";

const App = () => {
  const [activePage, setActivePage] = useState("about");

  return (
    <>
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar activePage={activePage} setActivePage={setActivePage} />
          <About activePage={activePage} />
          <Resume activePage={activePage} />
          <Projects activePage={activePage} />
          <Contact activePage={activePage} />
        </div>
      </main>
    </>
  );
};

export default App;

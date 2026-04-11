import React, { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { ActivityCalendar } from "react-activity-calendar";

const About = ({ activePage }) => {
  const [leetCodeData, setLeetCodeData] = useState([]);
  const [loadingLeetCode, setLoadingLeetCode] = useState(true);

  // Fetch LeetCode Data and prepare an array for 365 Days
  useEffect(() => {
    // Switching to a more reliable Vercel-based stats API to bypass Heroku CORS limits
    fetch("https://leetcode-api-faisal.vercel.app/saheb142003")
      .then((res) => res.json())
      .then((data) => {
        // The Faisal API returns submissionCalendar as a JSON string or object
        const subCalendar =
          typeof data.submissionCalendar === "string"
            ? JSON.parse(data.submissionCalendar)
            : data.submissionCalendar;

        if (subCalendar) {
          const today = new Date();
          const oneYearAgo = new Date();
          oneYearAgo.setFullYear(today.getFullYear() - 1);

          const calendarData = [];
          for (
            let d = new Date(oneYearAgo);
            d <= today;
            d.setDate(d.getDate() + 1)
          ) {
            calendarData.push({
              date: d.toISOString().split("T")[0],
              count: 0,
              level: 0,
            });
          }

          const mappedData = {};
          Object.keys(subCalendar).forEach((timestamp) => {
            const dateStr = new Date(timestamp * 1000)
              .toISOString()
              .split("T")[0];
            mappedData[dateStr] = subCalendar[timestamp];
          });

          const finalData = calendarData.map((day) => {
            const count = mappedData[day.date] || 0;
            return {
              date: day.date,
              count: count,
              level: count >= 4 ? 4 : count === 3 ? 3 : count >= 1 ? 2 : 0,
            };
          });

          setLeetCodeData(finalData);
        }
      })
      .catch((err) => {
        console.error("Error fetching LeetCode data", err);
        // Fallback: Show empty calendar instead of error if API fails
        setLeetCodeData([]);
      })
      .finally(() => setLoadingLeetCode(false));
  }, []);

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

      {/* LEETCODE CALENDAR SECTION */}
      <section className="heatmap-section" style={{ marginBottom: "40px" }}>
        <div
          className="title-wrapper"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginBottom: "25px",
          }}
        >
          <h3 className="h3" style={{ margin: 0, display: "flex" }}>
            Coding Activity accross
            <span
              style={{
                marginLeft: "15px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "var(--orange-yellow-crayola)",
              }}
            >
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
            </span>
          </h3>
        </div>
        <div
          className="calendar-scroll-box"
          style={{
            color: "var(--light-gray)",
            marginTop: "10px",
          }}
        >
          {loadingLeetCode ? (
            <p
              style={{
                color: "var(--light-gray)",
                fontStyle: "italic",
                textAlign: "center",
                width: "100%",
              }}
            >
              Fetching LeetCode & Github submissions...
            </p>
          ) : leetCodeData.length > 0 ? (
            <div className="calendar-inner">
              <ActivityCalendar
                data={leetCodeData}
                colorScheme="dark"
                theme={{
                  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                }}
                labels={{
                  totalCount: `{{count}} submissions in the last year`,
                }}
                blockSize={12}
                blockMargin={4}
                fontSize={14}
              />
            </div>
          ) : (
            <p
              style={{
                color: "var(--light-gray)",
                textAlign: "center",
                width: "100%",
              }}
            >
              No recent submissions available.
            </p>
          )}
        </div>
      </section>
    </article>
  );
};

export default About;

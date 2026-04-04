import React, { useState } from "react";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <aside className={`sidebar ${isActive ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src="/assets/images/my-avatar.png"
            alt="Md Sahebuddin Ansari"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1
            className="name"
            title="Md Sahebuddin Ansari"
            style={{
              whiteSpace: "normal",
              wordBreak: "break-word",
              fontSize: "1.3rem",
              lineHeight: "1.3",
            }}
          >
            Md Sahebuddin Ansari
          </h1>
          <p className="title">Aspiring Software Engineer</p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setIsActive(!isActive)}
          data-sidebar-btn
        >
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box" style={{ color: "#EA4335" }}>
              <ion-icon name="mail"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:saheb142003@gmail.com" className="contact-link">
                saheb142003@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box" style={{ color: "#34A853" }}>
              <ion-icon name="call"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+919113111384" className="contact-link">
                +91-9113111384
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box" style={{ color: "#FBBC05" }}>
              <ion-icon name="location"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Kolkata, India</address>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

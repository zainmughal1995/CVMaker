// PersonalInfo.jsx
// Tailwind removed — Basic CSS used
// Functionality unchanged

import React from "react";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const styles = {
  container: {
    textAlign: "center",
    marginBottom: "20px",
  },
  name: {
    fontSize: "40px",
    fontWeight: 800,
  },
  title: {
    fontSize: "18px",
    fontFamily: "sans-serif",
    textTransform: "uppercase",
  },
  location: {
    fontSize: "14px",
  },
  contact: {
    fontSize: "14px",
  },
  linksRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",

    color: "#374151",
  },
  linkGroup: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  link: {
    color: "#2563EB",
    textDecoration: "none",
  },
};

const PersonalInfo = ({ data }) => {
  return (
    <div style={styles.container}>
      {/* Name */}
      <h1 style={styles.name}>{data.name}</h1>

      {/* Title */}
      <p style={styles.title}>{data.title}</p>

      {/* Location */}
      <p style={styles.location}>{data.location}</p>

      {/* Contact */}
      <p style={styles.contact}>
        {data.contact.whatsapp} | {data.contact.email}
      </p>

      <div style={styles.linksRow}>
        {/* LinkedIn */}
        {data.contact?.linkedin && (
          <div style={styles.linkGroup}>
            <FaLinkedin />
            <a
              href={data.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              LinkedIn
            </a>
          </div>
        )}

        {/* GitHub */}
        {data.contact?.github && (
          <div style={styles.linkGroup}>
            <FaGithub />
            <a
              href={data.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              GitHub
            </a>
          </div>
        )}

        {/* Portfolio */}
        {data.contact?.portfolio && (
          <div style={styles.linkGroup}>
            <FaGlobe />
            <a
              href={data.contact.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Portfolio
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;

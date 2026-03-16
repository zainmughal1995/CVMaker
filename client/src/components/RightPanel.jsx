// CV Preview
// Basic CSS version (No Tailwind)
// Functionality preserved for PDF export

import { forwardRef } from "react";

import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Certificates from "./Certificates";

const styles = {
  emptyState: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "600px",
    color: "#6B7280",
    fontSize: "18px",
  },

  container: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },

  paper: {
    width: "725px", // keep fixed width for PDF export
    background: "#ffffff",
    padding: "32px",
    fontFamily: "serif",
    borderRadius: "16px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
    border: "1px solid #E5E7EB",
  },
};

const RightPanel = forwardRef(({ data }, ref) => {
  if (!data) {
    return <div style={styles.emptyState}>No JSON loaded</div>;
  }

  return (
    <div style={styles.container}>
      {/* CV Paper */}
      <div ref={ref} style={styles.paper}>
        {/* CV Content */}
        <PersonalInfo data={data} />

        <Summary summary={data.summary} />

        <Education education={data.education} />

        <Experience experience={data.experience} />

        <Projects projects={data.projects} />

        <Skills skills={data.skills} />

        <Certificates certificates={data.certificates} />
      </div>
    </div>
  );
});

export default RightPanel;

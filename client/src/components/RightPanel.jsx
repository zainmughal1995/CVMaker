// CV Preview

import { forwardRef } from "react";

import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Certificates from "./Certificates";

const RightPanel = forwardRef(({ data }, ref) => {
  if (!data) return <p>No JSON loaded</p>;

  return (
    // RightPanel.jsx
    <div
      ref={ref}
      style={{ width: "725px", background: "#fff" }}
      className="p-6 font-serif"
    >
      <PersonalInfo data={data} />

      <Summary summary={data.summary} />

      <Education education={data.education} />

      <Experience experience={data.experience} />

      <Projects projects={data.projects} />

      <Skills skills={data.skills} />

      <Certificates certificates={data.certificates} />
    </div>
  );
});

export default RightPanel;

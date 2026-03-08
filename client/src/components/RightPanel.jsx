// CV Preview
// Modern preview container with shadows, rounded edges, soft background
// Functionality unchanged (important for PDF export)

import { forwardRef } from "react";

import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Certificates from "./Certificates";

const RightPanel = forwardRef(({ data }, ref) => {
  if (!data)
    return (
      <div
        className="
        flex
        items-center
        justify-center
        h-[600px]
        text-[#6B7280]
        text-lg
        "
      >
        No JSON loaded
      </div>
    );

  return (
    <div
      className="
      flex
      justify-center
      w-full
      "
    >
      {/* CV Paper */}
      <div
        ref={ref}
        style={{ width: "725px", background: "#ffffff" }} // keep fixed width for PDF
        className="
        p-8
        font-serif
        rounded-2xl
        shadow-[0_20px_60px_rgba(0,0,0,0.15)]
        border
        border-[#E5E7EB]
        "
      >
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

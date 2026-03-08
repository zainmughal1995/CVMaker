// PersonalInfo.jsx
// Component for displaying personal information

import React from "react";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa"; // icons

const PersonalInfo = ({ data }) => {
  return (
    <div className="text-center mb-10">
      {/* Name */}
      <h1 className="text-3xl  font-extrabold">{data.name}</h1>
      {/* Title */}
      <p className="text-lg font-sans uppercase m-3 ">{data.title}</p>
      {/* Location */}
      <p className="text-sm">{data.location}</p>
      {/* Contact line */}
      <p className="text-sm mt-2">
        {data.contact.whatsapp} | {data.contact.email}
      </p>

      <div className="flex justify-center items-center gap-4 mt-2.5 text-[#374151]">
        {/* LinkedIn */}
        {data.contact?.linkedin && (
          <div className="flex items-center gap-1">
            <FaLinkedin className="text-[#374151]" /> {/* LinkedIn logo */}
            <a
              href={data.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:underline"
            >
              LinkedIn
            </a>
          </div>
        )}

        {/* GitHub */}
        {data.contact?.github && (
          <div className="flex items-center gap-1">
            <FaGithub className="text-[#374151]" /> {/* GitHub logo */}
            <a
              href={data.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:underline"
            >
              GitHub
            </a>
          </div>
        )}

        {/* Portfolio */}
        {data.contact?.portfolio && (
          <div className="flex items-center gap-1">
            <FaGlobe className="text-[#374151]" /> {/* Website logo */}
            <a
              href={data.contact.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:underline"
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

// PersonalInfo.jsx
// Component for displaying personal information

import React from "react";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa"; // icons

const PersonalInfo = ({ data }) => {
  return (
    <div className="text-center mb-6">
      {/* Name */}
      <h1 className="text-3xl font-bold">{data.name}</h1>
      {/* Title */}
      <p className="text-lg">{data.title}</p>
      {/* Location */}
      <p className="text-sm">{data.location}</p>
      {/* Contact line */}
      <p className="text-sm mt-2">
        {data.contact.whatsapp} | {data.contact.email}
      </p>

      <div className="text-sm space-y-1 mt-2.5 text-[#374151]">
        {/* LinkedIn */}
        {data.contact?.linkedin && (
          <div className="flex items-center justify-center gap-2">
            <FaLinkedin className="text-[#374151]" /> {/* LinkedIn logo */}
            {data.contact.linkedin}
          </div>
        )}

        {/* GitHub */}
        {data.contact?.github && (
          <div className="flex items-center justify-center gap-2">
            <FaGithub className="text-[#374151]" /> {/* GitHub logo */}
            {data.contact.github}
          </div>
        )}

        {/* Portfolio */}
        {data.contact?.portfolio && (
          <div className="flex items-center justify-center gap-2">
            <FaGlobe className="text-[#374151]" /> {/* Website logo */}
            {data.contact.portfolio}
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;

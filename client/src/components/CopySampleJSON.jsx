// Component that copies a sample CV JSON template

export default function CopySampleJSON() {
  // generic sample JSON (no personal data)
  const sampleJSON = {
    name: "Full Name",
    title: "Professional Title",
    location: "City, Country",

    contact: {
      email: "email@example.com",
      linkedin: "https://linkedin.com/in/username",
      github: "https://github.com/username",
      whatsapp: "+1234567890",
      portfolio: "https://portfolio.com",
    },

    summary:
      "Short professional summary describing your experience, expertise and major achievements.",

    education: [
      {
        degree: "Degree Title",
        start_date: "Start Date",
        end_date: "End Date",
        subjects: ["Subject 1", "Subject 2"],
        software: ["Software 1", "Software 2"],
        gpa: "X.X / 4.0",
      },
    ],

    experience: [
      {
        role: "Job Title",
        organization: "Company Name",
        location: "City, Country",
        type: "Remote / On-site",
        start_date: "Start Date",
        end_date: "End Date",
        responsibilities: [
          "Key responsibility or achievement",
          "Another responsibility",
        ],
        skills: ["Skill 1", "Skill 2"],
      },
    ],

    projects: {
      interactive_web_mapping: ["Example project description"],
    },

    skills: {
      programming_languages: ["Python", "JavaScript"],
      frontend_web_development: ["React", "Tailwind CSS"],
    },

    certificates: [
      {
        name: "Certificate Name",
        date: "Date",
        issuer: "Organization",
      },
    ],
  };

  const copyJSON = () => {
    navigator.clipboard.writeText(
      JSON.stringify(sampleJSON, null, 2), // formatted JSON
    );
  };

  return (
    <button
      onClick={copyJSON}
      className="
      mt-3
      w-full
      py-2
      rounded-xl
      border
      border-gray-300
      hover:bg-gray-100
      transition
      "
    >
      Copy JSON Sample
    </button>
  );
}

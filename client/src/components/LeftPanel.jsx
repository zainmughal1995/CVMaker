// JSON Upload + Download CV
// UI improved: card layout, glass effect, modern buttons
// Functionality unchanged

import { useState } from "react";
import html2pdf from "html2pdf.js";
// import component
import CopySampleJSON from "./CopySampleJSON";

export default function LeftPanel({ onJsonLoad, cvRef }) {
  const [fileName, setFileName] = useState("");

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return; // no file

    setFileName(file.name); // store file name

    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result); // parse JSON
        onJsonLoad(json); // send to parent
      } catch {
        alert("Invalid JSON"); // error if JSON invalid
      }
    };

    reader.readAsText(file); // read file
  };

  const downloadPDF = async () => {
    const element = cvRef.current;
    if (!element) return; // ensure CV exists

    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready; // wait for fonts
    }

    const opt = {
      margin: 25,
      filename: "cv.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
      },
      jsPDF: {
        unit: "px",
        format: [794, 1123], // A4
        orientation: "portrait",
      },
    };

    await html2pdf().set(opt).from(element).save(); // generate PDF
  };

  return (
    <div
      className="
      p-6
      rounded-2xl
      bg-white/10
      backdrop-blur-lg
      border border-white/20
      shadow-lg
      w-full
      max-w-sm
      "
    >
      {/* Title */}
      <h2 className="text-xl font-semibold mb-6 text-black">Upload CV JSON</h2>

      {/* File input */}
      <label
        className="
        flex
        items-center
        justify-center
        w-full
        h-28
        border-2
        border-dashed
        border-white/30
        rounded-xl
        cursor-pointer
        hover:bg-white/10
        transition
        text-black
        text-sm
        "
      >
        Select JSON File
        <input
          type="file"
          accept=".json"
          onChange={handleFile}
          className="hidden"
        />
      </label>

      {/* File loaded */}
      {fileName && (
        <p className="text-sm mt-3 text-black/80">Loaded: {fileName}</p>
      )}

      {/* Download button */}
      <button
        onClick={downloadPDF}
        className="
        mt-6
        w-full
        py-2
        rounded-xl
        text-white
        cursor-pointer
        font-medium
        bg-gradient-to-r
        from-indigo-500
        to-purple-600
        shadow-md
        hover:shadow-lg
        hover:scale-[1.02]
        transition
        "
      >
        Download CV
      </button>

      <CopySampleJSON />
    </div>
  );
}

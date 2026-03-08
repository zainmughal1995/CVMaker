// JSON Upload + Download CV

import { useState } from "react";
import html2pdf from "html2pdf.js";

export default function LeftPanel({ onJsonLoad, cvRef }) {
  const [fileName, setFileName] = useState("");

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        onJsonLoad(json);
      } catch {
        alert("Invalid JSON");
      }
    };

    reader.readAsText(file);
  };

  // LeftPanel.jsx
  // Replace existing downloadPDF with this async function
  // FIXED downloadPDF
  // LeftPanel.jsx
  // Simple and stable PDF export

  const downloadPDF = async () => {
    const element = cvRef.current; // CV container
    if (!element) return; // stop if ref missing

    // wait for fonts to load (prevents layout issues)
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    const opt = {
      margin: 25, // remove margins
      filename: "cv.pdf",
      image: { type: "jpeg", quality: 1 }, // high quality
      html2canvas: {
        scale: 2, // better resolution
        useCORS: true, // allow external images
        logging: false,
      },
      jsPDF: {
        unit: "px", // match DOM units
        format: [794, 1123], // A4 in px
        orientation: "portrait",
      },
    };

    // generate PDF from actual element
    await html2pdf().set(opt).from(element).save();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Upload JSON</h2>

      <input
        type="file"
        accept=".json"
        onChange={handleFile}
        className="mb-4"
      />

      {fileName && <p className="text-sm mb-4">Loaded: {fileName}</p>}

      <button
        onClick={downloadPDF}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Download CV
      </button>
    </div>
  );
}

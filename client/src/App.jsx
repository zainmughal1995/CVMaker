// Root App

import { useState, useRef } from "react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

export default function App() {
  const [jsonData, setJsonData] = useState(null);
  const cvRef = useRef();

  return (
    <Layout
      navbar={<Navbar />}
      left={<LeftPanel onJsonLoad={setJsonData} cvRef={cvRef} />}
      right={<RightPanel data={jsonData} ref={cvRef} />}
    />
  );
}

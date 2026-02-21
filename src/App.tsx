import { useState } from "react";

export default function App() {
  const [track, setTrack] = useState<"software" | "ece">("software");

  return (
    <div style={{ background: "black", color: "white", minHeight: "100vh", padding: "40px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontSize: "28px" }}>Ashwani Rawat</h1>

        <div>
          <button
            onClick={() => setTrack("software")}
            style={{
              marginRight: "10px",
              padding: "8px 16px",
              background: track === "software" ? "white" : "#333",
              color: track === "software" ? "black" : "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Software
          </button>

          <button
            onClick={() => setTrack("ece")}
            style={{
              padding: "8px 16px",
              background: track === "ece" ? "white" : "#333",
              color: track === "ece" ? "black" : "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            ECE
          </button>
        </div>
      </header>

      <main style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: "22px" }}>
          {track === "software"
            ? "Software Developer Profile"
            : "ECE / Embedded Profile"}
        </h2>

        <p style={{ marginTop: "20px", color: "#aaa", maxWidth: "600px" }}>
          {track === "software"
            ? "Full stack developer focused on Java, Python, React and cloud technologies."
            : "ECE student focused on Embedded Systems, CAN communication and modeling."}
        </p>
      </main>
    </div>
  );
}
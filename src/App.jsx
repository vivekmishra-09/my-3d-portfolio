import React, { useState, useMemo, useEffect } from "react";
import PortfolioWorld from "./components/PortfolioWorld";


const PROJECTS_TAGS = ["vision", "pwa", "maps", "astrophysics", "deep space", "qsl", "audio", "nlp", "ui", "webxr", "three", "ux"];

export default function App() {
  const [filter, setFilter] = useState("");
  const [active, setActive] = useState(null);
  const tagSet = useMemo(() => PROJECTS_TAGS.sort(), []);

  return (
    <div style={{ height: "100vh", width: "100%", background: "#05060a", color: "white" }}>
      {/* HUD */}
      <div style={{ padding: "10px", display: "flex", gap: "10px" }}>
        <input
          placeholder="Search / Filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ padding: "5px", borderRadius: "5px" }}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          {tagSet.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      {/* 3D Scene */}
      <PortfolioWorld filter={filter} onPick={setActive} />

      {/* Active Project Panel */}
      {active && (
        <div style={{ position: "absolute", right: 10, top: 10, background: "#000a", padding: "10px", borderRadius: "10px" }}>
          <div>{active.name}</div>
          <div>{active.summary}</div>
          <div>{active.tags.join(", ")}</div>
          <a href={active.link} target="_blank">Open Project ↗</a>
        </div>
      )}
    </div>
    
  );
}

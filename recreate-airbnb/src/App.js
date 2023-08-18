import React from "react"
import Navbar from "./components/Navbar";
import grid from "./images/photo-grid.png";

export default function App() {
  return (
    <div>
      <Navbar />
      <img className="grid" src={grid} alt="grid-experiences" />
    </div>
  )
};
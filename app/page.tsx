"use client";
import React from "react";
import Introduce from "@/components/pageC/Introduce";
import Projects from "@/components/pageC/Projects";
import Skills from "@/components/pageC/Skills";
import TimeLine from "@/components/pageC/TimeLine";
import Contact from "@/components/pageC/Contact";

const App: React.FC = () => {
  return (
    <div style={{ background: "#f5f5f5" }}>
      <Introduce />
      <Projects />
      <Skills />
      <TimeLine />
      <Contact />
    </div>
  );
};

export default App;

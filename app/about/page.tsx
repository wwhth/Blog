"use client";
import React from "react";
import Introduce from "@/components/pageC/Introduce";
import Projects from "@/components/pageC/Projects";
import Skills from "@/components/pageC/Skills";
import TimeLine from "@/components/pageC/TimeLine";
import Contact from "@/components/pageC/Contact";

export default function About() {
  return (
    <div style={{ background: "#f5f5f5" }}>
      <Introduce />
      <Projects />
      <Skills />
      <TimeLine />
      <Contact />
    </div>
  );
}

import React from "react";
import Sidebar from "./Components/Sidebar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <>
      <div className="sm:flex font-rubik bg-gray-1 ">
        <Sidebar />

        <div className="sm:flex-1 sm:ml-[80px] px-4 overflow-hidden  bg-gradient-to-r from-gray-1 to-gray-2 ">
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="resume">
            <Resume />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
}

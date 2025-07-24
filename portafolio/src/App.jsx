import React from "react"
import ProyectCard from "./components/ProyectCard"
import ProjectSection from './components/PojectSection'
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";


function App  ()  {
  

  return (
    <div className="bg-gradient-to-b from white to-cyan-50 min-h-screen">
      <Navbar />
      <HomeSection />
      <ProjectSection />




    </div>
  
  );


};

export default App

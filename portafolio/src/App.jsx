import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectSection from './components/PojectSection'
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import Projects from "./pages/Projects";
import Contacto from "./pages/Contacto";


function App() {


  return (
    <Router>
      {/* <div className="bg-gradient-to-b from white to-cyan-50 min-h-screen"> */}
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/proyectos" element={ <Projects /> } />
          <Route path="/contacto" element= { <Contacto />} />





      </Routes>
     {/*  </div> */}
    </Router>

  );


};

export default App

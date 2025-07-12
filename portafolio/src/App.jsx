import React from "react"
import ProyectCard from "./components/ProyectCard"
import Navbar from "./components/Navbar";


function App  ()  {
  const proyects = [
    {
      title: 'Petcalli',
      description: 'E-Commerce enfocado en la compra venta de bienes y servicios para los mas queridos del hogar',
      image: '/public/Petcalli.png',
      link: 'https://petcalli.netlify.app/',
      tags: ['JavaScript', 'E-commerce', 'Bootstrap', 'JAVA']

    },
    {
      title: 'Colibri Creativa',
      description: 'EN DESARROLLO... Colibri Creativa será una E-Commerce dedicada a la compra de artesanías elaboradas por manos Mexiquenses ',
      image: '/public/ColibriCreativa.jpeg',
      link: '',
      tags: ['JavaScript', 'React', 'tailwindcss', 'E-commerce']
    },
    {
      title: 'Mi Figma',
      description:'Mockup y Wireframe utilizados',
      image: '/public/Figma.png',
      link: 'https://www.figma.com/design/K0W38LR3eB1aou1zcU49sy/PROYECTO-INTEGRADOR-Petcalli?node-id=0-1&t=2NMohgDrRar9m2CW-1',
      tags: ['Figma']
    }
  ];

  return (
    <div className="bg-gradient-to-b from white to-cyan-50 min-h-screen">
      <Navbar />

      <section id='projects' className="p-8 pt-16">
        <h2 className="text-2x1 font-bold text-center text-cyan-700 mb-6">
          Mis Proyectos
        </h2>
   
    <div className="min-h-screen bg-gradient-to-b from-white to-cyan-50 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {proyects.map((project, index) =>(
        <ProyectCard key={index} {...project} />
      ))}
    </div>
    </section>

    <section id="about" className="p-8">
      <h2 className="text-2x1 font-bold text-cyan-700 mb-4">Sobre mi</h2>
      <p className="text-gray-700 max-w-2x1">
          Soy un químico apasionado por la tecnología, especializado en desarrollo fullstack
          y en integrar ciencia y software para resolver problemas reales. Me encanta aprender
          y crear soluciones que impacten.
      </p>
    </section>

    <section id="contact" className="p-8">
      <h2 className="text2x1 font-bold text-cyan-700 mb-4">Contacto</h2>
      <p className="text-gray-700">Puedes escribirme en:</p>
    </section>
    </div>
  
  );


};

export default App

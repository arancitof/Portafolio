import React from 'react';
import ProyectCard from './ProyectCard';

const PojectSection = () => {
    const proyects = [
        {
            title: 'Petcalli',
            description: 'E-Commerce enfocado en la compra venta de bienes y servicios para los mas queridos del hogar',
            image: '/Petcalli.png',
            link: 'https://petcalli.netlify.app/',
            tags: ['JavaScript', 'E-commerce', 'Bootstrap', 'JAVA']

        },
        {
            title: 'Colibri Creativa',
            description: 'EN DESARROLLO... Colibri Creativa será una E-Commerce dedicada a la compra de artesanías elaboradas por manos Mexiquenses ',
            image: '/ColibriCreativa.jpeg',
            link: '',
            tags: ['JavaScript', 'React', 'tailwindcss', 'E-commerce']
        },
        {
            title: 'Mi Figma',
            description: 'Mockup y Wireframe utilizados',
            image: '/Figma.png',
            link: 'https://www.figma.com/design/K0W38LR3eB1aou1zcU49sy/PROYECTO-INTEGRADOR-Petcalli?node-id=0-1&t=2NMohgDrRar9m2CW-1',
            tags: ['Figma']
        },
        {
            title: 'Gestor de Tareas',
            description: 'Gestor de tareas básico y responsivo ',
            image: '/Gestor.png',
            link: 'https://gestor-tareas001.netlify.app/',
            tags: ['React', 'Bootstrap', 'Herramienta'],
        }
    ];

    return (
        <section id='projects' className="p-8 pt-16">
            <h2 className="text-2x1 font-bold text-center text-cyan-700 mb-6">
                Mis Proyectos
            </h2>

            <div className="min-h-screen bg-gradient-to-b from-white to-cyan-50 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {proyects.map((project, index) => (
                    <ProyectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}

export default PojectSection;

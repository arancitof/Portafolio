import { FlaskConical, X, Menu } from 'lucide-react';
import React from 'react';
import { useState  } from 'react';

const Navbar = () => {
    const [ isOpen, setIsOpen ] = React.useState(false);

    return (
        <nav className='bg-white border-b border-cyan-100 shadow-sm sticky top-0 z-50'>
            <div className='max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16 items-center' >
                    {/* Logo y Nombre */}
                    <div className='flex items-center gap-2 text-cyan-700 font-bold text-xl'>
                        <FlaskConical size={24} />
                        <span className='tracking-tight'>Cristian Alan Padron Flores  | DevQuímico</span>
                    </div>
                    {/* Menu */}
                    <div className='hidden md:flex space-x-6 text-sm font-medium text-gray-700'>
                        <a href="projects" className='hover:text-cyan-700'>Proyectos</a>
                        <a href="about" className='hover:text-cyan-700'>Sobre Mi</a>
                        <a href="contact" className='hover:text-cyan-700'>Contacto</a>
                    </div>
                    {/* Menu Hamburguesa */}
                    <div className='md:hidden'>
                        <button onClick={() => setIsOpen(!isOpen) }>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                        </div>
                        </div>

                        {/* Menu Desplegable */}
                        {
                            isOpen && (
                                <div className='md:hidden mt-2 space-y-2 text-sm text-gray-700'>
                                    <a href="projects">Proyectos</a>
                                    <a href="about">Sobre mí</a>
                                    <a href="contact">Contacto</a>
                                    </div>
                            )
                        }
            </div>
        </nav>

    );
}

export default Navbar;

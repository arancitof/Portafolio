import { FlaskConical, X, Menu } from 'lucide-react';
import React from 'react';
import { useState  } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState(false);

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
                        <Link to='/' className='hover:text-cyan-700'>Inicio</Link>
                        <Link to='/proyectos' className='hover:text-cyan-700'>Proyectos</Link>
                        <Link to='/contacto' className='hover:text-cyan-700'>Contacto</Link>

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
                                    <Link to='/' onClick={ () => setIsOpen(false)}>Inicio</Link>
                                    <Link to='/proyectos' onClick={() => setIsOpen(false)}>Proyectos</Link>
                                    <Link to='/proyectos' onClick={() => setIsOpen(false)}>Contacto</Link>

                                    </div>
                            )
                        }
            </div>
        </nav>

    );
}

export default Navbar;

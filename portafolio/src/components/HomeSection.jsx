import React from 'react';
import { motion } from 'framer-motion';
import { FaCss3, FaHtml5, FaJava, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiBootstrap, SiJavascript, SiJira, SiNotion, SiPython, SiTailwindcss } from 'react-icons/si';

const HomeSection = () => {
    return (
        <section id='home' className='flex flex-col items-center justify-center text-center p-8 min-h-screen bg-gradient-to-b from-cyan-50 to-white'>

            <motion.img
                src='/FotoPerfil.jpg'
                alt='Mi Foto de Perfil'
                className='w-40 h-40 rounded-full shadow-lg mb-4 object-cover'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            />

            <motion.h1
                className='text-4x1 font-bold text-cyan-700 mb-2'
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Hola! Soy Cristian Alan Padron
            </motion.h1>

            <motion.p
                className='text-gray-700 max-w-xl mb-6'
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Desarrollador Fullstack y Químico apasionado por fusionar la ciencia con la tecnología para resolver problemas reales.
            </motion.p>

            <motion.div
                className='flex flex-wrap gap-4 justify-center text-cyan-600 text-4x1'
                initial='hidden'
                animate='visible'
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
            >
                {[FaJava, FaReact, FaHtml5, FaCss3, FaNodeJs, SiNotion, SiTailwindcss, SiJavascript, SiPython, SiJira, SiBootstrap].map((Icon, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            hidden: { opacity: 0, scale: 0 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.5 }}
                        className='hover:text-white hover:bg-cyan-600 p-2 rounded-full transition-all transform hover:scale-125 shadow-md'
                    >
                        <Icon />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default HomeSection;

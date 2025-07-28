import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const ContactSection = () => {
    return (
        <section id="contact" className="flex flex-col text-center p-8 bg-gradient-to-b from-cyan-50 to-white">
            <h2 className="text2x1 font-bold text-cyan-700 mb-6">Contacto</h2>
            <p className="text-gray-700 mb-8">Puedes contactarme en:</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-gray-700 '>

                {/* LinkedIn */}
                <a 
                    href='https://www.linkedin.com/in/alan-padron/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex flex-col items-center hover:text-cyan-700 transition-transform hover:scale-105'
                >
                    <FaLinkedin size={40} />
                    <span className='mt-2 text-sm text-center'>LinkedIn</span>
                </a>

                {/* Correo */}
                <a
                    href="mailto:alanpfqa@gmail.com"
                    target='_blank'
                    className='flex flex-col items-center hover:text-cyan-700 transition-transform hover:scale-105'
                >
                    <SiGmail size={40} />
                    <span mt-2 text-sm text-center>Gmail</span>
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/arancitof"
                    target='_blank'
                    rel='noopener noreferrer'
                    className=' flex flex-col items-center hover:text-cyan-700 transition-transform hover:scale-105'
                >
                    <FaGithub size={40}/>
                    <span className='mt-2 text-sm text-center'>GitHub</span>
                    </a>

                {/* WhatsApp */}
                <a 
                    href="https://wa.me/525581259402"
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex flex-col items-center hover:text-cyan-700 transition-transform hover:scale-105'
                >
                    <FaWhatsapp size={40}/>
                    <span>WhatsApp</span>
                </a>

            </div>
        </section>
    );
}

export default ContactSection;

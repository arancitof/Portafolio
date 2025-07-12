import { ExternalLink, FlaskConical } from 'lucide-react';
import React from 'react';

const ProyectCard = ( { title, description, image, link, tags = [] }) => {
    return (
        <div>
            <img 
            src={image} 
            alt={title}
            className='w-full h-48 object-cover border-b border-cyan-100'
            />
            <div className='p-5'>
                <div className='flex items-center gap-2 mb-2 text-cyan-700'>
                    <FlaskConical size={20}/>
                    <h3 className='text-xl font-bold tracking-tight'>{title}</h3>
                </div>
                <p className='text-gray-700 text-sm'>{description}</p>

                <div className='flex flex-wrap gap-2 mt-4'>
                    {tags.map((tag, idx) =>(
                        <span
                        key={idx}
                        className='bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-mono tracking-tight shadow-sm'
                        >
                        🧬 {tag}
                        </span>
                    ))}
                </div>

                <a 
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-4 inline-flex items-center gap-1 text-cyan-700 hover:text-cyan-900 font-semibold text-sm'
                >
                    <ExternalLink size={16} />
                    Ver Proyecto
                </a>
            </div>
        </div>
    );
}

export default ProyectCard;

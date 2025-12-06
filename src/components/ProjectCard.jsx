import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { createPageUrl } from '../utils';

export default function ProjectCard({ project, index }) {
  // We use the image_url directly now since we are using static data
  const imageUrl = project.image_url; 
  
  return (
    <Link 
      to={createPageUrl(project.page_name)} 
      className="group block relative"
    >
      <div className="relative h-[500px] overflow-hidden bg-stone-100">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
        
        <img 
          src={imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
        />

        <div className="absolute top-6 right-6 z-20">
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <MapPin size={12} /> {project.location}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black/80 to-transparent">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-3xl font-serif text-white mb-2">{project.title}</h3>
            <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
              <p className="text-white/80 text-sm mb-4 line-clamp-2">{project.description}</p>
              <span className="text-amber-400 text-xs uppercase tracking-widest flex items-center gap-2">
                View Project <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

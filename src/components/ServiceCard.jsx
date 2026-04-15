import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, link, image, index = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col h-full rounded-3xl bg-white overflow-hidden border border-slate-200 hover:border-primary/30 shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      {/* Optional image header for richer visual storytelling */}
      {image && (
        <div className="h-48 w-full overflow-hidden relative">
          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      )}
      
      <div className="p-8 flex flex-col flex-grow relative z-20 bg-white">
        <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 ${image ? '-mt-14 shadow-lg bg-white text-primary border border-slate-100' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'}`}>
          {Icon && <Icon size={28} />}
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-slate-600 flex-grow mb-8 leading-relaxed">{description}</p>
        
        <Link 
          to={link} 
          className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-primary group-hover:text-primary/80 transition-colors mt-auto"
        >
          Explore Service <ArrowRight size={18} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;


import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 flex flex-col h-full hover-lift group">
      <div className="h-12 w-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground smooth-transition">
        {Icon && <Icon size={24} />}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground flex-grow mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-primary font-medium hover:text-primary/80"
      >
        Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 smooth-transition" />
      </Link>
    </div>
  );
};

export default ServiceCard;

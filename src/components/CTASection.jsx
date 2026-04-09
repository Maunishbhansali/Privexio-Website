
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = ({ heading, description, buttonText = "Contact Us", buttonLink = "/contact" }) => {
  return (
    <section className="section-padding bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">{heading}</h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Link to={buttonLink}>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-6 text-lg">
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;

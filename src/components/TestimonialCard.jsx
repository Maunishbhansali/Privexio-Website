
import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ quote, author, company }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-8 relative hover-lift">
      <Quote className="text-primary/20 w-12 h-12 absolute top-6 left-6" />
      <p className="text-card-foreground text-lg mb-6 relative z-10 pt-6">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-xl mr-4">
          {author.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-foreground">{author}</h4>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

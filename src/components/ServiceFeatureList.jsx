import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ServiceFeatureList = ({ features, title }) => {
  return (
    <div className="mb-12">
      {title && (
        <h3 className="text-2xl font-bold mb-6 text-foreground">
          {title}
        </h3>
      )}
      
      <div className="grid md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="flex items-start gap-3"
          >
            <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
              <Check className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">
                {feature.title}
              </h4>
              {feature.description && (
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFeatureList;
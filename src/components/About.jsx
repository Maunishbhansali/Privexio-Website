import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Award },
    { number: "24/7", label: "Support Available", icon: Target },
    { number: "<15min", label: "Response Time", icon: Zap }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">Privexio</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              With over a decade of experience in managed IT services, we've been the trusted technology partner 
              for businesses across industries. Our mission is to provide comprehensive, reliable, and secure 
              IT solutions that empower your business to thrive in the digital age.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              We combine cutting-edge technology with personalized service to deliver solutions that not only 
              meet your current needs but also scale with your business growth. Our team of certified professionals 
              is dedicated to ensuring your technology infrastructure is secure, efficient, and always available.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-lg p-6 text-center"
                >
                  <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="floating-animation">
              <img  
                alt="Professional IT team working on cybersecurity solutions"
                className="w-full h-auto rounded-2xl shadow-2xl"
               src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
            </div>
            
            <div className="absolute -top-6 -right-6 glass-effect rounded-2xl p-6 pulse-glow">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">10+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass-effect rounded-2xl p-6 pulse-glow">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">ISO</div>
                <div className="text-sm text-gray-400">27001 Certified</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
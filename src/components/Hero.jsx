import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const { toast } = useToast();

  const handleGetStarted = () => {
    toast({
      title: "This feature isn't implemented yet.",
      description: 'Use the contact page to request this workflow next.'
    });
  };

  const handleLearnMore = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Secure Your
              <span className="gradient-text block">Digital Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Professional managed IT services, cybersecurity solutions, and 24/7 support
              {' '}
              to keep your business running smoothly and securely.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold neon-glow group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={handleLearnMore}
                variant="outline"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold"
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {[
                { icon: Shield, title: '99.9% Uptime', desc: 'Guaranteed' },
                { icon: Zap, title: '24/7 Support', desc: 'Always Available' },
                { icon: Clock, title: '< 15min', desc: 'Response Time' }
              ].map((item, index) => (
                <div key={index} className="glass-effect rounded-lg p-4 text-center">
                  <item.icon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="floating-animation">
              <img
                alt="Modern cybersecurity dashboard with network monitoring"
                className="w-full h-auto rounded-2xl shadow-2xl neon-glow"
                src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d"
              />
            </div>

            <div className="absolute -top-4 -right-4 glass-effect rounded-full p-4 pulse-glow">
              <Shield className="h-8 w-8 text-blue-400" />
            </div>

            <div className="absolute -bottom-4 -left-4 glass-effect rounded-full p-4 pulse-glow">
              <Zap className="h-8 w-8 text-purple-400" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

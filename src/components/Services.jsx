import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, Cloud, Headphones, Monitor, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Services = () => {
  const { toast } = useToast();

  const handleLearnMore = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const services = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced threat protection, vulnerability assessments, and security monitoring to keep your data safe.",
      features: ["24/7 Monitoring", "Threat Detection", "Security Audits"]
    },
    {
      icon: Server,
      title: "Network Management",
      description: "Complete network infrastructure management, optimization, and maintenance for peak performance.",
      features: ["Network Design", "Performance Optimization", "Infrastructure Management"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Seamless cloud migration, management, and optimization services for scalable business growth.",
      features: ["Cloud Migration", "Backup Solutions", "Scalability Planning"]
    },
    {
      icon: Headphones,
      title: "24/7 IT Support",
      description: "Round-the-clock technical support and helpdesk services to minimize downtime and maximize productivity.",
      features: ["Remote Support", "On-site Service", "Emergency Response"]
    },
    {
      icon: Monitor,
      title: "System Monitoring",
      description: "Proactive monitoring and maintenance of your IT systems to prevent issues before they occur.",
      features: ["Real-time Monitoring", "Automated Alerts", "Performance Analytics"]
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "Comprehensive data backup, recovery, and compliance solutions to protect your critical business information.",
      features: ["Automated Backups", "Disaster Recovery", "Compliance Management"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive managed IT services designed to secure, optimize, and support your business technology infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect rounded-2xl p-8 hover:neon-glow transition-all duration-300"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                onClick={handleLearnMore}
                variant="outline"
                className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
              >
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
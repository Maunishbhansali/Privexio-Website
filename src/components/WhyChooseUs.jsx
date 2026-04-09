import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Zap, Users, Clock, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Military-grade encryption and advanced threat protection to safeguard your business data."
    },
    {
      icon: Zap,
      title: "Lightning-Fast Response",
      description: "Average response time under 15 minutes with 24/7 monitoring and support."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with decades of combined experience in IT and cybersecurity."
    },
    {
      icon: Clock,
      title: "Proactive Monitoring",
      description: "We identify and resolve issues before they impact your business operations."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning service with ISO 27001 certification and industry partnerships."
    },
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "99.9% uptime guarantee with over 500 satisfied clients across various industries."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Why Choose <span className="gradient-text">Privexio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just another IT service provider. We're your strategic technology partner, 
            committed to your success and security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-effect rounded-2xl p-8 hover:neon-glow transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 gradient-text">
              Ready to Secure Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Join hundreds of businesses that trust Privexio with their technology infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-green-400">
                <CheckCircle className="h-5 w-5" />
                <span>Free Security Assessment</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <CheckCircle className="h-5 w-5" />
                <span>No Long-term Contracts</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <CheckCircle className="h-5 w-5" />
                <span>30-Day Money Back Guarantee</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
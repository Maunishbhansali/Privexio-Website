import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { usePageMeta } from '@/hooks/use-page-meta';
import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/animations/SectionReveal';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ArrowLeft, ArrowRight, TrendingUp, Clock, Users, Award } from 'lucide-react';

// Case studies data
const caseStudiesData = {
  1: {
    title: 'Cloud Migration Without Operational Disruption',
    company: 'TechFlow Innovations',
    industry: 'Technology',
    result: '30% cost reduction',
    description: 'Privexio planned and delivered a phased cloud migration that modernized infrastructure while keeping internal teams productive.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64',
    timeline: '6 months',
    teamSize: 15,
    mainResult: '30% reduction in operating costs',
    challenge: 'TechFlow Innovations was operating on legacy infrastructure that was increasingly difficult to maintain and scale. Their on-premises servers were aging, expensive to maintain, and couldn\'t support their rapid growth. The company needed to modernize quickly without disrupting daily operations.',
    solution: 'We implemented a phased AWS migration strategy that moved critical workloads incrementally. We designed a hybrid approach that allowed TechFlow to test and validate each component before full cutover. Our team provided 24/7 support during the transition to ensure zero downtime.',
    results: [
      '30% reduction in infrastructure costs',
      '99.9% uptime achieved',
      'Improved scalability for 200% traffic growth',
      'Reduced maintenance overhead by 60%',
    ],
    technologies: ['AWS', 'RDS', 'EC2', 'CloudFront', 'Route53'],
    roi: 'Payback period: 8 months with ongoing savings',
  },
  2: {
    title: 'Supply Chain Workflows Rebuilt',
    company: 'Global Logistics Inc.',
    industry: 'Logistics',
    result: '40% faster execution',
    description: 'We replaced fragmented operational tooling with a tailored software platform that matched internal processes.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    timeline: '4 months',
    teamSize: 12,
    mainResult: 'Faster execution and better visibility across operations',
    challenge: 'Global Logistics was juggling 7 different software systems that didn\'t communicate with each other. Order processing was manual and error-prone, causing delays and frustrated customers. The company needed a unified solution.',
    solution: 'We built a custom supply chain management platform that integrated all their operational needs. The system automated order processing, inventory tracking, and customer notifications. We trained their team and provided ongoing support.',
    results: [
      '40% faster order processing',
      'Real-time inventory visibility',
      '95% reduction in manual data entry',
      'Customer satisfaction increased by 35%',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    roi: 'Processing costs reduced by $200K annually',
  },
  3: {
    title: 'Security-First MSP for Regulated Environment',
    company: 'Summit Medical Group',
    industry: 'Healthcare',
    result: 'HIPAA Compliant',
    description: 'Privexio\'s MSP model gave the organization stronger support, tighter controls, and confidence in data protection.',
    image: 'https://images.unsplash.com/photo-1576091160550-112173c7acda',
    timeline: '3 months',
    teamSize: 20,
    mainResult: '24/7 support coverage with stronger compliance readiness',
    challenge: 'Summit Medical Group had inconsistent IT support and struggled to meet HIPAA compliance requirements. Patient data security was a critical concern, and their existing infrastructure wasn\'t adequately protected.',
    solution: 'We implemented a comprehensive MSP solution with 24/7 monitoring, automated backups, and security protocols that met HIPAA requirements. We conducted staff training on security best practices and established incident response procedures.',
    results: [
      'Full HIPAA compliance achieved',
      '24/7 monitoring and support',
      'Security audits passed with zero findings',
      'Incident response time: <1 hour',
    ],
    technologies: ['Managed IT', 'SIEM', 'Backup & Disaster Recovery', 'Compliance Tools'],
    roi: 'Avoided potential $1M+ in compliance penalties',
  },
  4: {
    title: 'Cybersecurity Transformation',
    company: 'Finance Solutions Corp',
    industry: 'Financial Services',
    result: '99.9% threat prevention',
    description: 'Implemented advanced SOC and MDR solutions to protect sensitive financial data and meet regulatory requirements.',
    image: 'https://images.unsplash.com/photo-1550439062-7cdcb8c737f0',
    timeline: '5 months',
    teamSize: 18,
    mainResult: '99.9% threat detection and prevention rate',
    challenge: 'Finance Solutions Corp faced increasing cyber threats and regulatory pressure to strengthen their security posture. They lacked visibility into their network and couldn\'t effectively detect breaches.',
    solution: 'We deployed a Security Operations Center (SOC) with managed detection and response (MDR). Our team monitors their infrastructure 24/7, detects threats in real-time, and responds immediately to incidents.',
    results: [
      '99.9% threat detection rate',
      'Average response time: 15 minutes',
      'Zero successful breaches in 12 months',
      'Full regulatory compliance maintained',
    ],
    technologies: ['SIEM', 'MDR', 'Endpoint Detection', 'Threat Intelligence'],
    roi: 'Estimated threat prevention value: $5M+',
  },
  5: {
    title: 'AI Automation Reduced Manual Work',
    company: 'RetailPro Enterprises',
    industry: 'Retail',
    result: '70% time savings',
    description: 'Built intelligent automation solutions that eliminated repetitive tasks and increased operational efficiency significantly.',
    image: 'https://images.unsplash.com/photo-1677442d019cecf8d13b3b4e46885183',
    timeline: '3 months',
    teamSize: 10,
    mainResult: '70% reduction in manual workload',
    challenge: 'RetailPro was spending hours every day on manual inventory management, customer service responses, and order processing. This consumed resources that could be better used for strategic initiatives.',
    solution: 'We built AI-powered automation workflows using RPA and machine learning. The system handles routine inquiries, processes orders, and manages inventory automatically, with human review for exceptions.',
    results: [
      '70% reduction in manual work',
      'Faster customer response time (from 4 hours to 5 minutes)',
      'Improved order accuracy to 99.8%',
      'Team refocused on strategic work',
    ],
    technologies: ['Python', 'Machine Learning', 'RPA', 'AI Chatbots'],
    roi: '12-month payback with $400K annual savings',
  },
  6: {
    title: 'Mobile App Launch for Distribution',
    company: 'Nordic Distribution Ltd',
    industry: 'Distribution',
    result: '50% faster order processing',
    description: 'Developed a native mobile app that streamlined order management and increased field team productivity.',
    image: 'https://images.unsplash.com/photo-1512941691920-25bda36dc643',
    timeline: '4 months',
    teamSize: 14,
    mainResult: '50% faster order processing and fulfillment',
    challenge: 'Nordic Distribution\'s field teams were using outdated systems that required them to return to the office to process orders. This caused delays and reduced productivity.',
    solution: 'We developed native iOS and Android apps with offline capabilities. Field teams can now process orders in real-time, access inventory, and update customers instantly from anywhere.',
    results: [
      '50% faster order processing',
      'Real-time inventory access for field teams',
      'Improved customer communication',
      'Field team productivity increased by 40%',
    ],
    technologies: ['React Native', 'Firebase', 'iOS', 'Android'],
    roi: 'Payback period: 6 months',
  },
};

const CaseStudyDetailPage = () => {
  const { id } = useParams();
  const caseStudy = caseStudiesData[parseInt(id)];

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  usePageMeta(
    `${caseStudy.title} | Privexio Case Study`,
    `Learn how we helped ${caseStudy.company} achieve ${caseStudy.result}. See the challenge, solution, and measurable results.`
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Image Section */}
      <section className="relative h-96 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </section>

      {/* Header Section */}
      <section className="section-padding bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <Link to="/case-studies" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>

          <SectionReveal>
            <div className="max-w-3xl">
              <div className="mb-6">
                <p className="text-sm text-primary font-bold uppercase tracking-wider">{caseStudy.industry}</p>
                <p className="text-sm text-muted-foreground">{caseStudy.company}</p>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">{caseStudy.title}</h1>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-secondary/5 p-4 rounded-lg">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Main Result</p>
                  <p className="text-lg font-bold text-primary">{caseStudy.result}</p>
                </div>
                <div className="bg-secondary/5 p-4 rounded-lg">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1 flex items-center">
                    <Clock className="w-3 h-3 mr-1" /> Timeline
                  </p>
                  <p className="text-lg font-bold text-foreground">{caseStudy.timeline}</p>
                </div>
                <div className="bg-secondary/5 p-4 rounded-lg">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1 flex items-center">
                    <Users className="w-3 h-3 mr-1" /> Team
                  </p>
                  <p className="text-lg font-bold text-foreground">{caseStudy.teamSize} People</p>
                </div>
                <div className="bg-secondary/5 p-4 rounded-lg">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1 flex items-center">
                    <Award className="w-3 h-3 mr-1" /> ROI
                  </p>
                  <p className="text-lg font-bold text-primary">{caseStudy.roi.split(':')[0]}</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {/* Challenge */}
            <SectionReveal className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
            </SectionReveal>

            {/* Solution */}
            <SectionReveal direction="right" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{caseStudy.solution}</p>

              {/* Technologies Used */}
              {caseStudy.technologies && (
                <div className="mt-6">
                  <p className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Technologies Used</p>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech) => (
                      <span key={tech} className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </SectionReveal>

            {/* Results */}
            <SectionReveal direction="left" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Results & Impact</h2>

              <div className="space-y-4 mb-8">
                {caseStudy.results.map((result, idx) => (
                  <motion.div
                    key={result}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-secondary/5 rounded-lg"
                  >
                    <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-foreground">{result}</span>
                  </motion.div>
                ))}
              </div>

              {/* ROI Box */}
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Return on Investment</p>
                <p className="text-2xl font-bold text-foreground">{caseStudy.roi}</p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/5">
        <div className="container mx-auto px-4 text-center max-w-2xl mx-auto">
          <SectionReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Ready to Achieve Similar Results?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help your organization achieve measurable growth and operational excellence.
            </p>
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Schedule Your Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
          </SectionReveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phoneNumber="+1-226-868-8363" />
    </div>
  );
};

export default CaseStudyDetailPage;

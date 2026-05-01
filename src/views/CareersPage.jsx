import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileUp, Mail, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CONTACT_EMAIL } from '@/lib/site-links';
import { usePageMeta } from '@/hooks/use-page-meta';
import { useToast } from '@/components/ui/use-toast';
import { serviceCatalog } from '@/data/serviceCatalog';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/maunish.bhansali@privexio.com';
const CAREERS_MAILTO = `mailto:${CONTACT_EMAIL}?subject=Careers%20at%20Privexio`;

const interestAreas = [
  ...serviceCatalog.map((service) => service.navName),
  'Sales',
  'Account Manager',
  'Human Resources',
  'Operations, sales, or partnerships',
  'Open application',
];

const applicationSteps = [
  {
    title: 'Share your profile',
    description: 'Send the essentials: your area of interest, experience, resume, and one useful work sample.',
  },
  {
    title: 'We review fit',
    description: 'Privexio looks for practical delivery judgment, clear communication, and supportable work.',
  },
  {
    title: 'We follow up',
    description: 'If there is a match, we will reach out with next steps for a focused conversation.',
  },
];

const CareersPage = () => {
  usePageMeta(
    'Careers',
    'Explore careers at Privexio for people who care about dependable IT, cloud, software, AI, and security delivery.'
  );

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    resume: null,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, resume: event.target.files?.[0] ?? null });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);

      const submission = new FormData();
      submission.append('name', formData.name);
      submission.append('email', formData.email);
      submission.append('phone', formData.phone || 'Not provided');
      submission.append('area_of_interest', formData.role || 'Open application');
      submission.append('years_of_experience', formData.experience || 'Not provided');
      submission.append('message', formData.message);
      submission.append('_subject', `Privexio careers inquiry from ${formData.name}`);
      submission.append('_captcha', 'false');
      submission.append('_template', 'table');

      if (formData.resume) {
        submission.append('attachment', formData.resume);
      }

      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: submission,
      });

      if (!response.ok) {
        throw new Error('Careers form submission failed');
      }

      toast({
        title: 'Application Sent Successfully!',
        description: 'Thank you for reaching out. Privexio will review your profile and follow up if there is a fit.',
      });
      setFormData({ name: '', email: '', phone: '', role: '', experience: '', resume: null, message: '' });
      event.target.reset();
    } catch (error) {
      toast({
        title: 'Application could not be sent',
        description: 'Please try again in a moment or email your profile directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-shell min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <img
            src="/images/careers-team-collaboration.webp"
            alt=""
            width="1200"
            height="800"
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-slate-950/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/55 to-slate-950/10" />
          <div className="page-container relative flex min-h-[460px] items-center py-16 sm:min-h-[540px] sm:py-20 lg:min-h-[600px] lg:py-24">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">Careers</p>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
                Apply to build with Privexio.
              </h1>
              <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
                Tell us where you can help. We review profiles from people who care about dependable IT, cloud, software, AI, security, and clear delivery.
              </p>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="page-container-narrow">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div className="rounded-[2rem] border border-border bg-card p-5 shadow-xl sm:p-8 lg:p-10">
                <div className="mb-8 border-b border-border pb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 text-3xl font-bold text-foreground">Show us where you can make an impact.</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                    Tell us what you want to own, what you have already delivered, and how your experience could help Privexio build dependable technology for growing teams.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="career-name">Full Name</Label>
                      <Input id="career-name" name="name" required value={formData.name} onChange={handleChange} className="bg-background text-foreground" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="career-email">Email Address</Label>
                      <Input id="career-email" name="email" type="email" required value={formData.email} onChange={handleChange} className="bg-background text-foreground" />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="career-phone">Phone Number</Label>
                      <Input id="career-phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="bg-background text-foreground" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="career-role">Area of Interest</Label>
                      <select
                        id="career-role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="">Select an area...</option>
                        {interestAreas.map((area) => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="career-experience">Years of Experience</Label>
                    <Input
                      id="career-experience"
                      name="experience"
                      type="number"
                      min="0"
                      max="60"
                      step="0.5"
                      value={formData.experience}
                      onChange={handleChange}
                      className="bg-background text-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="career-resume">Upload Resume</Label>
                    <div className="rounded-2xl border border-dashed border-border bg-background p-4">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <FileUp className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">
                              {formData.resume ? formData.resume.name : 'Attach your resume'}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">PDF, DOC, or DOCX works best.</p>
                          </div>
                        </div>
                        <label
                          htmlFor="career-resume"
                          className="inline-flex cursor-pointer items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                          Choose File
                        </label>
                      </div>
                    </div>
                    <input
                      id="career-resume"
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="career-message">Why Privexio?</Label>
                    <Textarea
                      id="career-message"
                      name="message"
                      required
                      rows={7}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-background text-foreground"
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-70">
                    {isSubmitting ? 'Sending Application...' : 'Submit Application'}
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>

              <aside className="lg:sticky lg:top-24">
                <div className="overflow-hidden rounded-[2rem] border border-slate-700/40 bg-slate-800 text-white shadow-xl">
                  <div className="p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Application flow</p>
                    <h2 className="mt-3 text-2xl font-bold text-white">What happens next</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      Open applications are welcome. The strongest ones make it easy to understand what you can own and what you have already delivered.
                    </p>

                    <div className="mt-8 space-y-6">
                      {applicationSteps.map((step, index) => (
                        <div key={step.title} className="relative flex gap-4">
                          {index < applicationSteps.length - 1 && <div className="absolute left-[15px] top-9 h-[calc(100%+0.5rem)] w-px bg-white/20" />}
                          <div className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-white">{step.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-300">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-white/10 bg-slate-900/35 p-6 sm:p-8">
                    <div className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <p className="text-sm leading-6 text-slate-300">
                        Resume uploads are supported, but a LinkedIn, portfolio, GitHub, or case-study link can help us understand your work faster.
                      </p>
                    </div>
                    <a href={CAREERS_MAILTO} className="mt-5 inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80">
                      Prefer email?
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </aside>
            </div>

            <div className="mt-16 rounded-[2rem] bg-slate-50 p-6 sm:p-8 lg:p-10">
              <div className="grid gap-5 md:grid-cols-3">
                {[
                  {
                    title: 'Own the outcome',
                    description: 'Connect technical work to the business result it supports.',
                  },
                  {
                    title: 'Document the handoff',
                    description: 'Leave the next person with context, runbooks, and fewer surprises.',
                  },
                  {
                    title: 'Communicate early',
                    description: 'Share clear status, honest tradeoffs, and practical next steps.',
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-primary/30 pl-5">
                    <h2 className="text-lg font-bold text-slate-950">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-950">Need to talk before applying?</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Use the contact page for general questions about Privexio, partnerships, or hiring fit.</p>
                </div>
                <Link href="/contact">
                  <Button variant="outline" className="w-full rounded-full border-slate-300 bg-white text-slate-950 hover:border-primary hover:text-primary sm:w-auto">
                    Contact Privexio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;

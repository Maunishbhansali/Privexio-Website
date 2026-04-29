import React, { useEffect, useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/maunish.bhansali@privexio.com';

const initialFormData = {
  fullName: '',
  businessEmail: '',
  companyName: '',
  websiteUrl: '',
  serviceInterest: '',
  improvementGoals: '',
};

const personalEmailDomains = new Set([
  'gmail.com',
  'googlemail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'live.com',
  'icloud.com',
  'aol.com',
  'proton.me',
  'protonmail.com',
]);

const serviceInterestOptions = [
  'Managed IT Services',
  'Cybersecurity',
  'Cloud Solutions & Migration',
  'Custom Software Development',
  'Web Development & SEO',
  'Mobile App Development',
  'AI Automation',
  'IT Consulting & Digital Transformation',
  'Not sure yet',
];

const isValidBusinessEmail = (email) => {
  const trimmedEmail = email.trim().toLowerCase();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(trimmedEmail)) return false;

  const domain = trimmedEmail.split('@')[1];
  return Boolean(domain) && !personalEmailDomains.has(domain);
};

const FreeAuditModal = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!open) {
      setErrors({});
      setIsSubmitting(false);
      setIsSubmitted(false);
    }
  }, [open]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined, submit: undefined }));
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) nextErrors.fullName = 'Full name is required.';
    if (!formData.companyName.trim()) nextErrors.companyName = 'Company name is required.';
    if (!formData.websiteUrl.trim()) nextErrors.websiteUrl = 'Website URL is required.';
    if (!formData.businessEmail.trim()) {
      nextErrors.businessEmail = 'Business email is required.';
    } else if (!isValidBusinessEmail(formData.businessEmail)) {
      nextErrors.businessEmail = 'Use a valid business email address.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    try {
      setIsSubmitting(true);

      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.businessEmail,
          company: formData.companyName,
          website: formData.websiteUrl,
          serviceInterest: formData.serviceInterest || 'Not specified',
          message: formData.improvementGoals || 'Not specified',
          inquiryType: 'Free Growth Audit',
          _subject: `Privexio free growth audit request from ${formData.companyName}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      if (!response.ok) {
        throw new Error('Audit request submission failed');
      }

      setIsSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      setErrors({
        submit: 'We could not send your request. Please try again in a moment.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] max-w-3xl overflow-y-auto rounded-[1.5rem] border-slate-200 bg-white p-0 text-slate-950 shadow-2xl sm:rounded-[2rem]">
        <div className="bg-gradient-to-br from-white via-white to-primary/5 px-5 py-6 sm:px-8 sm:py-8">
          <DialogHeader className="text-left">
            <DialogTitle className="max-w-2xl text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
              Get Your Free Growth Audit
            </DialogTitle>
            <DialogDescription className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Tell us about your business and we&apos;ll review your website, positioning, and growth opportunities.
            </DialogDescription>
          </DialogHeader>
        </div>

        {isSubmitted ? (
          <div className="px-5 pb-7 sm:px-8 sm:pb-8">
            <div className="rounded-[1.25rem] border border-primary/20 bg-primary/5 p-5">
              <CheckCircle className="h-8 w-8 text-primary" />
              <p className="mt-4 text-lg font-bold text-slate-950">
                Thanks! We&apos;ll review your details and get back to you shortly.
              </p>
              <Button type="button" className="mt-6 rounded-full px-6" onClick={() => onOpenChange(false)}>
                Close
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5 px-5 pb-7 sm:px-8 sm:pb-8">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="audit-full-name">Full Name</Label>
                <Input id="audit-full-name" name="fullName" value={formData.fullName} onChange={handleChange} required />
                {errors.fullName && <p className="text-sm font-medium text-destructive">{errors.fullName}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="audit-business-email">Business Email</Label>
                <Input id="audit-business-email" type="email" name="businessEmail" value={formData.businessEmail} onChange={handleChange} required />
                {errors.businessEmail && <p className="text-sm font-medium text-destructive">{errors.businessEmail}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="audit-company-name">Company Name</Label>
                <Input id="audit-company-name" name="companyName" value={formData.companyName} onChange={handleChange} required />
                {errors.companyName && <p className="text-sm font-medium text-destructive">{errors.companyName}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="audit-website-url">Website URL</Label>
                <Input id="audit-website-url" type="url" name="websiteUrl" value={formData.websiteUrl} onChange={handleChange} placeholder="https://example.com" required />
                {errors.websiteUrl && <p className="text-sm font-medium text-destructive">{errors.websiteUrl}</p>}
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="audit-service-interest">Which service are you interested in?</Label>
                <select
                  id="audit-service-interest"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                >
                  <option value="">Select a service</option>
                  {serviceInterestOptions.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="audit-improvement-goals">What are you looking to improve?</Label>
              <Textarea
                id="audit-improvement-goals"
                name="improvementGoals"
                value={formData.improvementGoals}
                onChange={handleChange}
                className="min-h-28"
                placeholder="Website conversions, SEO, positioning, lead quality, automation, sales process..."
              />
            </div>

            {errors.submit && <p className="rounded-xl bg-destructive/10 p-3 text-sm font-medium text-destructive">{errors.submit}</p>}

            <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:items-center sm:justify-end">
              <Button type="button" variant="outline" className="rounded-full px-6" onClick={() => onOpenChange(false)}>
                Close
              </Button>
              <Button type="submit" disabled={isSubmitting} className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90 disabled:opacity-70">
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Request Free Audit
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FreeAuditModal;

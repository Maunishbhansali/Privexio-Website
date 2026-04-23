import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACT_EMAIL, MAILTO_URL } from '@/lib/site-links';
import { usePageMeta } from '@/hooks/use-page-meta';

const LAST_UPDATED = 'April 23, 2026';

const PrivacyPolicyPage = () => {
  usePageMeta(
    'Privacy Policy',
    'Read Privexio privacy practices, including what information we collect and how we use it.'
  );

  return (
    <div className="page-shell min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <section className="border-b border-border bg-background">
          <div className="page-container-narrow">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Legal</p>
            <h1 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">Privacy Policy</h1>
            <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
              This policy explains how we collect, use, and protect information when you visit Privexio.com or contact us.
            </p>
            <p className="mt-6 pb-10 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        <section className="page-section">
          <div className="page-container-narrow space-y-10 text-muted-foreground">
            <div className="rounded-2xl border border-border bg-card p-6 text-sm">
              This template is provided for general informational purposes and should be reviewed by legal counsel to
              ensure it matches your operations, vendors, and jurisdiction.
            </div>

            <section>
              <h2 className="text-2xl font-bold text-foreground">1. Who We Are</h2>
              <p className="mt-4">
                Privexio ("we", "us") operates the website at Privexio.com. If you have questions about this policy,
                contact us at <a className="text-primary underline-offset-4 hover:underline" href={MAILTO_URL}>{CONTACT_EMAIL}</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
              <p className="mt-4">
                We collect information you provide directly and information collected automatically when you use our site.
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-2">
                <li>
                  Contact details: name, email, phone number, company name, and message content when you submit forms or email us.
                </li>
                <li>
                  Usage data: device and browser information, pages viewed, approximate location (city/region), and basic referral information.
                </li>
                <li>
                  Cookies and similar technologies: used for basic functionality, security, and analytics (where enabled).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">3. How We Use Information</h2>
              <ul className="mt-4 list-disc pl-6 space-y-2">
                <li>Respond to inquiries and provide requested information.</li>
                <li>Schedule consultations and communicate about services.</li>
                <li>Improve website performance, content, and user experience.</li>
                <li>Protect against fraud, abuse, and security incidents.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">4. How We Share Information</h2>
              <p className="mt-4">
                We do not sell your personal information. We may share information with service providers that help us run
                our website and communications (for example hosting, email, forms, and analytics), and when required to
                comply with law or to protect rights and safety.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">5. Cookies</h2>
              <p className="mt-4">
                Cookies are small files stored on your device. You can usually control cookies through your browser
                settings. Disabling cookies may impact certain features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">6. Data Retention</h2>
              <p className="mt-4">
                We retain information for as long as needed to respond to your request, provide services, comply with legal
                obligations, and maintain reasonable business records.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">7. Security</h2>
              <p className="mt-4">
                We use administrative, technical, and organizational safeguards intended to protect information. No method
                of transmission or storage is completely secure, so we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">8. Your Choices</h2>
              <ul className="mt-4 list-disc pl-6 space-y-2">
                <li>Request updates or corrections to information you provided.</li>
                <li>Opt out of non-essential communications by replying to an email or contacting us.</li>
                <li>Control cookies through your browser settings.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">9. Changes to This Policy</h2>
              <p className="mt-4">
                We may update this policy from time to time. We will post the latest version on this page and update the
                "Last updated" date.
              </p>
            </section>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xl font-bold text-foreground">Need Help?</h2>
              <p className="mt-3">
                Contact us at <a className="text-primary underline-offset-4 hover:underline" href={MAILTO_URL}>{CONTACT_EMAIL}</a>{' '}
                or use the <Link className="text-primary underline-offset-4 hover:underline" href="/contact">contact page</Link>.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;

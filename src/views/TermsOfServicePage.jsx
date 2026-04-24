import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { CONTACT_EMAIL, MAILTO_URL } from '@/lib/site-links';
import { usePageMeta } from '@/hooks/use-page-meta';

const LAST_UPDATED = 'April 23, 2026';

const TermsOfServicePage = () => {
  usePageMeta(
    'Terms of Service',
    'Review Privexio terms of service for using our website and engaging with our services.'
  );

  return (
    <div className="page-shell min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <PageHero
          eyebrow="Legal"
          title="Terms of Service"
          description="These terms govern your use of Privexio.com and outline general conditions for engaging with Privexio."
        >
          <p className="mb-6 text-sm font-semibold text-slate-300">Last updated: {LAST_UPDATED}</p>
        </PageHero>

        <section className="page-section">
          <div className="page-container-narrow space-y-10 text-muted-foreground">
            <div className="rounded-2xl border border-border bg-card p-6 text-sm">
              This template is provided for general informational purposes and should be reviewed by legal counsel. Client
              service agreements (SOW/MSA) will supersede these terms where applicable.
            </div>

            <section>
              <h2 className="text-2xl font-bold text-foreground">1. Acceptance of These Terms</h2>
              <p className="mt-4">
                By accessing or using this website, you agree to these Terms of Service. If you do not agree, do not use the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">2. Website Use</h2>
              <ul className="mt-4 list-disc pl-6 space-y-2">
                <li>You may use the site for lawful purposes only.</li>
                <li>You may not attempt to disrupt the site, probe security, or scrape content at scale without permission.</li>
                <li>You may not use the site to transmit malicious code or spam.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">3. Services and Engagements</h2>
              <p className="mt-4">
                Information on this website is provided for general informational purposes and does not constitute a binding offer.
                Any professional services we provide are governed by a separate written agreement (such as a statement of work or master services agreement).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">4. Intellectual Property</h2>
              <p className="mt-4">
                The website and its content, including text, graphics, and logos, are owned by Privexio or its licensors and
                are protected by applicable intellectual property laws. You may not copy, modify, or redistribute content without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">5. Third-Party Links</h2>
              <p className="mt-4">
                This site may contain links to third-party websites. We are not responsible for third-party content or practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">6. Disclaimers</h2>
              <p className="mt-4">
                The site is provided on an "as is" and "as available" basis. We disclaim warranties to the maximum extent permitted by law,
                including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">7. Limitation of Liability</h2>
              <p className="mt-4">
                To the maximum extent permitted by law, Privexio will not be liable for indirect, incidental, special, consequential,
                or punitive damages arising out of or related to your use of this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">8. Changes and Termination</h2>
              <p className="mt-4">
                We may update these terms at any time by posting an updated version on this page. We may suspend or terminate access
                to the site at any time for any reason.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">9. Contact</h2>
              <p className="mt-4">
                Questions about these terms? Email us at{' '}
                <a className="text-primary underline-offset-4 hover:underline" href={MAILTO_URL}>{CONTACT_EMAIL}</a>
                , or use the <Link className="text-primary underline-offset-4 hover:underline" href="/contact">contact page</Link>.
              </p>
            </section>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;

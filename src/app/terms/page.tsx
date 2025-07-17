import React from 'react';
import { Metadata } from 'next';
import BaseCard from '@/components/common/BaseCard';

export const metadata: Metadata = {
  title: 'Terms of Service | Prismxy',
  description: 'Terms of service for Prismxy - Learn about our terms and conditions.',
};

const TermsPage = () => {
  return (
    <main className="relative z-10 py-8 px-4 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Terms of Service
          </h1>
          <p className="text-lg sm:text-xl opacity-80">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <BaseCard className="border-0 shadow-lg">
            <div className="space-y-6">
              <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Acceptance of Terms</h2>
                <div className="space-y-3 text-sm sm:text-base">
                  <p>
                    By accessing and using Prismxy, you accept and agree to be bound by the terms
                    and provision of this agreement.
                  </p>
                  <p>If you do not agree to abide by the above, please do not use this service.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Use License</h2>
                <div className="space-y-3 text-sm sm:text-base">
                  <p>
                    Permission is granted to temporarily use Prismxy for personal, non-commercial
                    use only. This is the grant of a license, not a transfer of title, and under
                    this license you may not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose</li>
                    <li>Attempt to reverse engineer any software contained on Prismxy</li>
                    <li>Remove any copyright or other proprietary notations</li>
                    <li>Transfer the materials to another person</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">User Accounts</h2>
                <div className="space-y-3 text-sm sm:text-base">
                  <p>
                    When you create an account with us, you must provide accurate and complete
                    information. You are responsible for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Maintaining the security of your account</li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized use</li>
                    <li>Ensuring your account information is up to date</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Content Guidelines</h2>
                <div className="space-y-3 text-sm sm:text-base">
                  <p>You agree not to post content that:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Is illegal, harmful, threatening, or abusive</li>
                    <li>Infringes on intellectual property rights</li>
                    <li>Contains viruses or malicious code</li>
                    <li>Is spam or unsolicited advertising</li>
                    <li>Violates privacy or data protection laws</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Service Availability</h2>
                <div className="space-y-3 text-sm sm:text-base">
                  <p>
                    We strive to maintain high availability of our services, but we do not guarantee
                    uninterrupted access. We may temporarily suspend services for maintenance or
                    updates.
                  </p>
                  <p>
                    We are not liable for any damages resulting from service interruptions or
                    technical issues.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Limitation of Liability</h2>
                <div className="space-y-3 text-sm sm:text-base">
                  <p>
                    In no event shall Prismxy or its suppliers be liable for any damages arising out
                    of the use or inability to use the materials on our website.
                  </p>
                  <p>
                    This includes but is not limited to damages for loss of data or profit, or due
                    to business interruption.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Termination</h2>
                <div className="space-y-3 text-sm sm:text-base">
                  <p>
                    We may terminate or suspend your account and access to our services at any time,
                    without prior notice, for conduct that we believe violates these Terms of
                    Service or is harmful to other users or us.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Changes to Terms</h2>
                <div className="space-y-3 text-sm sm:text-base">
                  <p>
                    We reserve the right to modify these terms at any time. We will notify users of
                    any material changes by posting the new terms on this page.
                  </p>
                  <p>
                    Your continued use of the service after changes constitutes acceptance of the
                    new terms.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-3 text-sm sm:text-base">
                  <p>
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <p className="font-medium">
                    Email: legal@prismxy.com
                    <br />
                    Address: 123 Innovation Street, Tech City, TC 12345
                  </p>
                </div>
              </section>
            </div>
          </BaseCard>
        </div>
      </div>
    </main>
  );
};

export default TermsPage;

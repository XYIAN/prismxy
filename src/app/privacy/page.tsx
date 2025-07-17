import React from 'react';
import { Metadata } from 'next';
import BaseCard from '@/components/common/BaseCard';

export const metadata: Metadata = {
  title: 'Privacy Policy | Prismxy',
  description: 'Privacy policy for Prismxy - Learn how we protect your data and privacy.',
};

const PrivacyPage = () => {
  return (
    <main className="relative z-10 py-8 px-4 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl opacity-80">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <BaseCard className="border-0 shadow-lg">
            <div className="space-y-6">
              <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Information We Collect</h2>
                <div className="space-y-3 text-sm sm:text-base">
                  <p>
                    We collect information you provide directly to us, such as when you create a
                    profile, update your information, or contact us for support.
                  </p>
                  <p>
                    This may include your name, email address, profile information, and any other
                    information you choose to provide.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                  How We Use Your Information
                </h2>
                <div className="space-y-3 text-sm sm:text-base">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process and complete transactions</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Communicate with you about products, services, and events</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Information Sharing</h2>
                <div className="space-y-3 text-sm sm:text-base">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third
                    parties without your consent, except as described in this policy.
                  </p>
                  <p>
                    We may share your information with service providers who assist us in operating
                    our website and providing services to you.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Data Security</h2>
                <div className="space-y-3 text-sm sm:text-base">
                  <p>
                    We implement appropriate security measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <p>
                    However, no method of transmission over the internet or electronic storage is
                    100% secure, so we cannot guarantee absolute security.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Your Rights</h2>
                <div className="space-y-3 text-sm sm:text-base">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt out of marketing communications</li>
                    <li>Lodge a complaint with supervisory authorities</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Contact Us</h2>
                <div className="space-y-3 text-sm sm:text-base">
                  <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                  <p className="font-medium">
                    Email: privacy@prismxy.com
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

export default PrivacyPage;

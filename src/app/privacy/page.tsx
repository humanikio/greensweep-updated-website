import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Greensweep Niagara',
  description: 'Privacy Policy for Greensweep Niagara. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-primary-foreground/90">
            Last updated: January 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg text-muted-foreground mb-8">
              At Greensweep Niagara, we are committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our
              website or use our services.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We may collect information about you in various ways, including:
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
            <p className="text-muted-foreground mb-4">
              When you contact us, request a quote, or use our services, we may collect:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Property address</li>
              <li>Service preferences and project details</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Automatically Collected Information</h3>
            <p className="text-muted-foreground mb-4">
              When you visit our website, we may automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website</li>
              <li>IP address (anonymized)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Respond to your inquiries and provide quotes</li>
              <li>Deliver the landscaping services you request</li>
              <li>Communicate with you about your projects and appointments</li>
              <li>Send you updates about our services (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Information Sharing</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share
              your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>With service providers who assist in our operations (e.g., payment processing)</li>
              <li>To comply with legal requirements or respond to lawful requests</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>With your explicit consent</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Cookies and Tracking</h2>
            <p className="text-muted-foreground mb-6">
              Our website may use cookies and similar tracking technologies to enhance your browsing
              experience. Cookies are small files stored on your device that help us understand how
              you use our site. You can control cookie preferences through your browser settings.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Data Security</h2>
            <p className="text-muted-foreground mb-6">
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. However,
              no method of transmission over the internet is 100% secure, and we cannot guarantee
              absolute security.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent where applicable</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Third-Party Links</h2>
            <p className="text-muted-foreground mb-6">
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices or content of these external sites. We encourage you to review the
              privacy policies of any third-party sites you visit.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground mb-6">
              Our services are not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children. If you believe we have inadvertently
              collected information from a child, please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground mb-6">
              We may update this Privacy Policy from time to time. Any changes will be posted on this
              page with an updated "Last updated" date. We encourage you to review this policy
              periodically for any updates.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices,
              please contact us:
            </p>
            <div className="bg-secondary rounded-lg p-6 mb-6">
              <p className="text-foreground font-semibold mb-2">Greensweep Niagara</p>
              <p className="text-muted-foreground">
                Email:{' '}
                <a
                  href="mailto:greensweepniagara@gmail.com"
                  className="text-accent hover:underline"
                >
                  greensweepniagara@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground">
                Phone:{' '}
                <a href="tel:9059318022" className="text-accent hover:underline">
                  (905) 931-8022
                </a>
              </p>
            </div>

            <div className="border-t pt-8 mt-12">
              <p className="text-sm text-muted-foreground">
                By using our website or services, you acknowledge that you have read and understood
                this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from 'next';
import { Eyebrow } from '@/components/site-ui';

export const metadata: Metadata = {
  title: 'Terms of Service | GreenSweep Niagara',
  description: 'Terms of Service for GreenSweep Niagara landscaping services. Read our service terms, policies, and conditions.',
};

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-brand py-20 text-white md:py-28">
        <div className="container mx-auto px-4 text-center">
          <Eyebrow className="mb-5 text-clay-soft">Legal</Eyebrow>
          <h1 className="font-display text-4xl font-light leading-[1.12] md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-5 text-sm uppercase tracking-[0.18em] text-white/55">
            Last updated: January 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg text-muted-foreground mb-8">
              Welcome to GreenSweep Niagara. By using our website or engaging our landscaping services,
              you agree to be bound by these Terms of Service. Please read them carefully.
            </p>

            <h2 className="font-display text-2xl font-normal mt-12 mb-4">1. Services</h2>
            <p className="text-muted-foreground mb-4">
              GreenSweep Niagara provides landscaping services including but not limited to lawn care
              and maintenance, landscape design, hardscaping, garden installation, seasonal cleanup,
              and related outdoor services throughout the Niagara Region.
            </p>
            <p className="text-muted-foreground mb-6">
              All services are subject to availability and weather conditions. We reserve the right
              to reschedule services when conditions are unsafe or would result in substandard work.
            </p>

            <h2 className="font-display text-2xl font-normal mt-12 mb-4">2. Quotes and Pricing</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>All quotes are provided free of charge and are valid for 30 days unless otherwise stated.</li>
              <li>Quotes are based on the information provided and conditions observed at the time of assessment.</li>
              <li>Final pricing may vary if actual conditions differ from those described or observed.</li>
              <li>Additional work beyond the original scope will be quoted separately and requires approval before proceeding.</li>
              <li>Prices are quoted in Canadian dollars and are subject to applicable taxes.</li>
            </ul>

            <h2 className="font-display text-2xl font-normal mt-12 mb-4">3. Payment Terms</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>For ongoing maintenance services, invoices are typically issued monthly and due within 15 days.</li>
              <li>For project-based work, a deposit may be required to secure scheduling and materials.</li>
              <li>Final payment is due upon completion of services unless otherwise agreed in writing.</li>
              <li>Late payments may be subject to interest charges as permitted by law.</li>
              <li>We accept cash, cheque, e-transfer, and major credit cards.</li>
            </ul>

            <h2 className="font-display text-2xl font-normal mt-12 mb-4">4. Scheduling and Cancellations</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>We will make reasonable efforts to adhere to scheduled service dates and times.</li>
              <li>Weather conditions, equipment issues, or other unforeseen circumstances may necessitate rescheduling.</li>
              <li>We will communicate any schedule changes as promptly as possible.</li>
              <li>Cancellations by the client should be communicated at least 24 hours in advance when possible.</li>
              <li>Repeated last-minute cancellations may result in cancellation fees.</li>
            </ul>

            <h2 className="font-display text-2xl font-normal mt-12 mb-4">5. Property Access</h2>
            <p className="text-muted-foreground mb-4">
              By engaging our services, you grant GreenSweep Niagara permission to access your property
              for the purpose of providing the agreed-upon services. You agree to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Ensure safe access to the areas requiring service.</li>
              <li>Secure pets during service visits.</li>
              <li>Inform us of any hazards, underground utilities, or special considerations.</li>
              <li>Provide access to water sources when required for the services.</li>
            </ul>

            <h2 className="font-display text-2xl font-normal mt-12 mb-4">6. Workmanship and Warranty</h2>
            <p className="text-muted-foreground mb-4">
              We take pride in our work and stand behind the quality of our services:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Hardscaping work is warranted against defects in workmanship for a period of one year from completion.</li>
              <li>Plant material warranties vary by type and are subject to proper care by the property owner.</li>
              <li>Warranty claims must be reported in writing within 30 days of discovery.</li>
              <li>Warranties do not cover damage caused by weather events, improper maintenance, or third parties.</li>
            </ul>

            <h2 className="font-display text-2xl font-normal mt-12 mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-6">
              While we carry comprehensive liability insurance, our total liability for any claim
              arising from our services shall not exceed the amount paid for the specific service
              in question. We are not liable for indirect, incidental, or consequential damages.
            </p>

            <h2 className="font-display text-2xl font-normal mt-12 mb-4">8. Property Damage</h2>
            <p className="text-muted-foreground mb-6">
              We take great care to protect your property. However, some risks are inherent to
              landscaping work. We are not responsible for damage to underground utilities,
              irrigation systems, or other features not disclosed prior to commencement of work.
              Any claims for property damage must be reported within 48 hours of the service date.
            </p>

            <h2 className="font-display text-2xl font-normal mt-12 mb-4">9. Termination</h2>
            <p className="text-muted-foreground mb-4">
              Either party may terminate ongoing service agreements with 30 days written notice.
              Upon termination:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>All outstanding invoices become immediately due.</li>
              <li>Prepaid services will be refunded on a prorated basis.</li>
              <li>Any materials ordered specifically for your project may be non-refundable.</li>
            </ul>

            <h2 className="font-display text-2xl font-normal mt-12 mb-4">10. Dispute Resolution</h2>
            <p className="text-muted-foreground mb-6">
              We believe in resolving issues through open communication. If a dispute arises,
              please contact us directly to discuss the matter. If we cannot reach a resolution,
              disputes shall be resolved through mediation or, if necessary, through the courts
              of Ontario, Canada.
            </p>

            <h2 className="font-display text-2xl font-normal mt-12 mb-4">11. Website Use</h2>
            <p className="text-muted-foreground mb-4">
              By using our website, you agree to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Use the site only for lawful purposes.</li>
              <li>Not attempt to interfere with the site's functionality.</li>
              <li>Not copy, reproduce, or distribute content without permission.</li>
              <li>Provide accurate information when submitting forms or requests.</li>
            </ul>

            <h2 className="font-display text-2xl font-normal mt-12 mb-4">12. Changes to Terms</h2>
            <p className="text-muted-foreground mb-6">
              We reserve the right to modify these Terms of Service at any time. Changes will be
              posted on this page with an updated date. Continued use of our services after changes
              are posted constitutes acceptance of the modified terms.
            </p>

            <h2 className="font-display text-2xl font-normal mt-12 mb-4">13. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="mb-6 rounded-sm border border-brand/10 bg-white p-6 shadow-sm">
              <p className="mb-2 font-display text-lg font-normal text-foreground">GreenSweep Niagara</p>
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
                By using our website or engaging our services, you acknowledge that you have read,
                understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy')({ component: PrivacyPage })

function PrivacyPage() {
  return (
    <div className="page-wrap px-4 py-12 sm:py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-playfair fs-display-lg text-[var(--ink)] mb-6">Privacy Policy</h1>
        <div className="font-body text-[var(--ink)] space-y-6 leading-relaxed">
          <p>hoodmanlive is an independent editorial property. We respect your privacy and are committed to protecting your personal data.</p>
          
          <h2 className="font-playfair text-2xl font-bold mt-8 mb-3">Information We Collect</h2>
          <p>We collect only what is necessary to deliver our newsletter and improve your reading experience:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email address (when you subscribe to The Dispatch)</li>
            <li>Basic usage data via privacy-respecting analytics</li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold mt-8 mb-3">How We Use Your Data</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To send you The Dispatch newsletter (with your explicit consent)</li>
            <li>To improve our editorial content and site performance</li>
            <li>To respond to your inquiries</li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold mt-8 mb-3">Data Sharing</h2>
          <p>We do not sell, trade, or share your personal information with third parties. We use Supabase for secure database hosting and Resend for email delivery — both are GDPR-compliant processors.</p>

          <h2 className="font-playfair text-2xl font-bold mt-8 mb-3">Your Rights</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal data</li>
            <li>Request correction or deletion</li>
            <li>Withdraw consent at any time (unsubscribe link in every email)</li>
            <li>Lodge a complaint with a data protection authority</li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold mt-8 mb-3">Contact</h2>
          <p>For privacy inquiries: <a href="mailto:privacy@hoodmanlive.com" className="text-[var(--maroon)] hover:text-[var(--gold)] underline">privacy@hoodmanlive.com</a></p>

          <p className="text-sm text-[var(--ink-soft)] mt-8">Last updated: August 2026</p>
        </div>
      </div>
    </div>
  )
}
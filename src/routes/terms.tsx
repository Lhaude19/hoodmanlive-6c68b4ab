import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms')({ component: TermsPage })

function TermsPage() {
  return (
    <div className="page-wrap px-4 py-12 sm:py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-playfair fs-display-lg text-[var(--ink)] mb-6">Terms & Conditions</h1>
        <div className="font-body text-[var(--ink)] space-y-6 leading-relaxed">
          <p>Welcome to hoodmanlive. By accessing this website, you agree to these terms and conditions.</p>
          
          <h2 className="font-playfair text-2xl font-bold mt-8 mb-3">Editorial Independence</h2>
          <p>hoodmanlive is an independent editorial property. Our reporting is not influenced by advertisers, sponsors, or the subjects we cover. Editorial decisions are made solely by our editorial desk.</p>

          <h2 className="font-playfair text-2xl font-bold mt-8 mb-3">Content Usage</h2>
          <p>All content on hoodmanlive is protected by copyright. You may:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Read and share articles via the provided share tools</li>
            <li>Quote brief excerpts with proper attribution</li>
            <li>Subscribe to The Dispatch newsletter</li>
          </ul>
          <p>You may not reproduce, distribute, or create derivative works without written permission.</p>

          <h2 className="font-playfair text-2xl font-bold mt-8 mb-3">User Conduct</h2>
          <p>When interacting with our site, you agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate information when subscribing</li>
            <li>Not attempt to gain unauthorized access to our systems</li>
            <li>Not use our content for commercial purposes without permission</li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold mt-8 mb-3">Limitation of Liability</h2>
          <p>hoodmanlive provides information for general informational purposes. While we strive for accuracy, we warrant neither completeness nor fitness for a particular purpose.</p>

          <h2 className="font-playfair text-2xl font-bold mt-8 mb-3">Governing Law</h2>
          <p>These terms are governed by the laws of Ghana. Disputes shall be resolved in the courts of Accra.</p>

          <h2 className="font-playfair text-2xl font-bold mt-8 mb-3">Contact</h2>
          <p>For legal inquiries: <a href="mailto:legal@hoodmanlive.com" className="text-[var(--maroon)] hover:text-[var(--gold)] underline">legal@hoodmanlive.com</a></p>

          <p className="text-sm text-[var(--ink-soft)] mt-8">Last updated: August 2026</p>
        </div>
      </div>
    </div>
  )
}
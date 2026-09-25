import type { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Privacy & Cookies | Tutoring for the Deaf",
  description: "How Tutoring for the Deaf handles website enquiries, tutor applications and cookies.",
}

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="bg-[#b7e4e6]/25 py-16">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#0fa3a3]">Your information</p>
            <h1 className="text-4xl font-bold text-[#0d1b2a] md:text-5xl">Privacy &amp; Cookies</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#0d1b2a]/70">
              This notice explains what happens to information sent through this website and how the site uses cookies and similar technologies.
            </p>
            <p className="mt-4 text-sm text-[#0d1b2a]/60">Last updated: 25 September 2026</p>
          </div>
        </section>

        <div className="container mx-auto max-w-4xl space-y-10 px-4 py-14 text-[#0d1b2a]/80 sm:px-6 lg:px-8 [&_a]:font-medium [&_a]:text-[#0d8f8f] [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#0d1b2a] [&_li]:leading-relaxed [&_p]:leading-relaxed">
          <section>
            <h2>Who is responsible</h2>
            <p>
              Tutoring for the Deaf is responsible for the personal information described in this notice. For privacy questions or requests, email{" "}
              <a href="mailto:tutoringforthedeaf@gmail.com">tutoringforthedeaf@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2>What we collect</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>From parent/carer enquiries: your name, email, any phone number, the student&apos;s year group, learning goals, communication preferences, availability, how you heard about us and anything else you choose to tell us.</li>
              <li>From tutor expressions of interest: your contact details, location, teaching experience, qualifications, availability and any CV you choose to upload.</li>
              <li>When you visit: limited technical information such as request details and IP address may be processed by our hosting provider to deliver and protect the website.</li>
            </ul>
            <p className="mt-3">Please do not send full medical records, identity documents or other information that is not needed for your enquiry or application.</p>
          </section>

          <section>
            <h2>Why we use it and our legal bases</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>We use enquiry information to respond and, if requested, take steps towards arranging tutoring. The lawful basis is taking steps at your request before entering a contract (UK GDPR Article 6(1)(b)).</li>
              <li>We use tutor applications to assess and respond to expressions of interest. Our lawful basis is our legitimate interest in finding suitable tutors (Article 6(1)(f)); if we take steps towards an agreement with you, Article 6(1)(b) may also apply.</li>
              <li>We use limited technical information to operate and secure the site, relying on our legitimate interests in providing a reliable, safe service (Article 6(1)(f)).</li>
              <li>Where needed, we may use or disclose information to meet legal or safeguarding obligations.</li>
            </ul>
            <p className="mt-3">
              Information about a student&apos;s deafness, hearing or other health needs can be special-category data. We ask separately for explicit consent to use the information you choose to provide about those needs to answer an enquiry and assess suitable support (Article 9(2)(a)). You can withdraw that consent by emailing us. Withdrawal will not affect processing already carried out, and we may need to retain some information if another legal obligation applies.
            </p>
            <p className="mt-3 font-semibold text-[#0d1b2a]">
              You have the right to object to processing based on our legitimate interests. Email us to exercise that right.
            </p>
          </section>

          <section>
            <h2>Who receives information</h2>
            <p>
              The website is hosted by Vercel. Form submissions are sent using Resend to our email account, so those providers and our email provider process the information needed to deliver your message. If tutoring is arranged, the provider of the agreed online lesson platform may also process information needed for sessions. We do not sell enquiry or application information or use it for advertising.
            </p>
            <p className="mt-3">
              We may share relevant information with appropriate authorities or safeguarding professionals where necessary to protect a child or comply with law. Social-media links take you to other websites, which have their own privacy and cookie practices.
            </p>
          </section>

          <section>
            <h2>International transfers</h2>
            <p>
              Vercel and Resend may process information outside the UK, including in the United States. You can email us for information about the safeguards applicable to a particular transfer.
            </p>
          </section>

          <section>
            <h2>How long we keep information</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>If an enquiry does not lead to tutoring, we delete the correspondence 12 months after the last contact.</li>
              <li>If a tutor application is unsuccessful, we delete the application, any CV and related correspondence 6 months after the decision.</li>
              <li>If a tutoring or tutor relationship begins, relevant records are kept for the relationship and afterwards only where needed for legal, accounting or safeguarding reasons. Those records are reviewed separately.</li>
            </ul>
            <p className="mt-3">These periods apply to our copies of messages in our mailbox, including sent correspondence. Please contact us if you want to ask about or request deletion of a particular record.</p>
          </section>

          <section>
            <h2>Your choices and rights</h2>
            <p>
              You can ask for access to your information, correction, deletion, restriction or a copy in a portable format where applicable. You can object to processing based on legitimate interests and withdraw any consent you gave for special-category information. Email{" "}
              <a href="mailto:tutoringforthedeaf@gmail.com">tutoringforthedeaf@gmail.com</a> to make a request. Rights depend on the circumstances and are not always absolute.
            </p>
            <p className="mt-3">
              If you are unhappy with our response, you can complain to the{" "}
              <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">Information Commissioner&apos;s Office (ICO)</a>.
            </p>
            <p className="mt-3">
              The forms are intended for parents/carers and adult tutor applicants, not for children to complete themselves. Required fields are marked on each form. Without them, we cannot submit the form, but you can email us instead. We do not make decisions about enquiries or applications solely by automated means.
            </p>
          </section>

          <section id="cookies">
            <h2>Cookies and similar technologies</h2>
            <p>
              The public pages do not currently use analytics, advertising or social-media tracking cookies or pixels. We have not added a cookie-consent banner because the site does not currently use non-essential cookies or similar technologies. Our host may use strictly necessary technical measures to deliver and protect the site.
            </p>
            <p className="mt-3">
              If we add non-essential cookies or tracking in future, we will update this notice and introduce the consent or objection controls required before using them. Clicking a link to Instagram or TikTok takes you away from this site; those services may set their own cookies.
            </p>
          </section>

          <section className="rounded-2xl border border-[#b7e4e6] bg-[#b7e4e6]/15 p-6">
            <h2>Questions?</h2>
            <p>
              Contact us at <a href="mailto:tutoringforthedeaf@gmail.com">tutoringforthedeaf@gmail.com</a> or return to the <Link href="/contact">contact page</Link>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

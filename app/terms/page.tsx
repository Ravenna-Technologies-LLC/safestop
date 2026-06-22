import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using SafeStop.",
  alternates: { canonical: "https://safestop.global/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="The ground rules" title="Terms & Conditions" updated="June 19, 2026">
      <p>These Terms &amp; Conditions govern your use of SafeStop, a service operated by Ravenna Technologies LLC. By accessing the website or using the mobile application, you agree to these terms.</p>
      <h2>Purpose of SafeStop</h2>
      <p>SafeStop provides tools to help parents and caregivers remember child passengers, share trip status, receive alerts, and maintain trip history. SafeStop is an aid, not a substitute for attentive caregiving, safe driving, or checking your vehicle in person.</p>
      <h2>Eligibility and accounts</h2>
      <p>You must be at least 18 years old and able to enter a binding agreement to create an account. You are responsible for the accuracy of your information, safeguarding your account credentials, and all activity under your account.</p>
      <h2>Safety responsibilities</h2>
      <p>You remain solely responsible for the safety and supervision of every child in your care. Do not interact with SafeStop while driving. Alerts may be delayed or unavailable due to device settings, network conditions, service interruptions, or other factors.</p>
      <h2>Trusted partners</h2>
      <p>You may choose to share trip-related information with trusted partners. You are responsible for obtaining appropriate permission before adding a person or sharing information with them. Trusted partners should not rely on SafeStop as their only source of safety information.</p>
      <h2>Free and premium features</h2>
      <p>Core safety features are available without charge. An optional premium plan may remove advertising and provide extended trip history. Pricing, billing frequency, and cancellation terms will be displayed before purchase through the applicable app marketplace.</p>
      <h2>Acceptable use</h2>
      <p>You may not misuse SafeStop, interfere with its operation, attempt unauthorized access, reverse engineer the service where prohibited by law, or use it to violate another person&apos;s rights or any applicable law.</p>
      <h2>Intellectual property</h2>
      <p>SafeStop, its visual design, software, content, and trademarks are owned by Ravenna Technologies LLC or its licensors. These terms grant you a limited, personal, revocable, non-transferable license to use the service as intended.</p>
      <h2>Disclaimers</h2>
      <p>SafeStop is provided “as is” and “as available.” To the fullest extent permitted by law, we disclaim warranties of merchantability, fitness for a particular purpose, non-infringement, and uninterrupted or error-free operation.</p>
      <h2>Limitation of liability</h2>
      <p>To the fullest extent permitted by law, Ravenna Technologies LLC will not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use SafeStop.</p>
      <h2>Changes and termination</h2>
      <p>We may update SafeStop or these terms from time to time. We may suspend or terminate access when necessary to protect users, comply with law, or enforce these terms. Continued use after an update means you accept the revised terms.</p>
      <h2>Contact</h2>
      <p>Questions about these Terms &amp; Conditions may be sent to Ravenna Technologies LLC through the contact method provided in the SafeStop app.</p>
    </LegalPage>
  );
}

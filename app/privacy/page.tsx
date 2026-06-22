import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how SafeStop handles and protects your information.",
  alternates: { canonical: "https://safestop.global/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Your privacy matters" title="Privacy Policy" updated="June 19, 2026">
      <p>SafeStop Global is operated by Ravenna Technologies LLC. This Privacy Policy explains how we collect, use, and protect information when you use the SafeStop website and mobile application.</p>
      <h2>Information we collect</h2>
      <p>We may collect information you provide directly, such as account details, child profile names or nicknames, trusted partner information, and support messages. When you use the app, we may also collect trip status, timestamps, device information, notification tokens, and approximate location data required to provide safety alerts.</p>
      <h2>How we use information</h2>
      <p>We use information to operate and improve SafeStop, deliver trip and checkout reminders, notify trusted partners at your direction, maintain trip history, respond to support requests, and protect the security and integrity of the service.</p>
      <h2>Location and notifications</h2>
      <p>SafeStop may request access to location services and notifications on your device. These permissions support core safety features. You can control them through your device settings, though disabling them may limit app functionality.</p>
      <h2>Sharing of information</h2>
      <p>We do not sell your personal information. We may share information with service providers who help us operate SafeStop, with trusted partners you choose, when required by law, or as part of a business transfer. Service providers may only use information to perform services on our behalf.</p>
      <h2>Data retention</h2>
      <p>We retain information for as long as needed to provide SafeStop, meet legal obligations, resolve disputes, and enforce our agreements. Retention periods may vary depending on your plan and the type of information.</p>
      <h2>Children&apos;s privacy</h2>
      <p>SafeStop is intended for use by parents and adult caregivers. Children should not create their own accounts or submit personal information directly. Adults are responsible for the child-related information they add to SafeStop.</p>
      <h2>Your choices</h2>
      <p>You may update account information in the app, adjust device permissions, or request access to or deletion of your information by contacting us. Certain information may be retained where legally required.</p>
      <h2>Security</h2>
      <p>We use reasonable administrative, technical, and organizational safeguards to protect information. No system can guarantee absolute security, and we encourage you to use a strong password and safeguard your device.</p>
      <h2>Changes to this policy</h2>
      <p>We may update this Privacy Policy as SafeStop evolves. We will post the revised version here and update the effective date. Material changes may also be communicated through the app.</p>
      <h2>Contact us</h2>
      <p>Questions about this Privacy Policy may be sent to Ravenna Technologies LLC through the contact method provided in the SafeStop app.</p>
    </LegalPage>
  );
}

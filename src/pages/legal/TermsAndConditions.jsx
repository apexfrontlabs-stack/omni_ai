import { Link } from "react-router-dom";
import LegalLayout from "./LegalLayout";

// Apni asli maloomat yahan likhein
const CONTACT_EMAIL = "support@yourdomain.com";
const COMPANY_NAME = "OmniAI";
const GOVERNING_LAW = "the laws of Pakistan"; // apne mulk/jagah ke hisaab se badlein

function List({ items }) {
  return (
    <ul className="list-disc space-y-2 pl-6">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

const sections = [
  {
    id: "eligibility",
    title: "1. Eligibility and your account",
    content: (
      <>
        <p>
          You must be legally able to enter into a binding agreement to use OmniAI. If you use
          the service on behalf of an organization, you confirm that you have the authority to
          bind that organization to these terms.
        </p>
        <p>
          You are responsible for giving accurate account information, keeping your login
          details confidential, and everything done through your account. Please tell us
          promptly if you suspect unauthorized access.
        </p>
      </>
    ),
  },
  {
    id: "service",
    title: "2. The service",
    content: (
      <>
        <p>
          OmniAI helps teams automate work using AI-powered features. Depending on your plan,
          you may be able to connect tools, build workflows, upload documents, ask questions
          about files, and receive AI-generated responses.
        </p>
        <p>
          Features may change over time. We may add, modify, suspend, or discontinue features
          where reasonably necessary, subject to applicable law and any separate agreement that
          applies to your account.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "3. Acceptable use",
    content: (
      <>
        <p>You agree not to use OmniAI to:</p>
        <List
          items={[
            "Break the law or violate another person's rights.",
            "Upload content you do not have permission to use.",
            "Try to gain unauthorized access to accounts, systems, or data.",
            "Spread malware or interfere with how the service works.",
            "Commit fraud, harassment, or other harmful activity.",
            "Reverse engineer or bypass service safeguards, except where the law allows it.",
            "Rely on AI outputs for high-impact decisions without proper human review.",
          ]}
        />
      </>
    ),
  },
  {
    id: "your-content",
    title: "4. Your content and files",
    content: (
      <>
        <p>
          You keep the rights you have in the documents, prompts, messages, and other content you
          submit. You are responsible for making sure you have the permissions needed to upload
          and process that content.
        </p>
        <p>
          You allow us to host, store, process, and transmit your content only as needed to
          operate, secure, and provide the features you request, in line with our{" "}
          <Link to="/privacy" className="font-semibold text-deepSpruce underline underline-offset-4">
            Privacy Policy
          </Link>
          . This is a permission to run the service, not a transfer of ownership.
        </p>
        <p>
          Do not upload sensitive or confidential material unless you are authorized to do so.
          Please keep your own backups of important files.
        </p>
      </>
    ),
  },
  {
    id: "ai-responses",
    title: "5. AI-generated responses",
    content: (
      <>
        <p>
          AI responses can be inaccurate, incomplete, outdated, or unsuitable for your situation.
          Treat them as helpful information, not as guaranteed facts or professional advice.
        </p>
        <p>
          Please review outputs before relying on them, especially for legal, medical, financial,
          or other important decisions. A response may not always reflect what an uploaded
          document actually says.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "6. Intellectual property",
    content: (
      <>
        <p>
          OmniAI, including its branding, software, and design, is owned by or licensed to us and
          protected by intellectual property law.
        </p>
        <p>
          These terms do not give you ownership of our software or branding. You may use the
          service for its intended purpose, and you keep the rights in your own content.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "7. Third-party services",
    content: (
      <p>
        Some features rely on third-party infrastructure, AI providers, or sign-in services. They
        have their own terms and privacy practices, and we are not responsible for them to the
        extent the law allows.
      </p>
    ),
  },
  {
    id: "availability",
    title: "8. Availability",
    content: (
      <p>
        We work to keep OmniAI available and reliable, but we cannot promise uninterrupted
        access. Maintenance, technical problems, security events, or things outside our control
        may affect availability.
      </p>
    ),
  },
  {
    id: "termination",
    title: "9. Suspension and termination",
    content: (
      <>
        <p>
          You can stop using OmniAI at any time. We may restrict, suspend, or end access where
          reasonably necessary to deal with a breach of these terms, a security risk, a legal
          obligation, or misuse.
        </p>
        <p>
          Where appropriate and allowed by law, we will give notice or a chance to fix the
          problem first. What happens to your data afterwards is explained in our Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: "disclaimers",
    title: "10. Disclaimers",
    content: (
      <>
        <p>
          To the extent the law allows, OmniAI is provided "as is" and "as available". We do not
          promise that it will always be available, error-free, or suitable for every purpose.
        </p>
        <p>
          Nothing in these terms removes any protection that cannot lawfully be removed.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "11. Limitation of liability",
    content: (
      <>
        <p>
          To the extent the law allows, {COMPANY_NAME} and its operators are not liable for
          indirect, incidental, special, consequential, or punitive losses from your use of the
          service, including loss of data, profits, or business opportunities.
        </p>
        <p>
          Nothing in these terms limits liability where the law does not allow it to be limited.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "12. Changes to these terms",
    content: (
      <>
        <p>
          We may update these terms as the service or the law changes. The new version will be
          posted on this page with a revised date. Where the law requires, we will give extra
          notice or ask for your consent.
        </p>
        <p>
          If you keep using the service after the changes take effect, the updated terms apply to
          you, to the extent the law allows.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "13. Governing law",
    content: (
      <p>
        These terms are governed by {GOVERNING_LAW}, without overriding any mandatory consumer
        protections that apply to you.
      </p>
    ),
  },
  {
    id: "contact",
    title: "14. Contact us",
    content: (
      <>
        <p>
          Questions about these terms? Email us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-deepSpruce underline underline-offset-4"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <p>
          See also our{" "}
          <Link to="/privacy" className="font-semibold text-deepSpruce underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
      </>
    ),
  },
];

export default function TermsAndConditions() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      updated="October 26, 2026"
      intro="These terms govern your use of OmniAI, including our website, AI-powered tools, and related services. By using OmniAI, you agree to them. If you do not agree, please do not use the service."
      sections={sections}
    />
  );
}
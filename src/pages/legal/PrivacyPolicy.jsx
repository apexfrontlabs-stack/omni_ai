import { Link } from "react-router-dom";
import LegalLayout from "./LegalLayout";

const CONTACT_EMAIL = "omniai@gmail.com"; 

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
    id: "information-we-collect",
    title: "1. Information we collect",
    content: (
      <>
        <p>
          <strong className="text-slateCharcoal">Account information.</strong> When you create an
          account, we collect your name, email address, and password (stored in protected form).
        </p>
        <p>
          <strong className="text-slateCharcoal">Content you provide.</strong> This includes
          prompts, messages, and files you upload while using our AI features.
        </p>
        <p>
          <strong className="text-slateCharcoal">Technical information.</strong> We collect basic
          technical data such as browser type, device information, and error logs to keep the
          service reliable and secure.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "2. How we use information",
    content: (
      <>
        <p>We use your information to:</p>
        <List
          items={[
            "Create and manage your account.",
            "Provide AI responses and run the automations you set up.",
            "Keep the service secure and prevent abuse.",
            "Fix errors and improve reliability.",
            "Reply to support requests and send important service updates.",
            "Meet legal obligations and enforce our Terms.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ai-processing",
    title: "3. AI processing and your content",
    content: (
      <>
        <p>
          To answer a prompt or run a workflow, relevant content may be processed by our systems
          and by AI service providers working on our behalf.
        </p>
        <p>
          Please do not upload sensitive or confidential information unless you are authorized to
          do so.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "4. How we share information",
    content: (
      <>
        <p>We do not sell your personal information. We share it only when needed, with:</p>
        <List
          items={[
            "Service providers, such as hosting, storage, authentication, and security partners.",
            "AI providers that process content to generate responses.",
            "Authorities, when the law requires it or to protect safety and rights.",
            "A buyer or successor, if OmniAI is involved in a merger or sale of the business.",
          ]}
        />
      </>
    ),
  },
  {
    id: "security",
    title: "5. Data storage and security",
    content: (
      <p>
        We use technical and organizational safeguards to protect your information from
        unauthorized access, loss, and misuse. No system is completely secure, so we cannot
        guarantee absolute security.
      </p>
    ),
  },
  {
    id: "retention",
    title: "6. Retention and deletion",
    content: (
      <>
        <p>
          We keep your information only as long as needed to provide the service, meet legal
          duties, and resolve disputes.
        </p>
        <p>
          You can ask us to delete your account and data at any time by emailing us. Some copies
          may remain in backups for a limited period, or where the law requires us to keep them.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "7. Cookies",
    content: (
      <p>
        We use essential cookies for sign-in, security, and remembering your preferences. If we
        add analytics or advertising cookies, we will update this policy and, where required, ask
        for your consent.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "8. Your rights",
    content: (
      <>
        <p>Depending on where you live, you may have the right to:</p>
        <List
          items={[
            "Access the personal information we hold about you.",
            "Correct inaccurate information.",
            "Delete your information.",
            "Object to or restrict certain processing.",
            "Withdraw consent where we rely on it.",
          ]}
        />
        <p>We may need to verify your identity before acting on a request.</p>
      </>
    ),
  },
  {
    id: "children",
    title: "9. Children's privacy",
    content: (
      <p>
        OmniAI is not intended for children below the minimum age required by law to use the
        service. If you believe a child has given us personal information, please contact us and
        we will review it.
      </p>
    ),
  },
  {
    id: "transfers",
    title: "10. International transfers",
    content: (
      <p>
        Your information may be processed in countries other than your own. Where required, we use
        appropriate safeguards for these transfers.
      </p>
    ),
  },
  {
    id: "changes",
    title: "11. Changes to this policy",
    content: (
      <p>
        We may update this policy from time to time. We will post the new version here with a
        revised date, and notify you of significant changes where the law requires it.
      </p>
    ),
  },
  {
    id: "contact",
    title: "12. Contact us",
    content: (
      <>
        <p>
          For questions or privacy requests, email us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-deepSpruce underline underline-offset-4"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <p>
          You can also read our{" "}
          <Link to="/term" className="font-semibold text-deepSpruce underline underline-offset-4">
            Terms &amp; Conditions
          </Link>
          .
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="October 26, 2026"
      intro="This policy explains what information OmniAI collects, how we use it, and the choices you have when you use our website and AI-powered services."
      sections={sections}
    />
  );
}
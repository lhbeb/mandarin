import { InfoPage } from "../components/InfoPage";

export default function PrivacyPage() {
  return (
    <InfoPage eyebrow="Privacy" title="Privacy Policy">
      <p>
        RIFTED CARS LLC respects your privacy. This website may receive the
        information you choose to provide when you contact us, place an order, or
        request support.
      </p>
      <h2>How information is used</h2>
      <p>
        We use submitted information to respond to inquiries, fulfill orders,
        provide customer service, maintain website security, and improve the
        restaurant experience. We do not sell personal information.
      </p>
      <h2>Contact</h2>
      <p>
        Privacy questions may be sent to{" "}
        <a href="mailto:info@riftedcars.com">info@riftedcars.com</a>.
      </p>
    </InfoPage>
  );
}

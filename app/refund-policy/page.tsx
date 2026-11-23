import { InfoPage } from "../components/InfoPage";

export default function RefundPolicyPage() {
  return (
    <InfoPage eyebrow="Orders" title="Refund Policy">
      <p>
        If an order is incorrect, missing an item, damaged, or otherwise not as
        expected, contact us as soon as possible at{" "}
        <a href="tel:+12512834593">+1-251-283-4593</a> or{" "}
        <a href="mailto:info@riftedcars.com">info@riftedcars.com</a> with your
        order details.
      </p>
      <p>
        We review concerns individually and may offer a replacement, credit, or
        refund when appropriate. Refund timing depends on the payment provider.
        Perishable food should be reported promptly so we can investigate fairly.
      </p>
    </InfoPage>
  );
}

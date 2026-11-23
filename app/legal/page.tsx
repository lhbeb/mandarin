import { InfoPage } from "../components/InfoPage";

export default function LegalPage() {
  return (
    <InfoPage eyebrow="RIFTED CARS LLC" title="Legal information">
      <p>
        Mandarin Gourmet is operated by RIFTED CARS LLC. These pages provide the
        general business, privacy, ordering, accessibility, and refund information
        for this website.
      </p>
      <h2>Business contact</h2>
      <address>
        RIFTED CARS LLC
        <br />
        30 North Gould Street
        <br />
        Sheridan, WY 82801
        <br />
        United States of America
      </address>
      <p>
        Questions about these policies can be sent to{" "}
        <a href="mailto:info@riftedcars.com">info@riftedcars.com</a> or{" "}
        <a href="tel:+12512834593">+1-251-283-4593</a>.
      </p>
      <p className="info-page__note">
        Last updated: November 23, 2026. Please have these policies reviewed by
        qualified counsel before relying on them as legal advice.
      </p>
    </InfoPage>
  );
}

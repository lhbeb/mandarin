import { InfoPage } from "../components/InfoPage";

export default function TermsPage() {
  return (
    <InfoPage eyebrow="Website use" title="Terms of Use">
      <p>
        By using this website, you agree to use it lawfully and respectfully. Menu
        items, prices, availability, preparation times, and ordering options may
        change without notice.
      </p>
      <h2>Orders and content</h2>
      <p>
        An order is subject to acceptance and availability. Website content is
        provided for general information and may contain errors or omissions.
        RIFTED CARS LLC may update, suspend, or discontinue any part of the site.
      </p>
      <h2>Questions</h2>
      <p>
        Contact <a href="mailto:info@riftedcars.com">info@riftedcars.com</a> for
        questions about these terms.
      </p>
    </InfoPage>
  );
}

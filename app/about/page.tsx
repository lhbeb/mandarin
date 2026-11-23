import { InfoPage } from "../components/InfoPage";

export default function AboutPage() {
  return (
    <InfoPage eyebrow="Our story" title="About Mandarin Gourmet">
      <p>
        Mandarin Gourmet is a Chinese restaurant operated by RIFTED CARS LLC. The
        restaurant was founded by Linda Hughes, who also leads the kitchen as our
        main chef.
      </p>
      <p>
        Linda brings a personal, tradition-minded approach to every dish, with a
        focus on generous hospitality, carefully prepared classics, and food that
        feels welcoming from the first bite.
      </p>
      <h2>Restaurant location</h2>
      <address>
        Mandarin Gourmet
        <br />
        5560 Santa Teresa Blvd
        <br />
        San Jose, CA 95123
        <br />
        United States of America
      </address>
      <h2>Operating company</h2>
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
        Operator phone: <a href="tel:+12512834593">+1-251-283-4593</a>
        <br />
        Email: <a href="mailto:info@riftedcars.com">info@riftedcars.com</a>
      </p>
      <p className="info-page__note">
        The restaurant location and the operating company address are listed
        separately to avoid confusing the restaurant with its operator.
      </p>
    </InfoPage>
  );
}

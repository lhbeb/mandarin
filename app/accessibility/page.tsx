import { InfoPage } from "../components/InfoPage";

export default function AccessibilityPage() {
  return (
    <InfoPage eyebrow="Access for everyone" title="Accessibility">
      <p>
        RIFTED CARS LLC wants this website to be usable by as many people as
        possible. We work to provide clear content, keyboard-friendly navigation,
        readable contrast, and meaningful labels for interactive elements.
      </p>
      <p>
        If you encounter an accessibility barrier, please contact{" "}
        <a href="mailto:info@riftedcars.com">info@riftedcars.com</a> with the
        page and issue so we can work toward a solution.
      </p>
    </InfoPage>
  );
}

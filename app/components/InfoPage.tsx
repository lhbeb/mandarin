import Link from "next/link";
import type { ReactNode } from "react";

export function InfoPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="info-page">
      <div className="info-page__shell">
        <Link className="info-page__back" href="/">
          ← Mandarin Gourmet
        </Link>
        <p className="info-page__eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="info-page__rule" />
        <div className="info-page__content">{children}</div>
        <nav className="info-page__nav" aria-label="Information pages">
          <Link href="/about">About Us</Link>
          <Link href="/legal">Legal</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/accessibility">Accessibility</Link>
          <Link href="/refund-policy">Refund Policy</Link>
        </nav>
      </div>
    </main>
  );
}

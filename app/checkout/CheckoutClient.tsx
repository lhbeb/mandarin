"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { menuItems } from "../data/menu";

export default function CheckoutClient() {
  const [cart] = useState<Record<string, number>>(() => {
    if (typeof window === "undefined") return {};
    try { return JSON.parse(window.localStorage.getItem("mandarin-gourmet-cart") ?? "{}"); } catch { return {}; }
  });
  const [fulfillment, setFulfillment] = useState("pickup");
  const [pickupTime, setPickupTime] = useState("As soon as possible");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const items = menuItems.filter((item) => cart[item.id]);
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * (cart[item.id] ?? 0), 0), [items, cart]);
  const serviceFee = fulfillment === "delivery" ? 4.99 : 0;
  const total = subtotal + serviceFee;

  async function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!items.length) { setError("Your order is empty. Add at least one menu item first."); return; }
    setError("");
    setLoading(true);
    try {
      const response = await fetch("/api/create-checkout-session", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ items: items.map((item) => ({ id: item.id, quantity: cart[item.id] })), fulfillment }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? "Unable to start checkout.");
      if (result.url) { window.location.href = result.url; return; }
      setSubmitted(true);
      window.localStorage.removeItem("mandarin-gourmet-cart");
    } catch (checkoutError) {
      setError(checkoutError instanceof Error ? checkoutError.message : "Unable to start checkout.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) return <main className="checkout-page"><div className="checkout-success"><p className="order-eyebrow">Order request received</p><h1>Thank you for choosing Mandarin Gourmet.</h1><p>Your order request has been prepared for the restaurant team. We’ll use the contact details you provided to confirm timing and availability.</p><Link href="/" className="checkout-button">Return to the restaurant <span>→</span></Link></div></main>;

  return (
    <main className="checkout-page">
      <div className="checkout-shell">
        <Link href="/menu" className="order-back">← Back to menu</Link>
        <div className="checkout-heading"><div><p className="order-eyebrow">Mandarin Gourmet · checkout</p><h1>One last detail.</h1></div><div className="checkout-total"><span>Estimated total</span><strong>${total.toFixed(2)}</strong></div></div>
        <div className="checkout-grid">
          <form className="checkout-form" onSubmit={submitOrder}>
            <fieldset><legend>Local pickup</legend><div className="pickup-callout"><strong>Collect your order at Mandarin Gourmet</strong><span>5560 Santa Teresa Blvd, San Jose, CA 95123</span></div><div className="fulfillment-options"><button className={fulfillment === "pickup" ? "is-selected" : ""} onClick={() => setFulfillment("pickup")} type="button"><strong>Pickup</strong><span>Payment at the restaurant</span></button><button className={fulfillment === "delivery" ? "is-selected" : ""} onClick={() => setFulfillment("delivery")} type="button"><strong>Delivery</strong><span>+$4.99 service fee</span></button></div>{fulfillment === "pickup" && <label className="pickup-time">Preferred pickup time<select value={pickupTime} onChange={(event) => setPickupTime(event.target.value)}><option>As soon as possible</option><option>In 30 minutes</option><option>In 60 minutes</option><option>Tomorrow evening</option></select></label>}</fieldset>
            <fieldset><legend>Your details</legend><div className="form-grid"><label>Full name<input name="name" required placeholder="Linda Hughes" /></label><label>Phone<input name="phone" required type="tel" placeholder="+1-251-283-4593" /></label><label className="form-grid__wide">Email<input name="email" required type="email" placeholder="you@example.com" /></label>{fulfillment === "delivery" && <label className="form-grid__wide">Delivery address<input name="address" required placeholder="Street, city, state, ZIP" /></label>}<label className="form-grid__wide">Order notes<textarea name="notes" placeholder="Allergies, substitutions, or timing requests" rows={4} /></label></div></fieldset>
            <fieldset><legend>Payment</legend><p className="payment-note">This checkout sends an order request to the restaurant team. Payment is confirmed directly with the restaurant.</p><div className="payment-choice"><span>Payment at {fulfillment}</span><span>Cash or card</span></div></fieldset>
            {error && <p className="form-error" role="alert">{error}</p>}<button className="checkout-button checkout-button--full" disabled={loading} type="submit">{loading ? "Opening secure checkout…" : "Pay securely with Stripe"} <span>→</span></button>
          </form>
          <aside className="checkout-summary"><p className="order-eyebrow">Your order</p>{items.length ? items.map((item) => <div className="cart-line" key={item.id}><div><strong>{item.name}</strong><small>{cart[item.id]} × ${item.price}</small></div><strong>${(item.price * cart[item.id]).toFixed(2)}</strong></div>) : <p className="cart-note">Your cart is empty. Return to the menu to add something delicious.</p>}<div className="cart-total"><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div>{serviceFee > 0 && <div className="cart-total"><span>Delivery</span><strong>${serviceFee.toFixed(2)}</strong></div>}<div className="cart-total cart-total--grand"><span>Total</span><strong>${total.toFixed(2)}</strong></div></aside>
        </div>
      </div>
    </main>
  );
}

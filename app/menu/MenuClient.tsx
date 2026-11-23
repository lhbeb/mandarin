"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { menuItems } from "../data/menu";

export default function MenuClient() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [category, setCategory] = useState("All");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const visibleItems = category === "All" ? menuItems : menuItems.filter((item) => item.category === category);
  const cartCount = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  const subtotal = useMemo(
    () => menuItems.reduce((sum, item) => sum + item.price * (cart[item.id] ?? 0), 0),
    [cart],
  );

  function addItem(id: string) {
    setCart((current) => ({ ...current, [id]: (current[id] ?? 0) + 1 }));
    setDrawerOpen(true);
  }

  function beginCheckout() {
    window.localStorage.setItem("mandarin-gourmet-cart", JSON.stringify(cart));
  }

  return (
    <main className="order-page">
      <header className="order-header">
        <div>
          <Link href="/" className="order-back">← Mandarin Gourmet</Link>
          <p className="order-eyebrow">Order from the restaurant</p>
          <h1>Made for your table.</h1>
          <p className="order-lede">Choose your favorites for pickup or delivery from 5560 Santa Teresa Blvd, San Jose.</p>
        </div>
        <div className="order-header__company">
          <span>Operated by</span>
          <strong>RIFTED CARS LLC</strong>
        </div>
      </header>

      <div className="order-layout">
        <section className="menu-panel" aria-labelledby="menu-title">
          <div className="menu-panel__topline">
            <div>
              <p className="order-eyebrow">Linda Hughes · Founder & main chef</p>
              <h2 id="menu-title">The menu</h2>
            </div>
            <div className="category-tabs" aria-label="Menu categories">
              {["All", "Appetizers & Dim Sum", "Chicken & Beef", "Premium Seafood & Specialties", "Rice & Noodles"].map((name) => (
                <button key={name} className={category === name ? "is-active" : ""} onClick={() => setCategory(name)} type="button">
                  {name}
                </button>
              ))}
            </div>
          </div>
          <div className="menu-grid">
            {visibleItems.map((item) => (
              <article className="menu-card" key={item.id}>
                <img src={item.image} alt="" />
                <div className="menu-card__body">
                  <div className="menu-card__heading"><h3>{item.name}</h3><span>${item.price}</span></div>
                  <p>{item.description}</p>
                  <button className="add-button" type="button" onClick={() => addItem(item.id)}>Add to order <span>＋</span></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className={`cart-panel cart-drawer ${drawerOpen ? "is-open" : ""}`} aria-label="Your order">
          <div className="cart-panel__header"><p className="order-eyebrow">Your pickup order</p><button className="cart-close" onClick={() => setDrawerOpen(false)} type="button" aria-label="Close order drawer">×</button><span>{cartCount} {cartCount === 1 ? "item" : "items"}</span></div>
          {cartCount === 0 ? (
            <div className="cart-empty"><span className="cart-empty__mark">膳</span><h2>Start with a favorite.</h2><p>Add dishes from the menu and your order will appear here.</p></div>
          ) : (
            <>
              <div className="cart-lines">
                {menuItems.filter((item) => cart[item.id]).map((item) => (
                  <div className="cart-line" key={item.id}><div><strong>{item.name}</strong><small>${item.price} each</small></div><span>× {cart[item.id]}</span></div>
                ))}
              </div>
              <div className="cart-total"><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div>
              <p className="cart-note">Taxes, delivery fees, and tip are calculated at checkout.</p>
              <Link href="/checkout" onClick={beginCheckout} className="checkout-button">Continue to checkout <span>→</span></Link>
            </>
          )}
        </aside>
      </div>
      <button className="cart-drawer-trigger" type="button" onClick={() => setDrawerOpen(true)} aria-label={`Open order drawer with ${cartCount} items`}><span>Your pickup order</span><strong>{cartCount} {cartCount === 1 ? "item" : "items"} · ${subtotal.toFixed(2)}</strong><span>→</span></button>
    </main>
  );
}

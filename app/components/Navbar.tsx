"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, office } from "../lib/site";
import Icon from "./ui/Icon";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const drawer = drawerRef.current;
    const trigger = toggleRef.current;
    drawer?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onResize = () => {
      if (window.innerWidth >= 1000) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => {
      drawer?.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <div className="utility-bar">
        <div className="container utility-content">
          <a
            className="utility-email"
            href={`mailto:${office.email}`}
            aria-label={`E-posta: ${office.email}`}
          >
            <Icon name="mail" />
            <span className="utility-email-full">{office.email}</span>
            <span className="utility-email-short">E-posta</span>
          </a>
          <a href={office.phoneHref}>
            <Icon name="phone" />
            {office.phone}
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-content">
          <Link
            className="brand-link"
            href="/"
            aria-label="AD Hukuk ve Danışmanlık — Ana sayfa"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo/ad-hukuk-logo.png"
              alt="AD Hukuk ve Danışmanlık"
              width={291}
              height={275}
              sizes="(max-width: 760px) 56px, 66px"
              className="original-navbar-logo"
              priority
            />
            <span className="navigation-brand-name">
              AD Hukuk<span>ve Danışmanlık</span>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Ana menü">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            className="button button-primary header-cta"
            href={office.phoneHref}
            aria-label="Randevu Al — telefonla arayın"
          >
            Randevu Al
            <Icon name="phone" />
          </a>
          <button
            ref={toggleRef}
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </header>
      <dialog
        ref={drawerRef}
        className="navigation-drawer"
        aria-labelledby="menu-title"
        onCancel={() => setMenuOpen(false)}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = event.currentTarget.querySelectorAll<HTMLElement>(
            "a[href], button, select, [tabindex='0']",
          );
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setMenuOpen(false);
        }}
      >
        <div className="drawer-panel">
          <div className="drawer-heading">
            <div>
              <p className="eyebrow">AD HUKUK VE DANIŞMANLIK</p>
              <h2 id="menu-title" className="sr-only">
                Site gezinmesi
              </h2>
            </div>
            <button
              type="button"
              className="drawer-close"
              aria-label="Menüyü kapat"
              onClick={() => setMenuOpen(false)}
            >
              <Icon name="close" />
            </button>
          </div>
          <nav
            id="mobile-navigation"
            className="drawer-navigation"
            aria-label="Mobil menü"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                <span>{item.label}</span>
                <Icon name="arrow" />
              </Link>
            ))}
          </nav>
          <div className="drawer-contact">
            <p className="eyebrow">GÖRÜŞME PLANLAYIN</p>
            <a
              className="button button-primary drawer-appointment"
              href={office.phoneHref}
              aria-label="Randevu Al — telefonla arayın"
              onClick={() => setMenuOpen(false)}
            >
              <Icon name="phone" />
              Randevu Al
            </a>
            <a className="drawer-email" href={`mailto:${office.email}`}>
              {office.email}
              <Icon name="external" />
            </a>
            <p className="drawer-location">{office.city}</p>
          </div>
        </div>
      </dialog>
    </>
  );
}

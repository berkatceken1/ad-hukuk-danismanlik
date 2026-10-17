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

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1000) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
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
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobil menü"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
                <Icon name="external" />
              </Link>
            ))}
            <a
              className="mobile-phone mobile-appointment"
              href={office.phoneHref}
              aria-label="Randevu Al — telefonla arayın"
              onClick={() => setMenuOpen(false)}
            >
              <Icon name="phone" />
              Randevu Al
            </a>
          </nav>
        )}
      </header>
    </>
  );
}

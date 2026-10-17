"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const MIN_VISIBLE_MS = 150;
const MAX_VISIBLE_MS = 2500;

function isModifiedClick(event: MouseEvent) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
}

function shouldShowLoader(anchor: HTMLAnchorElement, event: MouseEvent) {
  if (event.defaultPrevented || event.button !== 0 || isModifiedClick(event)) {
    return false;
  }

  const target = anchor.getAttribute("target");
  if (target && target !== "_self") {
    return false;
  }

  const rawHref = anchor.getAttribute("href");
  if (!rawHref || rawHref.startsWith("#")) {
    return false;
  }

  if (/^(tel:|mailto:|sms:|whatsapp:|javascript:)/i.test(rawHref)) {
    return false;
  }

  const nextUrl = new URL(anchor.href, window.location.href);
  const currentUrl = new URL(window.location.href);

  if (nextUrl.origin !== currentUrl.origin) {
    return false;
  }

  const samePage =
    nextUrl.pathname.replace(/\/$/, "") ===
      currentUrl.pathname.replace(/\/$/, "") &&
    nextUrl.search === currentUrl.search;

  return !samePage;
}

export default function RouteTransitionLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const previousPathnameRef = useRef(pathname);
  const startedAtRef = useRef(0);
  const hideTimerRef = useRef<number | null>(null);
  const maxTimerRef = useRef<number | null>(null);

  const clearTimers = useCallback(() => {
    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }

    if (maxTimerRef.current) {
      window.clearTimeout(maxTimerRef.current);
      maxTimerRef.current = null;
    }
  }, []);

  const showLoader = useCallback(() => {
    clearTimers();
    startedAtRef.current = Date.now();
    setVisible(true);

    maxTimerRef.current = window.setTimeout(() => {
      setVisible(false);
    }, MAX_VISIBLE_MS);
  }, [clearTimers]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) {
        return;
      }

      if (shouldShowLoader(anchor, event)) {
        showLoader();
      }
    };

    const handlePopState = () => {
      if (
        window.location.pathname.replace(/\/$/, "") !==
        previousPathnameRef.current.replace(/\/$/, "")
      ) {
        showLoader();
      }
    };

    document.addEventListener("click", handleClick, true);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("popstate", handlePopState);
      clearTimers();
    };
  }, [clearTimers, showLoader]);

  useEffect(() => {
    if (previousPathnameRef.current === pathname) {
      return;
    }

    previousPathnameRef.current = pathname;

    if (!visible) {
      return;
    }

    const elapsed = Date.now() - startedAtRef.current;
    const remaining = Math.max(MIN_VISIBLE_MS - elapsed, 120);

    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
    }

    hideTimerRef.current = window.setTimeout(() => {
      setVisible(false);
    }, remaining);
  }, [pathname, visible]);

  if (!visible) {
    return null;
  }

  return (
    <div className="route-progress" role="status">
      <span className="sr-only">Sayfa yükleniyor…</span>
    </div>
  );
}

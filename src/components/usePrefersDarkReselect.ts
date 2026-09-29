"use client";

import { useEffect, type RefObject } from "react";

/* Safety net for an OS theme switch with the tab already open, shared by every
   <picture> that swaps on prefers-color-scheme. Browsers are specced to re-run
   <picture> source selection when a media query changes, but that is the one
   path we could not verify locally — DevTools colour scheme emulation flips
   matchMedia().matches without dispatching a change event, so neither the
   native behaviour nor this handler is observable under it. Re-assigning src
   forces reselection; if the browser already did it, this resolves to the same
   URL and is a cached no-op. The markup still carries the correct source on
   first paint, so nothing here runs on load.

   Callers mount it only where there are two themes to swap between — hooks
   can't be conditional, so that means a split-out child component rather than
   an early return. */
export function usePrefersDarkReselect(
  imgRef: RefObject<HTMLImageElement | null>,
  lightSrc: string,
  darkSrc: string,
) {
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => {
      if (imgRef.current) {
        imgRef.current.src = mql.matches ? darkSrc : lightSrc;
      }
    };
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [imgRef, lightSrc, darkSrc]);
}

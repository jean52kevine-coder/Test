import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SCROLL_STORAGE_PREFIX = "scroll-position";

const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();
  const pageKey = `${pathname}${search}${hash}`;

  useEffect(() => {
    const storageKey = `${SCROLL_STORAGE_PREFIX}:${pageKey}`;
    const savedScrollPosition = sessionStorage.getItem(storageKey);

    if (savedScrollPosition) {
      window.scrollTo({ top: Number(savedScrollPosition), behavior: "instant" });
      sessionStorage.removeItem(storageKey);
      return;
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pageKey]);

  useEffect(() => {
    const storageKey = `${SCROLL_STORAGE_PREFIX}:${pageKey}`;
    const saveScrollPosition = () => {
      sessionStorage.setItem(storageKey, String(window.scrollY));
    };

    window.addEventListener("beforeunload", saveScrollPosition);
    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, [pageKey]);

  return null;
};

export default ScrollToTop;

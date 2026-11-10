import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to the top whenever the route changes (e.g. clicking a footer link).
// Links to an in-page anchor (#section) are left alone.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const setMeta = (selector, attr, value) => {
  const el = document.querySelector(selector);
  if (el && value) el.setAttribute(attr, value);
};

const Seo = ({ title, description }) => {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = title
      ? `${title} | Md Sahebuddin Ansari`
      : "Md Sahebuddin Ansari | Software Engineer Portfolio";

    document.title = fullTitle;

    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
      setMeta('meta[name="twitter:description"]', "content", description);
    }

    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="title"]', "content", fullTitle);

    const canonicalUrl = `${window.location.origin}${location.pathname}`;
    setMeta('link[rel="canonical"]', "href", canonicalUrl);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[name="twitter:url"]', "content", canonicalUrl);
  }, [title, description, location.pathname]);

  return null;
};

export default Seo;


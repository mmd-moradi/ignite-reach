import { DefaultSeoProps } from "next-seo";

const defaultSEOConfig: DefaultSeoProps = {
  title: undefined,
  titleTemplate: "%s ∘ Ignite Reach",
  defaultTitle: "Ignite Reach",
  description: "",
  canonical: "https://ignitereach.site/",
  openGraph: {
    url: "https://ignitereach.site/",
    title: "Ignite Reach",
    locale: "en_US",
    description: "",
    site_name: "Ignite Reach",
    images: [
      {
        url: "/assets/seo/share.png",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
  twitter: {
    handle: "@ignitereach",
    site: "@ignitereach",
    cardType: "summary_large_image",
  },
  languageAlternates: [
    {
      hrefLang: "en-US",
      href: "https://ignitereach.site/",
    },
  ],
  additionalMetaTags: [
    {
      property: "keywords",
      content: "",
    },
    {
      name: "theme-color",
      content: "#FFF",
    },
    {
      property: "format-detection",
      content: "telephone=yes",
    },
    {
      property: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      property: "apple-mobile-web-app-status-bar-style",
      content: "default",
    },
    {
      property: "dc:creator",
      content: "IGNITE REACH",
    },
    {
      name: "application-name",
      content: "IGNITE REACH",
    },
    {
      httpEquiv: "x-ua-compatible",
      content: "IE=edge; chrome=1",
    },
  ],
  additionalLinkTags: [
    {
      rel: "shortcut icon",
      href: "/favicon.ico",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
  ],
};

export default defaultSEOConfig;
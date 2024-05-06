// Document types
import metadata from "./documents/metadata"
import siteConfig from "./documents/siteConfig"

// Object types
// import { field, fieldOptions, fieldRequired } from "./objects/field"
// import faq from "./objects/faq";
import anchor from "./objects/anchor";

// Home types
import hero from "./pages/home/hero";
import caseStudies from "./pages/home/caseStudies";
import services from "./pages/home/services";
import bookCall from "./pages/home/bookCall";
// import portfolio from "./pages/home/portfolio";
// import cta from "./pages/home/cta";

const documentTypes = [siteConfig, metadata]
// const homePage = [hero, workCase, portfolio, benefits, faqsection, cta];
const homePage = [hero, caseStudies, services, bookCall];
const objectTypes = [
  // field,
  // fieldOptions,
  // fieldRequired,
  // faq,
  anchor
];
export const schemaTypes = [
  ...documentTypes,
  ...objectTypes,
  ...homePage,
]


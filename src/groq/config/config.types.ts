import { SanityDocument } from "next-sanity";
import { Anchor, SanityObject, SanityImage, CTAButtonType } from "../default";

export type SiteConfigType = {
  title: string;
  description: string;
  keywords: Array<string>;
  url: string;
  gtag: string;
  openGraphImage: SanityImage;
  logo: SanityImage;
  mainNavigation: Array<(Anchor | MenuType) & SanityObject>;
  footerLogo: SanityImage;
  footerTitle: string;
  footerSubtitle: string;
  footerCTA: CTAButtonType;
  location: string;
  footerSublinks: Array<Anchor & SanityObject>;
  footerCopyright: string;
} & SanityDocument;

export type MenuType = {
  label: string;
  href: string;
  navigation: Array<Anchor & SanityObject>;
};

export type MetadataType = {
  title: string;
  description?: string;
  keywords?: Array<string>;
  openGraphImage?: SanityImage;
} & SanityDocument;

export type NavObjectType = {
  label: string;
  urls: Array<Anchor & SanityObject>;
};


import { groq } from "next-sanity";
import { sanityClient } from "@/lib/sanity.client";
import { MetadataType, SiteConfigType } from "../config";

export const metadataQueryGroq = groq`
  *[ _type == "metadata" && _id == $id ][0] {
    ...
  }
`;
export const siteConfigQueryGroq = groq`
  *[ _type == "siteConfig"][0] {
    ...
  }
`;

// Functions
export async function getMetadata(id: string): Promise<MetadataType> {
  return await sanityClient.fetch(metadataQueryGroq, { id });
}

export async function getDefaultSiteConfig(): Promise<SiteConfigType> {
  return await sanityClient.fetch(siteConfigQueryGroq);
}
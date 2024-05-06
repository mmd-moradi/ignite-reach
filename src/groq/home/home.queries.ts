import { sanityClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import {
  BookCallDataType,
  CaseStudiesType,
  HeroDataType,
  ServicesDataType,
} from ".";
const HeroDataGroq = groq`*[_type == "HomeHero"][0]{...}`;

const CaseStudiesGroq = groq`*[_type == "HomeCaseStudies"][0]{...}`;

const ServicesGroq = groq`*[_type == "HomeServices"][0]{...}`;

const BookCallGroq = groq`*[_type == "HomeBookcall"][0]{...}`;

// const FaqsGroq = groq`*[_type == "faqHomeSection"][0]{...}`;

// const CTAGroq = groq`*[_type == "ctaSection"][0]{...}`;

export async function getHomeHeroSection(): Promise<HeroDataType> {
  return await sanityClient.fetch(HeroDataGroq);
}

export async function getHomeCaseStudies(): Promise<CaseStudiesType> {
  return await sanityClient.fetch(CaseStudiesGroq);
}

export async function getHomeServicesSection(): Promise<ServicesDataType> {
  return await sanityClient.fetch(ServicesGroq);
}

export async function getHomeBookCallSection(): Promise<BookCallDataType> {
  return await sanityClient.fetch(BookCallGroq);
}

// export async function getFaqSectionHomePage(): Promise<FaqType> {
//   return await sanityClient.fetch(FaqsGroq);
// }

// export async function getCTASectionHomePage(): Promise<CTASectionType> {
//   return await sanityClient.fetch(CTAGroq);
// }
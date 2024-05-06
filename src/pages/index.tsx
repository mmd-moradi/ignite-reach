import Image from "next/image";
import { Montserrat } from "next/font/google";
import { SiteConfigType } from "@/groq/config";
import MainLayout from "@/components/shared/interface/layout/Layout";
import { getDefaultSiteConfig } from "@/groq/default";
import { REVALIDATE_IN_ONE_HOUR } from "@/config";
import { BookCallDataType, CaseStudiesType, getHomeBookCallSection, getHomeCaseStudies, getHomeHeroSection, getHomeServicesSection, HeroDataType, ServicesDataType } from "@/groq/home";
import HeroSection from "@/components/pages/home/Hero";
import CaseStudies from "@/components/pages/home/CaseStudies";
import ServicesSection from "@/components/pages/home/ServicesSection";
import BookCallsection from "@/components/pages/home/BookCall";

type Props = {
  data: {
    config: SiteConfigType;
    heroData: HeroDataType;
    caseStudiesData: CaseStudiesType
    servicesData: ServicesDataType;
    bookCallData: BookCallDataType
  }
}

export default function Home({ data }: Props) {
  const { config, heroData, caseStudiesData, servicesData, bookCallData } = data;
  return (
    <MainLayout siteConfig={config}>
      <HeroSection heroData={heroData} />
      <CaseStudies caseStudiesData={caseStudiesData} />
      <ServicesSection servicesData={servicesData} />
      <BookCallsection BookCallData={bookCallData} />
    </MainLayout>
  );
}


export async function getStaticProps() {
  const [config, heroData, caseStudiesData, servicesData, bookCallData] = await Promise.all([
    getDefaultSiteConfig(),
    getHomeHeroSection(),
    getHomeCaseStudies(),
    getHomeServicesSection(),
    getHomeBookCallSection(),
  ])
  return {
    props: {
      data:{
        config,
        heroData,
        caseStudiesData,
        servicesData,
        bookCallData
      }
    },
    revalidate: REVALIDATE_IN_ONE_HOUR,
  };
}
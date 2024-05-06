import { SanityDocument } from "next-sanity";
import { Anchor, CTAButtonType, FieldRequired, SanityImage } from "../default";

export type HeroDataType = {
  title: string;
  mainTitle: string;
  subtitle: string;
  subtitle2: string;
  heroCTA: CTAButtonType;
  heroImg: SanityImage;
} & SanityDocument;


export type CaseStudiesType = {
  revenueTittle: string;
  revenueSubtitle: string;
  caseStudies: CaseStudiesObj[];
  caseStudiesDetailsTittle: string;
  caseStudiesDetail: string;
  caseStudiesDetail2: string;
  casestudiesCTATitle: string;
  casestudiesCTAButton: CTAButtonType;
}

export type ServicesDataType = {
  servicesTitle: string;
  serviceTitle: string;
  serviceDescription: string;
  serviceDescription2: string;
  servicesCTA: CTAButtonType;
  servicesImg: SanityImage;
}

export type BookCallDataType = {
  salesmanImg: SanityImage;
  salesmanTitle: string;
  salesmanRole: string;
  bookCallTitle: string;
  bookCallDescription: string;
  bookCallDescription2: string;
  bookCallReasonTittle: string;
  bookCallReason1: Block;
  bookCallReason2: Block;
  bookCallReason3: Block;
  bookCallReason4: Block;
  bookCallReason5: Block;
}



export type CaseStudiesObj = {
  caseStudyTitle: string;
  caseStudyValue: string;
}

type Block = {
  _type: "block";
  children: BlockChild[];
  markDefs: any[];
  style: string;
};

type BlockChild = {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
};
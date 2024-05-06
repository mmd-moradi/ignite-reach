import { HomeIcon, TiersIcon, UlistIcon, SparklesIcon, BarChartIcon, MobileDeviceIcon } from "@sanity/icons"
import { MdOutlineQuestionMark as FaqIcon } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FiSettings } from 'react-icons/fi'
import { MdUpcoming as CTAIcon } from "react-icons/md";

export const myStructure = (S) =>
  S.list()
    .title("Site")
    .items([
      S.listItem()
        .title("Settings")
        .icon(FiSettings)
        .child(
          S.list()
            .title("Settings")
            .items([
              S.listItem()
                .title("Site")
                .icon(CgWebsite)
                .child(
                  S.document()
                    .schemaType("siteConfig")
                    .documentId("siteConfig")
                ),
            ])
        ),
      S.listItem()
        .title("Home")
        .icon(HomeIcon)
        .child(
          S.list()
            .title("Home")
            .items([
              S.listItem()
                .title("Hero")
                .icon(TiersIcon)
                .child(
                  S.document()
                    .schemaType("HomeHero")
                    .documentId("HomeHero")),
              S.listItem()
                .title("Casestudies")
                .icon(UlistIcon)
                .child(
                  S.document()
                    .schemaType("HomeCaseStudies")
                    .documentId("HomeCaseStudies")),
              S.listItem()
                .title("Services")
                .icon(BarChartIcon)
                .child(
                  S.document()
                    .schemaType("HomeServices")
                    .documentId("HomeServices")),
              S.listItem()
                .title("Book Call")
                .icon(MobileDeviceIcon)
                .child(
                  S.document()
                    .schemaType("HomeBookcall")
                    .documentId("HomeBookcall")),
              // S.listItem()
              //   .title("FAQ")
              //   .icon(FaqIcon)
              //   .child(
              //     S.document()
              //       .schemaType("faqHomeSection")
              //       .documentId("faqHomeSection")),
              // S.listItem()
              //   .title("CTA")
              //   .icon(CTAIcon)
              //   .child(
              //     S.document()
              //       .schemaType("ctaSection")
              //       .documentId("ctaSection")),
            ]),
        ),
    ])
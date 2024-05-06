import { NextSeo, NextSeoProps } from "next-seo";

import { SiteConfigType } from "@/groq/config/config.types";
import { urlFor } from "@/lib/sanityImage";

interface Props {
  data: SiteConfigType;
  seo?: NextSeoProps;
}

export const Meta = ({ data, seo }: Props): JSX.Element => (
  <NextSeo
    defaultTitle={data.title}
    titleTemplate={`%s ∘ ${data.title}`}
    description={data.description}
    canonical={data.url}
    openGraph={{
      url: data.url,
      images: [
        {
          url: urlFor(data.openGraphImage).url(),
          width: 1200,
          height: 630,
          alt: data.openGraphImage.alt,
        },
      ],
      type: "website",
    }}
    twitter={{ cardType: "summary_large_image", site: "@ignitereach" }}
    additionalMetaTags={[
      {
        name: "twitter:image",
        content: urlFor(data.openGraphImage).url(),
      },
      {
        name: "twitter:image:alt",
        content: data.openGraphImage.alt,
      },
      {
        property: "keywords",
        content: data.keywords.join(", "),
      },
    ]}
    {...seo}
  />
);
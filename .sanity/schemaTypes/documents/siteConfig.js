import { MdOutlineAltRoute as routeIcon } from "react-icons/md";
import { transparentImageExtensions } from "../objects/image"


const ImageValidation = (Rule) => [
  Rule.custom((uploadedImage) => {
    const uploadedImageExt = uploadedImage.asset._ref.split("-").pop()

    if (!transparentImageExtensions.includes(uploadedImageExt)) {
      return `Invalid image extension (${uploadedImageExt}), try ${transparentImageExtensions.join(
        " | "
      )}`
    }

    return true
  }),
  Rule.required(),
]

export default {
  name: "siteConfig",
  type: "document",
  title: "Site Configuration",
  fieldsets: [
    {
      name: "header",
      title: "Header",
    },
    {
      name: "footer",
      title: "Footer",
    },
    {
      name: "metadata",
      title: "SEO & Metadata",
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title for SEO & Social Sharing",
      description:
        "Make it as enticing as possible to convert users in social feeds and Google searches. Ideally between 15 and 70 characters.",
      fieldset: "metadata",
      validation: (Rule) => [
        Rule.required().min(15).warning("A title of min. 15 characters is recommended"),
        Rule.max(70).warning("Shorter titles are usually better"),
      ],
    },
    {
      name: "description",
      type: "text",
      title: "Short paragraph for SEO & social sharing (Meta Description)",
      description:
        "⚡ Optional but highly encouraged as it will help you convert more visitors from Google & social. Ideally between 70 and 160 characters.",
      fieldset: "metadata",
      validation: (Rule) => [
        Rule.min(70).warning("A description of min. 70 characters"),
        Rule.max(160).warning("A description of min. 160 characters"),
      ],
    },
    {
      name: "openGraphImage",
      type: "image",
      title: "Open Graph Image",
      description: "Image for sharing previews on Facebook, Twitter etc.",
      fieldset: "metadata",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Keywords",
      name: "keywords",
      type: "array",
      of: [{ type: "string" }],
      sortable: true,
      validation: (Rule) => Rule.required().min(3),
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      description: "The main site url. Used to create canonical url",
      fieldset: "metadata",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "gtag",
      type: "string",
      title: "Google Tag Manager ID",
      description:
        "Is a single tag you can implement onto your website in order to use a variety of Google products and services",
      fieldset: "metadata",
    },
    {
      title: "Header logo",
      description: "Best choice is to use an SVG where the color are set with currentColor",
      name: "logo",
      fieldset: "header",
      type: "image",
      validation: ImageValidation,
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "⚠️ Important for SEO and accessiblity.",
        },
      ],
    },
    {
      title: "Main navigation",
      name: "mainNavigation",
      description: "Select pages for the top menu",
      fieldset: "header",
      validation: (Rule) => [
        Rule.max(5).warning("Are you sure you want more than 5 items?"),
        Rule.unique().error("You have duplicate menu items"),
      ],
      type: "array",
      of: [
        {
          type: "anchor",
          icon: routeIcon,
        },
        {
          name: "menu",
          type: "object",
          icon: routeIcon,
          fields: [
            {
              name: "label",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "href",
              title: "URL",
              description:
                "A Relative URL - points to a path inside like: /contact, Link to an element with a specified ID within the page like: #section2 and An External URL - Points to another website like: https://www.google.com.br/",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "navigation",
              type: "array",
              validation: (Rule) => Rule.min(1),
              of: [
                {
                  type: "anchor",
                  icon: routeIcon,
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Footer Logo",
      description: "Best choice is to use an SVG where the color are set with currentColor",
      name: "footerLogo",
      type: "image",
      fieldset: "footer",
      validation: ImageValidation,
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "⚠️ Important for SEO and accessiblity.",
        },
      ],
    },
    {
      name: "footerTitle",
      title: "Footer main Title",
      type: "string",
      fieldset: "footer",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "footerSubtitle",
      title: "Footer Subtitle",
      type: "string",
      fieldset: "footer",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "footerCTA",
      title: "Footer Call to Action",
      type: "object",
      fieldset: "footer",
      fields: [
        {
          name: "label",
          title: "Label",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "sublabel",
          title: "Sublabel",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "location",
      title: "company location",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "footerSublinks",
      title: "Footer Sublinks",
      type: "array",
      of: [
        {
          type: "anchor",
          icon: routeIcon,
        }
      ]
    },
    {
      title: "Copyright",
      name: "footerCopyright",
      type: "string",
      fieldset: "footer",
      validation: (Rule) => Rule.required(),
    },
  ],
}
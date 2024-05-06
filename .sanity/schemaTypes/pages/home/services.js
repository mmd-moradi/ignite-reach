import { ImageField, defaultImageExtensions } from "../../objects/image";

export default {
  name: "HomeServices",
  type: "document",
  title: "Services",
  fields: [
    {
      name: "servicesTitle",
      title: "Services Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "serviceTitle",
      title: "Service Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "serviceDescription",
      title: "Service Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "serviceDescription2",
      title: "Service Description 2",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "servicesCTA",
      title: "Services Call to Action",
      type: "object",
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
    ImageField(defaultImageExtensions, "servicesImg", "Services Image"),
  ]
}
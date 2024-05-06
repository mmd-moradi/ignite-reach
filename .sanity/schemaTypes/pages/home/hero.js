import { ImageField, defaultImageExtensions } from "../../objects/image";

export default {
  name: "HomeHero",
  type: "document",
  title: "HeroSection",
  fields: [
    {
      name: "title",
      title: "Hero Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainTitle",
      title: "Hero Main Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Hero Subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtitle2",
      title: "Hero Subtitle 2",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heroCTA",
      title: "Hero Call to Action",
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
    ImageField(defaultImageExtensions, "heroImg", "Hero Image"),
  ]
}




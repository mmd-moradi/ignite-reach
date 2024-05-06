export default {
  name: "HomeCaseStudies",
  type: "document",
  title: "Case Studies",
  fields: [
    {
      name: "revenueTittle",
      title: "Revenue Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "revenueSubtitle",
      title: "Revenue Subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "caseStudies",
      title: "Case Studies",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "caseStudyTitle",
              title: "Case Study Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "caseStudyValue",
              title: "Case Study Value",
              type: "string",
              validation: (Rule) => Rule.required(),
            }
          ]
        }
      ]
    },
    {
      name: "caseStudiesDetailsTittle",
      title: "Case Studies Details Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "caseStudiesDetail",
      title: "Case Studies Detail",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "caseStudiesDetail2",
      title: "Case Studies Detail 2",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "casestudiesCTATitle",
      title: "Case Studies CTA Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "casestudiesCTAButton",
      title: "Case Studies CTA Button",
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
    }
  ]
}
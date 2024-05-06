export default {
  name: "metadata",
  type: "document",
  title: "SEO & Metadata",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title for SEO & Social Sharing",
      description:
        "Make it as enticing as possible to convert users in social feeds and Google searches. Ideally between 15 and 70 characters.",
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
    },
    {
      title: "Keywords",
      name: "keywords",
      type: "array",
      of: [{ type: "string" }],
      sortable: true,
    },
  ],
}
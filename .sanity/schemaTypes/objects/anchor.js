export default {
  name: "anchor",
  type: "object",
  title: "Anchor",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "href",
      title: "URL",
      description:
        "write A Relative URL that points to a path local like: /contact or link to an element with a specified ID within the page like: #section2 or An External URL that Points to another website like: https://www.google.com/",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "isExternal",
      title: "Is External?",
      description: "website like: https://www.google.com/",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "isEnabled",
      title: "Is Enabled?",
      type: "boolean",
      initialValue: true,
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "label",
      subtitle: "href",
    },
  },
};
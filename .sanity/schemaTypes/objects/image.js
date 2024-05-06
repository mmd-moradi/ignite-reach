export const transparentImageExtensions = ["png", "svg"]
export const defaultImageExtensions = [...transparentImageExtensions, "jpeg", "jpg", "gif"]

export const ImageField = (
  extensions = transparentImageExtensions,
  name = "icon",
  title = "Icon",
  group
) => {
  return {
    name: name,
    title: title,
    type: "image",
    description: `Allowed ${extensions.join(" | ")} files only`,
    group: group ? group : "",
    options: {
      hotspot: true,
    },
    validation: (Rule) =>
      Rule.custom((uploadedImage) => {
        const uploadedImageExt = uploadedImage.asset._ref.split("-").pop()

        if (!extensions.includes(uploadedImageExt)) {
          return `Invalid image extension (${uploadedImageExt}), try ${extensions.join(" | ")}`
        }

        return true
      }),
    fields: [
      {
        name: "alt",
        type: "string",
        title: "Descriptive label for screen readers & SEO",
        description: "⚡ Highly encouraged to make the content more accessible",
        validation: (Rule) => Rule.required(),
      },
    ],
  }
}
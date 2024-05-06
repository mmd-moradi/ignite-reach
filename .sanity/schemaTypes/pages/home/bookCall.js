import { ImageField, defaultImageExtensions } from "../../objects/image";

export default {
  name: "HomeBookcall",
  type: "document",
  title: "BookCallSection",
  fields: [
    ImageField(defaultImageExtensions, "salesmanImg", "salesman Image"),
    {
      name: "salesmanTitle",
      title: "Salesman Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "salesmanRole",
      title: "Salesman Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "bookCallTitle",
      tittle: "BookCall Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "bookCallDescription",
      title: "BookCall Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "bookCallDescription2",
      title: "BookCall Description 2",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "bookCallReasonTittle",
      title: "BookCall Reason Tittle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "bookCallReason1",
      title: "BookCall Reason1",
      type: "array",
      of: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
            ],
          },
        }
      ]
    },
    {
      name: "bookCallReason2",
      title: "BookCall Reason2",
      type: "array",
      of: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
            ],
          },
        }
      ]
    },
    {
      name: "bookCallReason3",
      title: "BookCall Reason3",
      type: "array",
      of: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
            ],
          },
        }
      ]
    },
    {
      name: "bookCallReason4",
      title: "BookCall Reason4",
      type: "array",
      of: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
            ],
          },
        }
      ]
    },
    {
      name: "bookCallReason5",
      title: "BookCall Reason5",
      type: "array",
      of: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
            ],
          },
        }
      ]
    }
  ]
}
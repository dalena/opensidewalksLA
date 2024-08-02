import { Rule } from "sanity";

export const question = {
  name: "question",
  title: "Question",
  type: "document",

  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "answer",
      title: "Answer",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
      ],
    },
  ],
};

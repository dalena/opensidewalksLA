import { defineType } from "sanity";

export const message = defineType({
  name: "message",
  title: "Message",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      readOnly: true,
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      readOnly: true,
    },
    {
      name: "message",
      title: "Message",
      type: "text",
      readOnly: true,
    },
  ],
});

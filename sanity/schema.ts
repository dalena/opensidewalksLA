import { type SchemaTypeDefinition } from "sanity";
import { post } from "./schemas/post";
import { tag } from "./schemas/tag";
import { article } from "./schemas/article";
import { question } from "./schemas/question";
import { message } from "./schemas/message";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag, article, question, message],
};

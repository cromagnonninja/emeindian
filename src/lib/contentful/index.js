import * as contentful from "contentful";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export { documentToReactComponents } from "./documentToReactComponents";

export const createClient = () =>
  contentful.createClient({
    space: "feztxh0iquxt",
    // Delivery API Access Token
    accessToken: "yPrAdjMfIdMQml-0TVhp6Aks84WtyvwDJc92ccHvWTg",
  });

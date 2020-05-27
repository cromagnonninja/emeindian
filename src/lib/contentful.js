import * as contentful from "contentful";

export const createClient = () =>
  contentful.createClient({
    space: "f6m1jexotjqw",
    // Delivery API Access Token
    accessToken: "_6YHsgLMXuXcMsG7mawza11TEa61zhPrqt3StjlLKNc",
  });

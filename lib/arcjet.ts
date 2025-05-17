import arcjet from "@arcjet/next";
import { getEnv } from "./utils";

// Create a base Arcjet instance for use by each handler
const aj = arcjet({
  key: getEnv("ARCJET_API_KEY"),
  rules: [],
});

export default aj;
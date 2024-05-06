import { createClient } from "next-sanity";
import { useCdn, apiVersion, dataset, projectId } from "./sanity.api";
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemaTypes"
import { myStructure } from "./src/deskStructure"
import { media } from "sanity-plugin-media"
export default defineConfig({
  title: "Production",
  name: "production-workspace",
  title: "ignite-reach",
  basePath: "/production",
  projectId: "7jdoejqs",
  dataset: "production",

  plugins: [
    structureTool({
      structure: myStructure,
    }),
    visionTool(),
    media()],

  schema: {
    types: schemaTypes,
  },
})

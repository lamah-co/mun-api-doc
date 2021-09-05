import { convert } from "widdershins";
import { writeFileSync } from "fs";
import fetch from "node-fetch";

let options = {}; // defaults shown

options.codeSamples = true;
options.httpsnippet = false;
options.language_tabs = [{ javascript: "JavaScript" }];
// options.language_clients = [{ node: "fetch" }];
// options.loadedFrom = sourceUrl; // only needed if input document is relative
options.user_templates = "./templates/openapi3";
options.templateCallback = function (templateName, stage, data) {
  return data;
};
options.theme = "darkula";
options.search = true;
options.sample = true; // set false by --raw
options.discovery = false;
options.includes = [];
options.shallowSchemas = false;
options.tocSummary = false;
options.headings = 2;
options.yaml = false;
//options.resolve = false;
//options.source = sourceUrl; // if resolve is true, must be set to full path or URL of the input document

// const apiObj = JSON.parse(fs.readFileSync("schema.json"));

fetch("http://localhost:8000/swagger/swagger.json")
  .then((res) => res.json())
  .then((apiObj) => {
    convert(apiObj, options)
      .then((str) => {
        // str contains the converted markdown
        writeFileSync("./generated.html.md", str, "utf8");
      })
      .catch((err) => {
        console.error(err);
      });
  });

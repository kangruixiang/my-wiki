const os = require("os");
const path = require("path");
const fs = require("fs");
const glob = require("glob");

const files = glob.sync(path.join(__dirname, "docs", "*.md"));
const paths = [];

files.forEach((file) => {
  // let content = fs.readFileSync(file, "utf8");
  let dir = path.dirname(file);
  let filename = path.basename(file);
  console.log(dir, filename);
  fs.renameSync(file, dir + "/" + filename.toLowerCase().replace(/\s+/g, "-"));

  paths.push("/docs/" + filename.replace(".md", ""));
});

// write paths.json for search index

const content = `const paths = ${JSON.stringify(paths)}`;
fs.writeFileSync("paths.js", content, "utf8");

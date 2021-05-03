const os = require("os");
const path = require("path");
const fs = require("fs");
const glob = require("glob");

const sourceFolder = "D:\\Drive\\My-Notes\\03 Resources\\Medicine";
const sourceFiles = glob.sync(sourceFolder + "/*.md");
const files = glob.sync(path.join(__dirname, "docs", "**", "*.md"));
const readMe = glob.sync(sourceFolder + "/medicine.md");
const paths = [];

sourceFiles.forEach((file) => {
  let sourceName = path.basename(file);
  let dest = path.join(
    __dirname,
    "docs",
    sourceName.toLowerCase().replace(/\s+/g, "-")
  );
  fs.copyFileSync(file, dest);
  paths.push("/docs", sourceName.replace("md", ""));
});

fs.copyFileSync(readMe[0], path.join(__dirname, "README.md"));

// files.forEach((file) => {
//   // let content = fs.readFileSync(file, "utf8");
//   let dir = path.dirname(file);
//   let filename = path.basename(file);
//   console.log(dir, filename);
//   fs.renameSync(file, "docs/" + filename.toLowerCase().replace(/\s+/g, "-"));

//   paths.push("/docs/" + filename.replace(".md", ""));
// });

// write paths.json for search index

const content = `const paths = ${JSON.stringify(paths)}`;
fs.writeFileSync("paths.js", content, "utf8");

const wkhtmltopdf = require("node-wkhtmltopdf");
const { readFileSync, writeFileSync, readdir } = require("fs");
const { safeLoad } = require("js-yaml");
const path = require("path");

const template = require("./template/default");

readdir("./dances", (err, files) => {
  files.forEach(file => {
    const data = safeLoad(readFileSync("./dances/" + file).toString());

    const result = template(data);

    writeFileSync(
      "./generated/" + path.basename(file, ".yaml") + ".html",
      result
    );
  });

  process.exit(0);
});

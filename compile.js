const sass = require("node-sass");
const path = require("path");
const fs = require("fs");

sass.render(
  {
    file: "./scss/root.scss",
    sourceMap: true,
    sourceComments: false,
    outFile: "./dist/serpent.css",
    outputStyle: "compressed",
    precision: 10,
  },
  (error, result) => {
    if (error) throw error;

    fs.writeFile("./dist/serpent.css", result.css, (error) => {
      if (error) throw error;
    });
  }
);

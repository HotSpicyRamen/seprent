const sass = require("sass");

sass.render({ file: "./sass/style.scss" }, (error, result) => {
  if (error) throw error;
});

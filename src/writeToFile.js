const fs = require("fs");

const writeToFile = (html) => {
  try {
    fs.writeFileSync("animals.html", html);
  } catch (err) {
    console.log(err);
  }
};

module.exports = writeToFile;

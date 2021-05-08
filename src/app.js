const generateHTML = require("./generateHTML");
const writeToFile = require("./writeToFile");
const collectAllAnimals = require("./collectAllAnimals");
const getAnswers = require("./getAnswers");

const app = async () => {
  console.log("App Started...");

  const questions = [
    {
      type: "input",
      message: "What is the name of the zoo?",
      name: "zooName",
    },
  ];

  const { zooName } = await getAnswers(questions);

  const animals = await collectAllAnimals();

  const html = generateHTML({ zooName, animals });

  writeToFile(html);
};

module.exports = app;

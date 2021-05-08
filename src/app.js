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

  const answers = await getAnswers(questions);

  console.log(answers);

  const animals = await collectAllAnimals();

  console.log(animals);

  // const html = generateHTML(answers);

  // writeToFile(html);
};

module.exports = app;

const baseQuestions = require("./baseQuestions");
const getAnswers = require("./getAnswers");
const Aquatic = require("./animals/Aquatic");

const createAquaticAnimal = async () => {
  const questions = [
    ...baseQuestions,
    {
      type: "confirm",
      message: "Is it amphibian?",
      name: "amphibian",
    },
    {
      type: "list",
      message: "What tpe of water doe it reside in?",
      name: "waterType",
      choices: [
        {
          name: "Fresh Water",
          value: "freshWater",
          short: "Fresh",
        },
        {
          name: "Salt Water",
          value: "saltWater",
          short: "Salt",
        },
      ],
    },
  ];

  const answers = await getAnswers(questions);

  const animal = new Aquatic(answers);

  return animal;
};

module.exports = createAquaticAnimal;

const Terrestrial = require("./animals/Terrestrial");
const baseQuestions = require("./baseQuestions");
const getAnswers = require("./getAnswers");

const createTerrestrialAnimal = async () => {
  const questions = [
    ...baseQuestions,
    {
      type: "number",
      message: "How many limbs does the animal have?",
      name: "limbs",
    },
  ];

  const answers = await getAnswers(questions);

  const animal = new Terrestrial(answers);

  return animal;
};

module.exports = createTerrestrialAnimal;

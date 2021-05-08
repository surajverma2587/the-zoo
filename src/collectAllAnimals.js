const createAerialAnimal = require("./createAerialAnimal");
const createAquaticAnimal = require("./createAquaticAnimal");
const createTerrestrialAnimal = require("./createTerrestrialAnimal");
const getAnswers = require("./getAnswers");

const promptQuestionAndGetAnswers = async () => {
  const questions = [
    {
      type: "list",
      message: "Select the type of an animal you want to add:",
      name: "animalType",
      choices: [
        {
          name: "Terrestrial Animal",
          value: "terrestrial",
          short: "Terrestrial",
        },
        {
          name: "Aquatic Animal",
          value: "aquatic",
          short: "Aquatic",
        },
        {
          name: "Aerial Animal",
          value: "aerial",
          short: "Aerial",
        },
        {
          name: "Exit",
          value: "exit",
          short: "Exit",
        },
      ],
    },
  ];

  const answers = await getAnswers(questions);

  return answers;
};

const collectAllAnimals = async () => {
  const animals = [];

  let inProgress = true;

  while (inProgress) {
    const answers = await promptQuestionAndGetAnswers();

    if (answers.animalType === "exit") {
      inProgress = false;
    } else {
      if (answers.animalType === "terrestrial") {
        const terrestrialAnimal = createTerrestrialAnimal();
        animals.push(terrestrialAnimal);
      }

      if (answers.animalType === "aquatic") {
        const aquaticAnimal = createAquaticAnimal();
        animals.push(aquaticAnimal);
      }

      if (answers.animalType === "aerial") {
        const aerialAnimal = createAerialAnimal();
        animals.push(aerialAnimal);
      }
    }
  }

  return animals;
};

module.exports = collectAllAnimals;

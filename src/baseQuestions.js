const baseQuestions = [
  {
    type: "input",
    message: "What is the name of the species?",
    name: "species",
  },
  {
    type: "number",
    message: "What is the life expectancy of the animal?",
    name: "lifeExpectancy",
  },
  {
    type: "list",
    message: "Select the continent that the animal is native to:",
    name: "continent",
    choices: [
      {
        name: "North America",
        value: "northAmerica",
        short: "NA",
      },
      {
        name: "South America",
        value: "southAmerica",
        short: "SA",
      },
      {
        name: "Asia",
        value: "asia",
        short: "AS",
      },
      {
        name: "Europe",
        value: "europe",
        short: "EU",
      },
      {
        name: "Africa",
        value: "africa",
        short: "AF",
      },
      {
        name: "Oceania",
        value: "oceania",
        short: "OC",
      },
      {
        name: "Antarctica",
        value: "antarctica",
        short: "AN",
      },
    ],
  },
  {
    type: "list",
    message: "What is the size of the animal?",
    name: "size",
    choices: [
      {
        name: "Small",
        value: "small",
        short: "SM",
      },
      {
        name: "Medium",
        value: "medium",
        short: "MD",
      },
      {
        name: "Large",
        value: "large",
        short: "LG",
      },
    ],
  },
  {
    type: "confirm",
    message: "Is it a mammal?",
    name: "isMammal",
  },
];

module.exports = baseQuestions;

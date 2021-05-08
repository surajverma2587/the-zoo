const Aquatic = require("./animals/Aquatic");
const Terrestrial = require("./animals/Terrestrial");

const generateTerrestrialCard = (animal) => {
  return `<div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">${animal.species}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Terrestrial</h6>
      <p class="card-text">Life Expectancy: ${animal.lifeExpectancy}</p>
      <p class="card-text">Continent: ${animal.continent}</p>
      <p class="card-text">Size: ${animal.size}</p>
      <p class="card-text">Is Mammal: ${animal.isMammal}</p>
      <p class="card-text">Limbs: ${animal.limbs}</p>
    </div>
  </div>`;
};

const generateHTML = ({ zooName, animals }) => {
  const generateCard = (animal) => {
    // if (animal instanceof Aquatic) {
    //   return "Aquatic";
    // }
    if (animal instanceof Terrestrial) {
      return generateTerrestrialCard(animal);
    }
  };

  const cards = animals.map(generateCard);

  console.log(cards);

  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
          crossorigin="anonymous"
        />
        <title>Zoo</title>
      </head>
      <body>
        <div>
          <header class="text-center p-4 bg-warning">
            <h1>${zooName}</h1>
          </header>
          <div class="d-flex justify-content-around flex-wrap">
            ${cards.join("")}
          </div>
        </div>
      </body>
    </html>
  `;
};

module.exports = generateHTML;

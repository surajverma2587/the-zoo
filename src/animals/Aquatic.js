const Animal = require("./Animal");

class Aquatic extends Animal {
  constructor({ amphibian, waterType, ...rest }) {
    super(rest);

    this.amphibian = amphibian;
    this.waterType = waterType;
  }
}

module.exports = Aquatic;

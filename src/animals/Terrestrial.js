const Animal = require("./Animal");

class Terrestrial extends Animal {
  constructor({ limbs, ...rest }) {
    super(rest);

    this.limbs = limbs;
  }
}

module.exports = Terrestrial;

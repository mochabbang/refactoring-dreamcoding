export function plumages(birds) {
  return new Map(birds.map((b) => [b.name, b.plumage]));
}
export function speeds(birds) {
  return new Map(birds.map((b) => [b.name, b.airSpeedVelocity]));
}

class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get plumage() {
    return "unknown";
  }

  get airSpeedVelocity() {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  get plumage() {
    return "average";
  }

  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  get plumage() {
    return this.numberOfCoconuts > 2 ? "tired" : "average";
  }

  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  get plumage() {
    return this.voltage > 100 ? "scorched" : "beautiful";
  }

  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}

const result = plumages([
  new AfricanSwallow({
    name: "AfricanSwallow",
    numberOfCoconuts: 3,
    voltage: 0,
    isNailed: 0,
  }),
  new NorwegianBlueParrot({
    name: "NorwegianBlueParrot",
    numberOfCoconuts: 0,
    voltage: 90,
    isNailed: 1,
  }),
]);
console.log(result);

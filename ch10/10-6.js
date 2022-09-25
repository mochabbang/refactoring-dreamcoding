import { strict as assert } from "node:assert";

class Customer {
  constructor() {
    this.discountRate = 0;
  }
  applyDiscount(number) {
    assert(number >= 0);

    if (!this.discountRate) {
      return number;
    } else {
      return number - this.discountRate * number;
    }
  }
}

new Customer().applyDiscount(1);

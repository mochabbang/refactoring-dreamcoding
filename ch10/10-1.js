function calculateCharge(date, quantity, plan) {
  return isSummer() ? summerCharege() : regularCharge();

  function isSummer() {
    return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd)
      ? true
      : false;
  }

  function summerCharege() {
    return quantity * plan.summerRate;
  }

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
}

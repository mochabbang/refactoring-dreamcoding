export function adjustedCapital(instrument) {
  if (!isEligibleForAdjustCapital(instrument)) {
    return 0;
  }

  return (
    (instrument.income / instrument.duration) * instrument.adjustmentFactor
  );
}

function isEligibleForAdjustCapital(instrument) {
  return (
    instrument.capital > 0 &&
    instrument.interestRate > 0 &&
    instrument.duration > 0
  );
}

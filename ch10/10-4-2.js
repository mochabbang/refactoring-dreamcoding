export function rating(voyage, history) {
  return createRating(voyage, history).value;
}

// Factory 함수
function createRating(voyage, history) {
  if (voyage.zone === "china" && history.some((v) => "china" === v.zone)) {
    return new ExperienceChainaRating(voyage, history);
  } else if (voyage.zone === "india") {
    return new ExperienceIndiaRating(voyage, history);
  } else {
    return new Rating(voyage, history);
  }
}

class Rating {
  constructor(voyage, history) {
    this.voyage = voyage;
    this.history = history;
  }

  get value() {
    const profit = this.voyageProfitFactor;
    const risk = this.voyageRisk;
    const historyRisk = this.captainHistoryRisk;
    return profit * 3 > risk + historyRisk * 2 ? "A" : "B";
  }

  get voyageRisk() {
    let result = 1;
    if (this.voyage.length > 4) result += 2;
    if (this.voyage.length > 8) result += this.voyage.length - 8;
    return Math.max(result, 0);
  }

  get captainHistoryRisk() {
    let result = 1;
    if (this.history.length < 5) result += 4;
    result += this.history.filter((v) => v.profit < 0).length;
    return Math.max(result, 0);
  }

  get voyageProfitFactor() {
    // 수익 요인
    let result = 2;
    result += this.historyLengthFactor;
    result += this.voyageLengthFactor;

    return result;
  }

  get voyageLengthFactor() {
    return this.voyage.length > 14 ? -1 : 0;
  }

  get historyLengthFactor() {
    return this.history.length > 8 ? 1 : 0;
  }
}

class ExperienceChainaRating extends Rating {
  get voyageRisk() {
    const result = super.voyageRisk + 4;
    return Math.max(result, 0);
  }

  get captainHistoryRisk() {
    const result = super.captainHistoryRisk - 2;
    return Math.max(result, 0);
  }

  get voyageProfitFactor() {
    return super.voyageProfitFactor + 3;
  }

  get voyageLengthFactor() {
    let result = 0;
    result += 3;
    if (this.voyage.length > 12) result += 1;
    if (this.voyage.length > 18) result -= 1;

    return result;
  }

  get historyLengthFactor() {
    return this.history.length > 10 ? 1 : 0;
  }
}

class ExperienceIndiaRating extends Rating {
  get voyageRisk() {
    const result = super.voyageRisk + 4;
    return Math.max(result, 0);
  }

  get voyageProfitFactor() {
    return super.voyageProfitFactor + 1;
  }
}

const voyage = { zone: "west-indies", length: 10 };
const history = [
  { zone: "east-indies", profit: 5 },
  { zone: "west-indies", profit: 15 },
  { zone: "china", profit: -2 },
  { zone: "west-africa", profit: 7 },
];

const rate = rating(voyage, history);
console.log(rate);

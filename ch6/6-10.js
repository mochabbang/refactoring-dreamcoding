import _ from 'lodash';
const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
    return reading;
}

export function enrich(originalData) {
    const result = _.cloneDeep(originalData);
    result.baseRate = baseRate(result);
    result.baseCharge = result.baseRate * result.quantity;
    return result;
}

function baseRate(data) {
    if (data.year === 2017 && data.month === 5) return 0.1;
    return 0.2;
}

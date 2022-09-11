import { acquireReading } from './6-9.js';

const reading = acquireReading();

// function calculateBaseCharge() {
//     return reading.baseCharge;
// }

const basicChargeAmount = reading.baseCharge;

console.log(basicChargeAmount);

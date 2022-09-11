import { acquireReading, enrich } from './6-10.js';

const rawReadingData = acquireReading();
const reading = enrich(rawReadingData);

const baseCharge = reading.baseCharge;
console.log(baseCharge);

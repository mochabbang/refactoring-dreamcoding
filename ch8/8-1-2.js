export class Account {
    constructor(accountType, daysOverdrawn) {
        this.type = accountType;
        this._daysOverdrawn = daysOverdrawn;
    }

    get bankCharge() {
        return this._daysOverdrawn > 0 ? this.overdraftCharge + 4.5 : 4.5;
    }

    get daysOverdrawn() {
        return this._daysOverdrawn;
    }
}

export class AccountType {
    constructor(type) {
        this._type = type;
    }
    get isPremium() {
        return this._type === 'Premium';
    }

    overdraftCharge(daysOverdrawn) {
        if (!this.isPremium) {
            return daysOverdrawn * 1.75;
        }
        const baseCharge = 10;
        return daysOverdrawn <= 7 ? baseCharge : baseCharge + (daysOverdrawn - 7) * 0.85;
    }
}

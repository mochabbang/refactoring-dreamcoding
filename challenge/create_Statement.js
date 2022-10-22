class Performance {
    #audience;
    #play;
    constructor(audience, play) {
        this.#audience = audience;
        this.#play = play;
    }

    get audience() {
        return this.#audience;
    }

    get play() {
        return this.#play;
    }

    static create(audience, play) {
        switch (play.type) {
            case 'tragedy':
                return new Tragedy(audience, play);
            case 'comedy':
                return new Comedy(audience, play);
            default:
                return new Error(`알 수 없는 타입 : ${play.type}`);
        }
    }
}

class Tragedy extends Performance {
    get credits() {
        return Math.max(this.audience - 30, 0);
    }

    get amount() {
        const basePrice = 40000;
        return this.audience > 30 ? basePrice + 1000 * (this.audience - 30) : basePrice;
    }
}

class Comedy extends Performance {
    get credits() {
        return Math.max(this.audience - 30, 0) + Math.floor(this.audience / 5);
    }

    get amount() {
        let result = 30000;
        if (this.audience > 20) {
            result += 10000 + 500 * (this.audience - 20);
        }
        result += 300 * this.audience;

        return result;
    }
}

class Statement {
    #customer;
    #performances;
    constructor(invoice, plays) {
        this.#customer = invoice.customer;
        this.#performances = invoice.performances.map(p => Performance.create(p.audience, plays[p.playID]));
    }

    get customer() {
        return this.#customer;
    }

    get performances() {
        return [...this.#performances];
    }

    get totalAmount() {
        return this.#performances.reduce((sum, p) => (sum += p.amount), 0);
    }

    get totalCredits() {
        return this.#performances.reduce((sum, p) => (sum += p.credits), 0);
    }
}

export function createStatement(invoice, plays) {
    return new Statement(invoice, plays);
}

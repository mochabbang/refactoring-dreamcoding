import { printOwing } from './6-1';

class Console {
    #content = '';
    constructor() {}

    log(message) {
        this.#content += `${message}\n`;
    }

    get content() {
        return this.#content;
    }
}

class Clock {
    constructor() {}

    get today() {
        return {
            getFullYear() {
                return 2022;
            },
            getMonth() {
                return 8;
            },
            getDate() {
                return 20;
            },
        };
    }
}

describe('printOwing', () => {
    it('should print owing', () => {
        const invoice = {
            orders: [{ amount: 2 }, { amount: 5 }],
            customer: '엘리',
        };

        const console = new Console();
        const clock = new Clock();
        printOwing(invoice, console, clock);
        const acutual = console.content;

        const expected =
            '***********************\n' +
            '**** Customer Owes ****\n' +
            '***********************\n' +
            'name: 엘리\n' +
            'amount: 7\n' +
            'due: 2022. 10. 20.\n';

        expect(acutual).toBe(expected);
    });
});

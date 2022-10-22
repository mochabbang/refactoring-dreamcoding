class Clock {
    constructor() {}

    get today() {
        return new Date();
    }
}

export function printOwing(invoice, console, clock) {
    printBanner(console);
    let outstanding = calculateOutstanding(invoice);
    recordDueDate(clock, invoice);
    printDetail(console, invoice, outstanding);
}

function printDetail(console, invoice, outstanding) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

function recordDueDate(clock, invoice) {
    const today = clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function calculateOutstanding(invoice) {
    let outstanding = 0;
    for (const o of invoice.orders) {
        outstanding += o.amount;
    }
    return outstanding;
}

function printBanner(console) {
    console.log('***********************');
    console.log('**** Customer Owes ****');
    console.log('***********************');
}

const invoice = {
    orders: [{ amount: 2 }, { amount: 5 }],
    customer: '엘리',
};

const clock = new Clock();
printOwing(invoice, console, clock);

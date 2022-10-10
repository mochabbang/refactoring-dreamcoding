//const { create } = require('lodash');

class Employee {
    #name;
    constructor(name) {
        this.#name = name;
    }

    get type() {
        return 'employee';
    }

    toString() {
        return `${this.#name} (${this.type})`;
    }
}

class Engineer extends Employee {
    get type() {
        return 'engineer';
    }
}

class Manager extends Employee {
    get type() {
        return 'manager';
    }
}

class SalesPerson extends Employee {
    get type() {
        return 'salesperson';
    }
}

function createEmployee(name, type) {
    switch (type) {
        case 'engineer':
            return new Engineer(name);
        case 'manager':
            return new Manager(name);
        case 'salesperson':
            return new SalesPerson(name);
        case 'employee':
            return new Employee(name);
        default:
            throw new Error(`${type}라는 직원 유형은 없습니다.`);
    }
}

// const ellie = new Engineer('엘리');
// const bob = new Manager('밥');
const ellie = createEmployee('엘리', 'engineer');
const bob = createEmployee('밥', 'manager');

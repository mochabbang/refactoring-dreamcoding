export class Employee {
  // private를 제공해주는 언어에서는 private 생성자로 구성한다.
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: "Engineer", M: "Manager", S: "Salesman" };
  }

  // Factory 로 변환
  static createEngineer(name) {
    return new Employee(name, "E");
  }

  static createManager(name) {
    return new Employee(name, "M");
  }

  static createSalesman(name) {
    return new Employee(name, "S");
  }
}

const employeeEngineer = Employee.createEngineer("모카");

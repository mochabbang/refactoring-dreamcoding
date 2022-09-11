import fs from "fs";

// 이것은 내가 책보고 따라 만든 class
class Command {
  #fileName;
  #countReadOnly;

  constructor(args) {
    if (!args[2]) {
      throw new Error("파일 이름을 입력하세요");
    }

    this.#fileName = `./${args[2]}.json`;
    if (!fs.existsSync(this.#fileName)) {
      throw new Error("파일이 존재하지 않습니다");
    }

    this.#countReadOnly = args.includes("-r");
  }

  get fileName() {
    return this.#fileName;
  }

  get countReadOnly() {
    return this.#countReadOnly;
  }
}

// 1.run 함수 만들어서 노드의 process 디펜던시를 제거함.
run(process.argv);

function run(args) {
  //const command = parseCommand(args);
  const command = new Command(args);
  countOrders(command);
}

// function parseCommand(args) {
//   if (!args[2]) {
//     throw new Error("파일 이름을 입력하세요");
//   }

//   const fileName = `./${args[2]}.json`;
//   if (!fs.existsSync(fileName)) {
//     throw new Error("파일이 존재하지 않습니다");
//   }

//   const countReadOnly = args.includes("-r");

//   return {
//     fileName,
//     countReadOnly,
//   };
//}

function countOrders(command) {
  const rawData = fs.readFileSync(command.fileName);
  const orders = JSON.parse(rawData);
  const filtered = command.countReadOnly
    ? orders.filter((order) => order.status === "ready").length
    : orders.length;

  console.log(filtered);
}

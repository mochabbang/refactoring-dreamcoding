// // 상속
// class Printer {
//   #printerHead;
//   constructor(printerHead) {
//     this.#printerHead = printerHead;
//   }

//   print() {
//     this.#printerHead
//       ? this.#printerHead.print()
//       : console.log("기본적인 출력!");
//   }
// }

// class RedPrinterHead {
//   print() {
//     console.log("Red 출력");
//   }
// }

// class BlackPrinterHead {
//   print() {
//     console.log("Black 출력");
//   }
// }

// const printers = [
//   new Printer(),
//   new Printer(new RedPrinterHead()),
//   new Printer(new BlackPrinterHead()),
// ];

// printers.forEach((printer) => printer.print());

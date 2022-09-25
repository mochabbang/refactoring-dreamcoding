// 예제 1
/* 함수 하나당 하나의 일!! */
function totalOutstanding() {
  return customer.invoices.reduce((total, each) => each.amount + total, 0);
}

function sendBill() {
  // Bill...
}

// 예제 2
export function alertForMiscreant(people, alarm) {
  if (findMiscreant(people) !== "") {
    setOffAlarms(alarm, miscreant);
  }
}

function findMiscreant(people) {
  return people.filter((p) => {
    return "Don,John".includes(p) ? p : "";
  });

  // for (const p of people) {
  //   if (p === "Don") {
  //     return "Don";
  //   }
  //   if (p === "John") {
  //     return "John";
  //   }
  // }
  // return "";
}

function setOffAlarms(alarm, p) {
  setOffAlarms(alarm, p);
}

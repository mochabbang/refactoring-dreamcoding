export function reportYoungestAgeAndTotalSalary(people) {
  return `youngestAge: ${youngest(people)}, totalSalary: ${totalSalary(
    people
  )}`;

  function youngest(people) {
    // let youngest = people[0] ? people[0].age : Infinity;
    // for (const p of people) {
    //   if (p.age < youngest) youngest = p.age;
    // }

    // return youngest;

    return Math.min(...people.map((p) => p.age));
  }

  function totalSalary(people) {
    // let totalSalary = 0;
    // for (const p of people) {
    //   totalSalary += p.salary;
    // }

    // return totalSalary;
    return people.reduce((total, p) => total + p.totalSalary, 0);
  }
}

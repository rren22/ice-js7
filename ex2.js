const studentCountByStanding = {
  freshman: 2,
  sophomore: 10,
  junior: 9,
  senior: 5,
  other: 2,
};

let max = -Infinity;
let maxStanding;
for (const standing of Object.keys(studentCountByStanding)) {
  const count = studentCountByStanding[standing];
  if (count > max) {
    max = count;
    maxStanding = standing;
  }
}

console.log(maxStanding, max);
// print which kind of student there are the most of, and how many there are.

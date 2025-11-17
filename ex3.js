const studentCountByStanding = {
  freshman: 2,
  sophomore: 10,
  junior: 9,
  senior: 5,
  other: 2,
};

// your code here

// print the highest number
// use .sort() or .toSorted()
// You do NOT need to print which kind of student it goes with

const counts = Object.values(studentCountByStanding);
counts.sort();
console.log(counts[counts.length - 1]);

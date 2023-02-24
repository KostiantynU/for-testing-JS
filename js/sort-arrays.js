// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => {
//   console.log('b:', b);
//   console.log('a:', a);
//   return b - a;
// });
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   secondStudent.name.localeCompare(firstStudent.name)
// );
// // console.log(inAscendingScoreOrder);
// // console.log(inDescendingScoreOrder);
// console.log(inAlphabeticalOrder);

const students = [
  { name: 'Манго', score: 83, courses: ['математика', 'фізика'] },
  { name: 'Полі', score: 59, courses: ['інформатика', 'математика'] },
  { name: 'Аякс', score: 37, courses: ['фізика', 'біологія'] },
  { name: 'Ківі', score: 94, courses: ['література', 'інформатика'] },
];

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// console.log('AscendingScore', sortedByAscendingScore);
// const names = [...students].sort((a, b) => a.score - b.score).map(student => student.name);
// console.log('names:', names);
const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));
console.log('uniqueSortedCourses:', uniqueSortedCourses);

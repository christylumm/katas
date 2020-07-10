/* 
KATA 4 - Instructors Names

Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.

*/

//Using the .reduce method reduces the array to a single value
//Using the .filter method creates a new array with all elements that pass the test implemented by the function, instructorWithLongestName

const instructorWithLongestName = function(instructors) {
  const longestName = instructors.reduce((longestLength, instructor) => {
    if (instructor.name.length > longestLength) {
      return instructor.name.length;
    } else {
      return longestLength
    }
  } , 0);
  return instructors.filter(instructor => instructor.name.length === longestName);
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
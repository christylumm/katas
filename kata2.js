/* 
KATA 2 - Conditional Sums

Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

*/

const conditionalSum = function(values, condition) {
  var total = 0;
  for (i = 0; i < values.length; i++) {
    if (condition === "even" && values[i] % 2 === 0) {
      total += values[i];
    } else if (condition === "odd" && values[i] %2 != 0) {
      total += values[i];
    }
  }
  return total;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
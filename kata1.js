const sumLargestNumbers = function(data) {
  // Put your solution here

  data.sort((a,b) => a-b);

  let sortedArr = data.sort((a,b) => a-b);
  return sortedArr[data.length - 1] + sortedArr[data.length -2];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([63, 8, 15, 91, 59, 3]));
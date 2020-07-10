/*
KATA 3 - Vowels

Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/

const numberOfVowels = function(data) {
  // Put your solution here
  let vowelCount = 0;
  let string = data.toString();

  for (var i = 0; i <= string.length - 1; i++) {

    //if a vowel, add to vowel count
    if (string.charAt(i) === "a" || string.charAt(i) === "e" || string.charAt(i) === "i" || string.charAt(i) === "o" || string.charAt(i) === "u") {
      vowelCount += 1;
    }
  }
  return vowelCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
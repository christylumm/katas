/*

KATA 5 - Percent Encoded String

Create a function named urlEncode that will receive a string of words, and return that string with all of the whitespace characters converted to %20. If there is whitespace on the outside of the string, like in our second example above, you should only replace the whitespace within the string.

*/

// Using the .trim method removes whitespace from both sides of the string. Declaring a new variable then applying the .trim method will allow us to work with a trimmed string before replacing the spaces with %20 using a for loop.

const urlEncode = function(text) {
  let urlName = "";
  let newStr = text.trim();

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === " ") {
      urlName += "%20";
    } else {
      urlName += newStr[i];
    }
  }
  return urlName; 

  
};


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
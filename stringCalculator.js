// program that is written using TDD process
function add(numbers) {
    if (numbers === "") return 0;
  
    let delimiter = /,|\n/; // Default delimiters
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n", 2);
      delimiter = new RegExp(parts[0].slice(2)); // Custom delimiter
      numbers = parts[1]; // Exclude the delimiter line
    }
  
    const numArray = numbers.split(delimiter).map(Number);
  
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }
  
    return numArray.reduce((sum, num) => sum + num, 0);
  }
//   console.log(add("1,2,3,7")); // Output: 6
  module.exports = add;
  
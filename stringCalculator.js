function add(numbers) {
    if (numbers === "") return 0; 
  
    return numArray.reduce((sum, num) => sum + num, 0);
  }
//   console.log(add("1,2,3,7")); // Output: 6
  module.exports = add;
  
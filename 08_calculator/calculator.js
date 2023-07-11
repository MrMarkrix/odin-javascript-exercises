const valueA = 0
const valueB = 0

const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(array) {
  return array.reduce((accumulator, currentValue)=>accumulator + currentValue,0);
};

const multiply = function(...numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++){
    result *= numbers[i];
  }
  return result;

};

const power = function(a,b) {
  return Math.pow(a,b);
	
};

const factorial = function(fn) {
  if (fn === 0 || fn === 1){
    return 1;
  } else {
    return fn * factorial(fn-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

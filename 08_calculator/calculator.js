const add = function(...ints) {
  result = 0;
  intLen = ints.length;
  for (i = 0; i < intLen; i++) {
    result += ints[i]; }

  return result;
};

const subtract = function(...ints) {
	result = ints[0];
  intLen = ints.length;
  for (i = 1; i < intLen; i++) {
    result -= ints[i];
  }
  return result;
};

const sum = function(ints) {
  result = 0;
  for (i = 0; i < ints.length; i++) {
    result += ints[i];
  }
  return result;
};

const multiply = function(ints) {
  result = 1;
  for (i = 0; i < ints.length; i++) {
    result *= ints[i];
  }
  return result;
};

const power = function(int1, int2) {
  let result = Math.pow(int1, int2);
	return result;
};

const factorial = function(int) {
  result = 1;
  for (i = 1; i <= int; i++) {
    result *= i;
  }
  return result;
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

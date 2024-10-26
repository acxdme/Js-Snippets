function sum(a) {

  return function(b) {
    if (b !== undefined) {
      return sum(a + b);
    } else {
      return a;
    }
  };
}

console.log(sum(9)(2)(3)(4)(5)());
//----------------------------------------------------------------
//using toString operator
function sum(a) {
  let currentSum = a;

  function innerSum(b) {
    currentSum += b; 
    return innerSum;
  }

  // Overriding `toString` to return the accumulated sum 
  // when the function is evaluated as a string
  innerSum.toString = function() {
    return currentSum;
  };

  //----------------------------------------------------------------
  // using valueOf operator
  function sum(initial) {
  let currentSum = initial;

  function innerSum(value) {
    currentSum += value;
    return innerSum; // Return the inner function for chaining
  }

  // Implicit conversion to number when used in a numeric context
  innerSum.valueOf = function() {
    return currentSum;
  };

  return innerSum;
}

// Example usage:
const result = sum(5)(10)(15);
console.log(+result); // Outputs: [Function: innerSum]
console.log(result + 0); // Outputs: 30 (using implicit conversion)

  return innerSum;
}

console.log(+sum(9)(2)(3)(4)(5));  // Outputs: 23

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

  return innerSum;
}

console.log(+sum(9)(2)(3)(4)(5));  // Outputs: 23

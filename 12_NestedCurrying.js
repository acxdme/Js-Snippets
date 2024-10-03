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

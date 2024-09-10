/**
b is assigned globally (due to not being declared explicitly with var, let, or const), so it is not undefined.
a is declared locally inside the display() function, so it is undefined outside the function after it is called.
typeof b === "undefined" is false, and typeof a === "undefined" is true.
**/

{
  function display() {
    var a = (b = 10); // b will be assigned 10 in global space as stict mode is disabled here
  
  }
  display();
  console.log(typeof b === "undefined");
  console.log(typeof a === "undefined");
}

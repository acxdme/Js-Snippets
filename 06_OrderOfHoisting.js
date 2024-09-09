  /**
   * 
   * Key Concepts:
     Hoisting:
    In JavaScript, function declarations are hoisted to the top of their scope before var declarations.
    However, if a var with the same name as a function is declared, the var overwrites the function after hoisting.
    Function Declarations vs. Variable Declarations:
    
    Function declarations are hoisted with their entire body,
    while var declarations are hoisted but not initialized until the assignment step.
   ***/

   var foo = 9;
  
  function foo() {
    console.log("1");
   }


  console.log(typeof foo);
  

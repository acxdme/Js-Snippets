var length = 4;
function callback() {
  console.log(this.length); // What is logged? Answer is : 3
}
const object = {
  length: 5,
  method() {
    arguments[0]();
  }
};
object.method(callback, 1, 2);

//---------------------------------------------------------------------------------------------------------------

var length = 4;
function callback() {
  console.log(this.length); // What is logged? Answer is : 4
}
const object = {
  length: 5,
  method(callback) {
    callback();
  }
};
object.method(callback, 1, 2);

/*
Key Concepts:
this inside arguments[0]():
  When arguments[0]() is invoked, the this keyword inside the callback function refers to the arguments object because
  of how the function is called.
arguments.length:
  The arguments object has a length property that represents the number of arguments passed to the function. In this case,
  it's 3 because method() was called with three arguments: callback, 1, and 2.
*/

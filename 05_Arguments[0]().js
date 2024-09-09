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

//-------------------------------------

var length = 4;
function callback() {
  console.log(this.length); // What is logged? Answer is 4
}
const object = {
  length: 5,
  method(callback) {
    callback();
  }
};
object.method(callback, 1, 2);

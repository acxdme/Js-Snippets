Function.prototype.myCall = function (context = {} , ...args) {
  // basic-validation
   if(typeof this !== "function"){
     console.log("not a callable function");
     return;
   }
   
   context.fn = this;
   
   context.fn(...args);
   
}

function test (surname ){
  console.log(`my name is ${this.name} ${surname}`);
}

test.myCall({name : "ayush"},"chaudhary");


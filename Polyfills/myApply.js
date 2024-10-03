Function.prototype.myApply = function (context = {} , args = []){
  // basic validation
   if(typeof this !== "function"){
      console.log("Not a callable function");
      return;
   }
   
   if(!Array.isArray(args)){
     console.log("Arguments not iterable");
     return;
   }
   
   context.fn = this;
   
   context.fn(...args)
  
}

function test (surname, location ){
  console.log(`my name is ${this.name} ${surname} ${location}`);
}

test.myApply({name : "ayush"},["chaudhary","mathura"]);


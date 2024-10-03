Function.prototype.myBind = function (context = {} , ...args){
  
        if(typeof this !== "function"){
          console.log("not callable");
          return;
        }
          context.fn = this;
       return function (...newargs){
           context.fn(...args,...newargs)
       }
}

function test (surname, location ){
  console.log(`my name is ${this.name} ${surname} and location : ${location}`);
}

const t = test.myBind({name : "ayush"},"chaudhary");
t("mathura");


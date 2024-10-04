function throttle(func,delay){
  let inThrottle;
  return function(...args){
    if(!inThrottle){
       func.apply(this,args)
       inThrottle = true;
       setTimeout(function() {
          inThrottle = false;
       }, delay);
    }
  }
}

let throttledFunc = throttle(()=> console.log("hello"),1000);
setInterval(() => {
  throttledFunc();
}, 100);

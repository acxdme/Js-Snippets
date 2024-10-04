//debounce
function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);  // Clear the previous timer
    timer = setTimeout(() => {
      func.apply(this, args);  // Call the function after the delay
    }, delay); 
  };
}

let debouncedFunc = debounce(() => console.log("Debounced!"), 1000);

// Simulate calling the function every 200ms,
//but it will only log after 1 second of inactivity
let interval = setInterval(() => {
  debouncedFunc();
}, 200);

// Stop the interval after 3 seconds 
//(to simulate typing stop)
setTimeout(() => {
  clearInterval(interval);
}, 3000);

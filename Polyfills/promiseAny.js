/**
Promise.any() is a method introduced in ES2021 (also known as ES12) that takes an iterable of Promises and returns a new Promise.
This new Promise resolves as soon as any of the input Promises in the iterable resolves, with the value of the first resolved Promise.
If all input Promises are rejected, then the returned Promise is rejected with an AggregateError,
which contains an array of rejection values.
**/

function any(promises) {

  let errors = [];
  
  return new Promise((resolve, reject) => {
    for(let [idx, promise] of promises.entries()) { // method returns an iterator object containing the key-value pairs of array
      promise
        .then((res) => resolve(res))
        .catch(e => {
          errors[idx] = e;
          if(errors.length === promises.length) {
            reject(new AggregateError(
              'No Promise in Promise.any was resolved', 
              errors
            ))
          }
        })
    }
  })
}

function allSettled(promises) {
  let results = [];
  let completedCount = 0;
  return new Promise((resolve) => {  
    if (promises.length === 0) {
      resolve(results);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = { status: 'fulfilled', value };
          completedCount++;

          if (completedCount === promises.length) {
            resolve(results);
          }
        })
        .catch(reason => {
          results[index] = { status: 'rejected', reason };
          completedCount++;

          if (completedCount === promises.length) {
            resolve(results);
          }
        });
    });
  });
}

// Example usage
const promise1 = Promise.resolve(50);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => reject('Error occurred'), 1000)
);
const promises = [promise1, promise2];

allSettled(promises)
  .then(results => {
    results.forEach(result => {
      console.log(result.status, result.value);
    });
  })
  .catch(error => {
    console.error(error);
  });

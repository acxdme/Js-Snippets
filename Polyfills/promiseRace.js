Promise.race() is a method that takes an iterable of promises as input and returns a new promise that is settled (either fulfilled or rejected) as soon as any of the promises in the iterable settles.

function racePromises(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then(value => {
          resolve(value);
        })
        .catch(error => {
          reject(error);
        });
    });
  });
}

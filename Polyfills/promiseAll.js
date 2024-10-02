let p1 = new Promise((resolve,reject)=> {
    setTimeout((resolve("p1 is sucess")),1000);
});

let p2 = new Promise((resolve,reject)=> {
    setTimeout((resolve("p2 is sucess")),2000);
    // setTimeout((reject("p2 is failed")),2000);
});

function myAll(promiseArr) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completedPromises = 0;
        let size = promiseArr.length;
        
        if (size === 0) {
            return resolve(results);
        }

        promiseArr.forEach((p, index) => {
            Promise.resolve(p)
                .then(res => {
                    results[index] = res;
                    completedPromises++;

                    if (completedPromises === size) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    });
}

myAll([p1,p2]).then((res) => console.log(res)).catch((err)=> console.log(err));

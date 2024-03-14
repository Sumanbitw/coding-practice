/**
 * 1. Accepts an array of promises
 * 2. Returns a promise
 * 3. Resolves when all of the promises in the array are fulfilled or when the iterable contains no promises
 * 4. Rejects on first failed promise with error message
 * 5. Returns in the same order as mentioned in the array
 */

function myPromiseAll(promisesArr) {
    let resPromises = [];
    let promisesCount = 0;
    return new Promise((resolve, reject) => {
        promisesArr.forEach((promise, index) => {
            promise.then((res) => {
                resPromises[index] = res;
                promisesCount += 1;

                if(promisesCount === promisesArr.length) {
                    resolve(resPromises);
                }
            }).catch((error) => reject(error))
        })
    })
}

function timer(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(delay < 100) {
                resolve(delay)
            }else {
                reject("Rejected")
            }
        }, delay)
    })
}

const promisesArr = [timer(500), timer(100), timer(900), timer(700), timer(300)]

Promise.all(promisesArr).then((res) => console.log(res)).catch((error) => console.log(error))

// myPromiseAll(promisesArr).then((res) => {
//     console.log(res, "then");
// }).catch((error) => console.log(error, "error"))
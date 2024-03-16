/**
 * Implement a function that takes a list of async functions as input and a callback function and executes the 
 * input tasks in parallel i.e all at once and invokes the callback after every task is finished.
 */

function executeAsyncTaskInParallel(tasks, cb) {
    let fulfilled = [];
    let failed = [];

    let taskCompletedCount = 0;

    tasks.forEach((task) => {
        task.then((val) => {
            fulfilled.push(val);
        }).catch((error) => {
            failed.push(error)
        }).finally(() => {
            taskCompletedCount++;

            if(taskCompletedCount >= tasks.length) {
                cb(fulfilled, failed);
            }
        })
    })
}

function createAsyncTask() {
    const randomVal = Math.floor(Math.random() * 10);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(randomVal < 4) {
                reject(`Oops! Something went wrong.`);
            }else {
                resolve(randomVal * 100);
            }
        }, randomVal * 100)
    })
}

const inputArr = [createAsyncTask(), createAsyncTask(), createAsyncTask(), createAsyncTask(), createAsyncTask(), createAsyncTask()]

executeAsyncTaskInParallel(inputArr, (success, failed) => {
    console.error(failed, "failed");
    console.log(success, "success");
})
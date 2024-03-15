/**
 * Implement a function that takes a list of async functions as an input and executes them in series that is one at a time. 
 * The next tasks is executed only when the previous tasks is completed.
 */

// Recursion
// function asyncSeriesExecutor(arr) {
//     const firstItem = arr.shift();

//     firstItem.then((res) => {
//         console.log(res);
//         if(arr.length > 0) {
//             asyncSeriesExecutor(arr);
//         }
//     }).catch((error) => console.log(error)); 
// }

// Async-Await
// const asyncSeriesExecutor = async function(arr){

//     for(let promise of arr){
//         try{
//             const result = await promise;
//             console.log(result);
//         }catch(error){
//             console.log(error)
//         }
//     }
// }

// reduce
const asyncSeriesExecutor = function(promiseArr) {
    promiseArr.reduce(async(acc, curr) => {
        return acc.then((res) => {
            return curr.then(val => console.log(val))
        }).catch(error => console.log(error))      
    }, Promise.resolve())
}

function asyncTime(delay){
    return new Promise((resolve, reject) => {
        try{
            setTimeout(() => {
                resolve(`Completing in ${delay}`)
            }, delay * 100);
        }catch(error){
            reject(error);
        }
    })
}

const error = new Error("Oops! Something went wrong");
const inputArr = [asyncTime(7),error, asyncTime(1), asyncTime(6)]
asyncSeriesExecutor(inputArr)
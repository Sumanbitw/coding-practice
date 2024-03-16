/**
 * Implement a function that takes a list of async functionsas input and a callback function and executes the 
 * input tasks in parallel i.e all at onceand invokes the callbackafter every task is finished.
 */

function asyncParallel(promises, cb) {
    for(const promise of promises) {

    }
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
const inputArr = [asyncTime(7), async(2), asyncTime(1), asyncTime(6)]

asyncParallel(inputArr, (result) => {
    console.log(res)
})
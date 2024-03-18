// function containsDuplicate(nums) {
//     // let map = new Map();

//     // for(let el of nums){
//     //     if(map.has(el)) return true;

//     //     map.set(el, el);
//     // }
//     // return false;

//     let map = {};

//     for(let el of nums) {
//         if(map[el]) return true;
//         map[el] = el === 0 ? el + 1 : el;
//     }
//     console.log(map);
//     return false
// };

// console.log(containsDuplicate([0,4,5,0,3,6]))

function removeDuplicates(nums) {
    let res = [];

    for(let i = 0; i < nums.length; i++) {
        if(!res.includes(nums[i])) res.push(nums[i]);
    }
    return res;
}

console.log(removeDuplicates([0,4,5,0,3,6]))
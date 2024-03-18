function productExceptSelf(nums) {
    let res = [];
    let startPos = 1;

    for(let i = 0; i < nums.length; i++) {
        res.push(startPos); //[1, 1, 2, 6]
        startPos = startPos * nums[i]; // 1, 2, 2*3=6
    }

    let endPos = 1;

    for(let i = nums.length - 1; i >= 0; i--) {
        res[i] = endPos * res[i]; // [24,12,8,6] 
        endPos = endPos * nums[i]; // 4
    }


    console.log( res, "fwd reverse")

    return res;
}

console.log(productExceptSelf([-1,1,0,-3,3]));
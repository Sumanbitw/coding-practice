function threeSum(arr, target){
    let res = [];
    arr.sort((a,b) => a - b); //[-4,-1,-1,0,1,2]

    for(let i = 0; i < arr.length - 2; i++) {

        if(arr[i] === arr[i - 1]) continue;

        let j = i + 1;
        let k = arr.length - 1;
        
        while(j < k) {
            let sum = arr[i] + arr[j] + arr[k];
            if(sum === target) {
                res.push([arr[i], arr[j], arr[k]]);

                while(arr[j] === arr[j + 1]) j++;
                while(arr[k] === arr[k - 1]) k--;
                j++;
                k--;
            }
            else if(sum > target) k--;
            else j++;
            
        }
    }
    console.log(res, "res")
    return res;
}

threeSum([-1,0,1,2,-1,-4], 0)
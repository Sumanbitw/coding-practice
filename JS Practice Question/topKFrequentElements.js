function topKFrequentElements(nums, k) {
    let map = {} ;
    let res = [];
    let kFreq = []

    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]]){
            map[nums[i]] += 1
        }else{
            map[nums[i]] = 1
        }
    }
    // for(const [key, value] of Object.entries(map)) {
    //     res.push({key, value});
    // }
    // res.sort((a,b) => b.value - a.value);
    
    // for(let i = 0; i < k; i++) {
    //     kFreq.push(parseInt(res[i].key));
    // }

    for(const [key, value] of Object.entries(map)) {
        if(!res[value]) res[value] = key;
        else res[value].push(key)
    }

    for(let i = res.length - 1; i >= 0; i--) {
        if(res[i]) kFreq.push(res[i]);
        if(k === kFreq.length) break;
    }
    console.log(kFreq, "kFreq")
    return kFreq;
}

console.log(topKFrequentElements([1,1,1,2,2,3], 2))
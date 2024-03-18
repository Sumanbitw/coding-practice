function twoSum(nums, target) {
  
    //   for(let i = 0; i < nums.length; i++) {
    //     for(let j = i + 1; j < nums.length; j++) {
    //         if(nums[i] + nums[j] === target) return [i, j]
    //     }
    //   }
    
        let map = {};
    
        for(let i = 0; i < nums.length; i++) {
          let diff = target - nums[i];
          console.log(map.hasOwnProperty(diff), diff, map, "diff")

          if(!map.hasOwnProperty(diff)){ map[nums[i]] = i
            // console.log(map, "map")
        }
          else {
            let idx = map[diff];
            // console.log([i, idx])
            return [i, idx];
          }
        }
};


console.log(twoSum([2,7,11,15],9))
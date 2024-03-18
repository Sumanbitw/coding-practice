function groupAnagrams(strs) {
    let map = {};

    for(const item of strs) {
        const sortedStr = item.split("").sort().join("");
        if(!map.hasOwnProperty(sortedStr)) {
            map[sortedStr] =  [item]
        }else{
           map[sortedStr].push(item)
        }
    }

    // for(const [key,value] of Object.entries(map)) {
    //     res.push(value);
    // }
    // return res

    return Object.values(map);
}


console.log(groupAnagrams(["a"]))
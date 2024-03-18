function isAnagram(s, t) {
    let map = {};

    if(s.length !== t.length) return false;
 
    for(let char of s) {
        if(map[char]) {
            map[char] = map[char] + 1;
        }else{

            map[char] = 1;
        }
    }

     for(let char of t) {
        if(map[char]) {
            map[char] = map[char] - 1;
            console.log(map[char])
        }
    }
    console.log(map, "map");
    for(let [key, value] of Object.entries(map)) {
        if(value !== 0) return false;
    }
    return true;


    // let map = new Map();
    // let count = 0;

    // if(s.length !== t.length) return false;
 
    // for(let char of s) {
    //     if(map.has(char)) {
    //         map.set(char, map.get(char) + 1);
    //     }
    //     map.set(char, 1);
    // }

    //  for(let char of t) {
    //     if(map.has(char)) {
    //         map.set(char, map.get(char) - 1);
    //     }
    // }
    // console.log(map, "map");
    // for(let [key, value] of map) {
    //     if(value !== 0) return false;
    // }
    // return true;
};

console.log(isAnagram("aacc","ccac"));
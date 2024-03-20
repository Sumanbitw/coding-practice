function lengthOfLongestSubstring(str){
  let set = new Set();
  let left = 0;
  let right = 0;
  let longestStrCount = 0;

  while(right < str.length) {
      if(!set.has(str[right])){
          set.add(str[right]);
          longestStrCount = Math.max(longestStrCount, set.size);
          right++;
      }else{
          set.delete(str[left]);
          left++;
      }
  }
  return longestStrCount;
}

console.log(lengthOfLongestSubstring("abcabcbb"), "asdfgf");
console.log(lengthOfLongestSubstring("bbbbb"), "bbbbb");
console.log(lengthOfLongestSubstring("pwwkew"), "pwwkew");
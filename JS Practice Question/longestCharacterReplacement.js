function characterReplacement(s, k) {
  let map = {};
  let left = 0;
  let right = 0;
  let longest = 0;
  let topFreq = 0;

  while (right < s.length) {
    let rightChar = s[right];
    map[rightChar] = map[rightChar] + 1 || 1;
    topFreq = Math.max(topFreq, map[rightChar]);

    while (right - left + 1 - topFreq > k) {
      let leftChar = s[left];
      map[leftChar]--;
      left++;
    }
    longest = Math.max(longest, right - left + 1);

    right++;
  }
  return longest;
}

const s = "ABAB";
const k = 2;

console.log(characterReplacement(s,k))
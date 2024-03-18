function validPalindrome(str) {
    let newStr =""
    for(let char of str) {
        console.log(char, typeof char, Number(char))
        const charToLowerCase = char.toLowerCase();
        if((charToLowerCase >= "a" && charToLowerCase <= "z") || (char >= "0" && char <= "9")){
            newStr += charToLowerCase;
        }
    }

    let start = 0;
    let end = newStr.length - 1;

    while(start < end) {
        if(newStr[start] !== newStr[end]) return false;
        else{
            start++;
            end--;
        }
    }
    return true;
}

// console.log(validPalindrome("A man, a plan, a canal: Panama"))
// console.log(validPalindrome("race a car"))
console.log(validPalindrome("0P"))
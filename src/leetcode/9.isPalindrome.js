/**
 * @param {number} x
 * @return {boolean}
 */
var isNumberPalindrome = function(x) {
    let isPalinderome = true;
    //to be solved using two pointer techniques
    // how to traverse a number  - spit the number and store it in a array
    const sx = Array.from(String(x), Number);
    let i =0, j= sx.length-1;
    while (i < j) {
       if(sx[i] != sx[j]) isPalinderome = false
       i++;
       j--;
    }
    return isPalinderome;
};

const a = 11;
console.log(isNumberPalindrome(a))
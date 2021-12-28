function solution(N, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let firstHalfPalindrome = '';
    let tempPalindrome;
    let palindrome = '';
    let getFirstHalf = () =>{
    for (let index = 0; index <= N; index++) {
        if(index == K){
            break;
        }
        else{
            firstHalfPalindrome = firstHalfPalindrome + alphabet[index];
        }
    }
    }
    const reverseString = (str) => {
        return str.split("").reverse().join("");
    }
    getFirstHalf();
    tempPalindrome = firstHalfPalindrome + reverseString(firstHalfPalindrome)
    console.log(tempPalindrome);
    if(tempPalindrome.length < N){
        palindrome = firstHalfPalindrome;
        for (let index = 0; index < N-tempPalindrome.length; index++) {
            palindrome = palindrome+alphabet[0]
        }
        palindrome = palindrome + reverseString(firstHalfPalindrome)
    }
    else if(tempPalindrome.length > N){
        // const _removeMiddleA = reverseString(firstHalfPalindrome).shiift  ft()
        // palindrome= palindrome + _removeMiddleA

    }
    else{
        palindrome = tempPalindrome;
    }
    return palindrome;
}

const N = 3;
const K = 2;
console.log(solution(4,3));
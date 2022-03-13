/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        }
        else {
            digits[i]++;
            return digits;
        }
    }
    return [1, ...digits];
};
const digits = [4, 3, 2, 1];
console.log(plusOne(digits))

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0;
    // let numsZero = []
    // for (const i of nums) {
    //    if (i !=0) {
    //       numsZero.push(i) 
    //    }
    // }
    // for (let i = 0; i < nums.length; i++) {
    //     if(i < numsZero.length){
    //         nums[i] = numsZero[i]
    //     }
    //     else { nums[i]= 0}
    // }
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !=0){
            const temp = nums[j];
            nums[j] = nums[i]
            nums[i] = temp;
            j++;
        }
    }
    return nums;
};
const nums = [0,1,0,3,12];
console.log(moveZeroes(nums));
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     for (let i = 0; i < k; i++) {
//         const temp = nums[nums.length-1] ;
//         for (let j = nums.length-1; j > 0; j--) {
//            nums[j] = nums[j-1]
//        } 
//        nums[0] = temp;
//     }
//     return nums;
// };
var rotate = function(nums, k) {
    let firstHalf = [];
    let secondHalf = [];
    for (let i = 0; i < k; i++) {
       firstHalf.push(nums[i]) 
       secondHalf.push
    }

   return nums;
};
const nums = [1,2,3,4,5,6,7], k = 3;
// const nums = [-1,-100,3,99], k = 2
console.log(rotate(nums,k))
// Output: [5,6,7,1,2,3,4]
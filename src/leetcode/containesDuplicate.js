/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
     const numsMap = {};
     for (const i of nums) {
        numsMap[i] = numsMap[i] ? numsMap[i]+1: 1
     }
     for (const j in numsMap) {
         if (numsMap[j] >1) {
            return true; 
         }
     }
     return false;
};
const nums = [1,2,3,1];
 //const nums = [1,2,3,4];
console.log(containsDuplicate(nums))
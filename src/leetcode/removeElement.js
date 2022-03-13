/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] == val) {
            nums[i] = '_'
        }
    }

let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !='_'){
            const temp = nums[j];
            nums[j] = nums[i]
            nums[i] = temp;
            j++;
        }
    }
    return nums;

    
};
const nums = [3,2,2,3], val = 3
// Output: 5, nums = [0,1,4,0,3,_,_,_]
console.log(removeElement(nums, val))

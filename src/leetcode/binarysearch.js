/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums = [], target) {
    let start = 0, end = nums.length - 1, middle = Math.floor((start + end) / 2); 
    while (start <= end) {
        if (target < nums[middle]) { end = middle - 1; middle = Math.floor((start + end) / 2) }
        else if (target > nums[middle]) { start = middle + 1; middle = Math.floor((start + end) / 2)  }
        else if (target == nums[middle]) { 
           return middle; 
        }
    }
    return -1;
};

export default search;
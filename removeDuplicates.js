/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let currentNumber = undefined;
    for (let i = 0; i < nums.length; i++) {
        if(currentNumber != undefined && nums[i]==currentNumber){
            nums[i] ='';
        }
        else{
            currentNumber = nums[i];
        }
    }
    let currentEmptyIndex = undefined;
    let isValueSwapped = false; 
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === '' && isValueSwapped== false){
            currentEmptyIndex = i;
        }
        else if(nums[i] != ''){
            nums[currentEmptyIndex] = nums[i];
            nums[i] ="";
        }

    }
    // return nums;
};
const nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))
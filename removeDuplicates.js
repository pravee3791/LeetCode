/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     let currentNumber = undefined;
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if(currentNumber != undefined && nums[i]==currentNumber){
//             nums[i] ='_';
//         }
//         else{
//             currentNumber = nums[i];
//         }
//     }
//     let j = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] != '_'){
//             const temp = nums[j]
//             nums[j] = nums[i];
//             nums[i] = temp;
//             j++;
//         }
//     }
//     for (let i = 0; i < nums.length; i++) {
//        if (nums[i] == '_') {
//            count = i;
//            return count;
//        } 
//     }
//     console.log(nums)
//    return count;
// };

var removeDuplicates = function(nums) {
    let count = 1;
    let currentNumber = nums[0]
    let j = 0;
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] != currentNumber ) {
            currentNumber = nums[i];
            count++;
        }
        else{
            nums[i] ="_"
        }
    }
    let j = 0;
    console.log(nums);
    for (let k = 0; k < nums.length; k++) {
       if (nums[k] != '') {
          const temp = nums[j];
          nums[j] = nums[k];
          nums[k] = temp; 
          j++;
       } 
    }

    return nums;
};
const nums = [0,0,1,1,1,2,2,3,3,4]
// const nums = [1]
console.log(removeDuplicates(nums))
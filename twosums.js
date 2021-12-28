var twoSum = function(nums,target){
    let twoSum = [];
    for (let i = 0; i <= nums.length; i++) {
        for (let j = i+1; j <= nums.length -1; j++) {
            if ((parseInt(nums[i])+parseInt(nums[j])) == target) {
                twoSum.push(i,j);
                break;
            }
        }
    }
   return twoSum;
}
const nums = [3,2,4];
const target = 6;
console.log(twoSum(nums, target));
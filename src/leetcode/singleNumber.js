/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const numsMap = {};
    let singleN ;
    for (const num of nums) {
        numsMap[num] = numsMap[num] ? numsMap[num] + 1 : 1;
    }
    for (const key in numsMap) {
        if(numsMap[key] == 1){singleN = key}
    }
    return singleN;
};
const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums))



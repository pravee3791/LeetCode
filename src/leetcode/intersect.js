/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let numMap = {}
    let result = [];
    for (const i of nums1) {
        numMap[i] = numMap[i] ? numMap[i]+1:1;
    }
    for (const j of nums2) {
        if (j in numMap && numMap[j]>0) {
           result.push(j) 
           numMap[j] = --numMap[j];
        }
    }
    return result;
};
const nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4];
console.log(intersect(nums1, nums2))


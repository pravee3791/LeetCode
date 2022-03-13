// var twoSumHashMap = function(nums, target) {
//     let matchMap = {};
//     for(let i = 0; i < nums.length; i++){
//         console.log(i)
//      let compliment = target - nums[i];
//      console.log(compliment)
//         if(compliment in matchMap){
//             return [i, matchMap[compliment]]
//         }
//         matchMap[nums[i]] = i;
//         console.log(matchMap);
//     }
// }
// const nums = [3,2,4];
// const target = 6;
// console.log(twoSumHashMap(nums, target));

const hashMaps = {
    '1': 0,
    '2': 1,
    '3': 2
}
hashMaps[4]='5'
console.log(hashMaps);
const a = 1;
if (a in hashMaps) {
   console.log(`detected`) 
}
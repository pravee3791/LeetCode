/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let gpAngrms = [];
    let gpAngrmHm = {};
    const sortString = (str) => {
        return [...str].sort((a, b) => a.localeCompare(b)).join("");
    }
    for (const i in strs) {
        const sortedString = sortString(strs[i])
        if (sortedString in gpAngrmHm) {
            const val = gpAngrmHm[sortedString];
            val.push(strs[i])
            gpAngrmHm[sortedString] = val;
        }
        else{
            const firstElement = [strs[i]]
            gpAngrmHm[sortedString] = firstElement;
        }
    }
    for (const key in gpAngrmHm) {
        gpAngrms.push(gpAngrmHm[key])
    }
    return gpAngrms;
};


const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(strs))

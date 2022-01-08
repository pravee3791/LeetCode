/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle == "" ) {return 0};
    if(haystack == needle){return 0};
    if(haystack.length != needle.length){return -1;}
    let index = -1;
    let isPresent = false;
    let haystackArray = haystack.split('');
    let needleArray = needle.split('');
    let needleLength = needleArray.length;
    let j=0;
    for (let i = 0; i < haystackArray.length; i++) {
        if(haystackArray[i] == needleArray[0]){
            if(j < needleLength){
                if(haystackArray[i] == needleArray[j]){ index = i; isPresent = true}
                else { index = -1; isPresent = false}
            }
            j++
        }
    }
    
    if(isPresent){
        return index - (needleLength -1)
    }
    return index;
};
const haystack = "hello", needle = "ll"
// Output: 2
// const haystack = "aaaaa", needle = "bba"
// Output: -1
//  const haystack = "", needle = ""
// Output: 0
// const haystack = "mississippi" , needle="mississippi";
console.log(strStr(haystack,needle))
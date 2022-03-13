var isAnagram = function (s, t) {
    // const sArray = [...s];
    // const tArray = [...t];
    // if (sArray.length != tArray.length) {
    //     return false;
    // }
    // if(JSON.stringify(sArray.sort()) === JSON.stringify(tArray.sort())){
    //     return true
    // }
    // else return false;
 if(s.length != t.length) return false;
    
    var arr1 = s.split('');
    var arr2 = t.split('');
    var f1 = {};
    
    arr1.forEach(a => {
        if(!f1[a]) f1[a] = 0;
        f1[a]++;
    });
    
    arr2.forEach(a => {
        if(!f1[a]) return false;
        f1[a] -= 1;
        if(!f1[a]) delete f1[a];
    });
        
    return !Object.keys(f1).length;

};
const s = "anagram";
const t = "nagaram";
console.log(isAnagram(s, t))
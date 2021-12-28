var firstUniqChar = function (s) {
    let count = Array(26).fill(0);
    const n = s.length;
    for (let i = 0; i < n; i++) {
        let index = s.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0);
        count[index]++;
    }
    for (let i = 0; i < n; i++) {
        let index = s.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0);
        if (count[index] == 1) {
            return i;
        }

    }
    return -1;
};
const s = "loveleetcode";
// const s = `leetcode`;
console.log(firstUniqChar(s));


// Write a function soulution that returns a srtring of length N consisting
// alternating characters `+` and `- `, staring with a `+` character. You can assume
// N is between 1 and 100.
// For example given N = %, your function should return `+-+-+` and given N 
// it should return `+-+-`.   

function printChar(N) {
    let isPlus = false;
    for (var i = 0; i < N; i++) {
        if(isPlus){
            console.log(`-`)
        }
        else{
            console.log(`+`)
        }
        isPlus = !isPlus;
    }
}
const N = 5;
console.log(printChar(N))
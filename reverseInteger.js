var reverse = function(x) {
    let n;
    let isNegative = false ;
    let reverseInterger;
    if (x < 0) {
       n = Math.abs(x) 
       isNegative = true;
    } else {
        n = x;
    }
    n = n.toString().split('');
    let i = 0;
    let j = n.length -1;
    while (i<j) {
       let temp = n[i];
        n[i] = n[j]
        n[j] = temp;
        i++;
        j--; 
    }
    if(isNegative){
       reverseInterger =  -Math.abs(n.join(''))
    }
    else{
        reverseInterger = n.join('');
    }
    if (reverseInterger < (Math.pow(2, 31) * -1) || reverseInterger > Math.pow(2, 31) - 1) return 0;
    return reverseInterger;
};
let x = 123;
// const x = -123;
console.log(reverse(x));
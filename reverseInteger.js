var reverse = function(x) {
    console.log(x);
    let y = String(x);
    let j = y.split('').reverse();
    console.log(j.join(''));
};
let x = 123;
reverse(x)
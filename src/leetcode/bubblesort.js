const a = [1,9,5,7,87,34];
console.log(a)
const bubbleSort = function(arr){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i+1]){
            const temp = arr[i];
            arr[i] = arr[i+1]
            arr[i+1] = temp;
        } 
        console.log(arr)
    } 
    return arr;
}

console.log(bubbleSort(a))
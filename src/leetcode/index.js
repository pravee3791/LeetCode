function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let smallestNumber = 1;
    const sortedArray = A.sort();
    console.log(sortedArray);
    if(A[0] < smallestNumber){
        return smallestNumber;
    }
    else{
        const highestNumber = sortedArray[sortedArray.length -1];
        for (let index = 1; index <= highestNumber+1; index++) {
            if(!A.includes(index)){
                smallestNumber = index;
                break;
            }
        }
    }
    return smallestNumber;
}

const params =  [1,2,3] ;
// var maxSum = -1;
//      for(let i = 0; i< A.length-1; i++) {

//         let firstNumber = A[i] ;
//         var sumFirstDigit = 0;
//         // let digits = String(firstNumber).flatMap { Int(String($0))}


//         for (digit in digits) {
//             sumFirstDigit = sumFirstDigit + digit;
//         }

//             for(let j = 0; j < A.length; j++) {
//             let secondNumber = A[j] ;
//             var sumSecondDigit = 0
//             let secondNumber_digits = String(secondNumber).flatMap { Int(String($0))}
//             for (digit in secondNumber_digits) {
//                 sumSecondDigit = sumSecondDigit + digit;
//             }
            
            
//             if(sumFirstDigit == sumSecondDigit) {
//                 if(maxSum < (firstNumber + secondNumber)) {
//                     maxSum = firstNumber + secondNumber
//                 }
//             }
//         }
//     }
    
//     return maxSum;
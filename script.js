// function isPalindrome(num) {
//     const str = num.toString();
//     const reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }

// console.log(isPalindrome(1231)); 
// console.log(isPalindrome(12521)); 
// console.log(isPalindrome(3)); 

// //2

// function nextNumber(...nums) {
//     return nums.reduce((acc, cur) => acc + cur, 0);
// }

// console.log(nextNumber(1, 3)); 
// console.log(nextNumber(10, 20, 30, 40)); 


// //3
// function sumNumbers(obj) {
//     let sum = 0;
//     for (const key in obj) {
//         if (typeof obj[key] === 'number') {
//             sum += obj[key];
//         }
//     }
//     return sum;
// }

// console.log(sumNumbers({a: 5, b: 6})); 
// console.log(sumNumbers({a: 5, b: "6", c: true}));



// //4
// function removeDuplicates(num) {
//     const str = num.toString();
//     let result = '';
//     const seen = new Set();

//     for (const char of str) {
//         if (!seen.has(char)) {
//             seen.add(char);
//             result += char;
//         }
//     }

//     return parseInt(result);
// }

// console.log(removeDuplicates(1231)); 
// console.log(removeDuplicates(112233344444)); 

// //5

// function removeTrailingQuestionMarks(str) {
//     return str.replace(/\?+$/, '');
// }

// console.log(removeTrailingQuestionMarks("salom??")); 
// console.log(removeTrailingQuestionMarks("sa?lom?")); 


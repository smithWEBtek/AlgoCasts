// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// 1)
// function palindrome(str) {
//   if(str.split('').reduce((accumulator, currentValue) => currentValue + accumulator) === str){
//     return true
//   } else {
//     return false
//   }
// } 

// 2)
// function palindrome(str) {
//   return str.split('').reduce((accumulator, currentValue) => currentValue + accumulator) === str ? true : false;
// } 

// 3)
// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1]
//   })
// }

// 4)
// function palindrome(str) {
  // return str.split('').reverse().join('') === str
// }

// 5)
// const palindrome = (str) => str.split('').reverse().join('') === str;

// 6)
const palindrome = (str) => str.split('').reverse().join('') === str

module.exports = palindrome;
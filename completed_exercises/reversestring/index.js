// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 1)
// function reverse(str){
//   let strArr = str.split('')
//   let result = []
//   for(let i = strArr.length; i >= 0; i--){
//     result.push(strArr[i])
//   }
//   return result.join('')
// }

// 2)
// function reverse(str) {
//   return str.split('').reverse().join('')
// }

// 3)
// function reverse(str) {
//   const arr = str.split('')
//   const result =[]
//   arr.map((letter, index) => {
//     result.push(arr[(arr.length - 1) - index])
//   })
//   return result.join('');
// }

// 4)
// function reverse(str) {
//   const arr = str.split('')
//   const result =[]
//   for(letter of arr){
//     result.unshift(letter)
//   }
//   return result.join('');
// }

// 5)
// function reverse(str) {
//   let result = ''
//   for(let letter of str){
//     result = letter + result
//   }
//   return result
// }

// 6) with reducer
// const reducer = (reversed, currentValue) => currentValue + reversed;

// function reverse(str){
//   return str.split('').reduce(reducer)
// }

// 7)
// function reverse(str) {
//   return str.split('').reduce((result, letter)=>{
//     return letter + result
//   }, '')
// }

// 8)
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '')
}

reverse('asdf')

module.exports = reverse;

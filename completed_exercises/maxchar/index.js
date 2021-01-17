// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// 1)
// function maxChar(str){
//   let result = {}
//   let highestCountLetter = ''

//   str.split('').forEach(letter => {
//     highestCountLetter.length > 0 ? highestCountLetter : highestCountLetter = letter;
//     if(result[letter]) {
//       result[letter] += 1
//     } else {
//       result[letter] = 1
//     }

//     result[highestCountLetter] < result[letter] ? highestCountLetter = letter : null; 
//   })
//   console.log('result: ', result)
//   console.log('highestCountLetter: ', highestCountLetter)
//   return highestCountLetter
// }

// 2) comment in the last test for checking case
// function maxChar(str){
//   let result = {}
//   let highestCountLetter = ''

//   str.split('').forEach(letter => {
//     highestCountLetter.length > 0 ? highestCountLetter : highestCountLetter = letter;
//     if(result[letter.toLowerCase()]) {
//       result[letter.toLowerCase()] += 1
//     } else {
//       result[letter.toLowerCase()] = 1
//     }

//     result[highestCountLetter] < result[letter] ? highestCountLetter = letter : null; 
//   })
//   console.log('result: ', result)
//   console.log('highestCountLetter: ', highestCountLetter)
//   return highestCountLetter
// }

// 3) comment in the `duplicate test` for checking case
// function maxChar(str){
//   let result = {}
//   let highestCountLetter = ''
//   let resultKeys = []

//   str.split('').forEach(letter => {
//     highestCountLetter.length > 0 ? highestCountLetter : highestCountLetter = letter;
//     if(result[letter.toLowerCase()]) {
//       result[letter.toLowerCase()] += 1
//     } else {
//       result[letter.toLowerCase()] = 1
//     }

//     result[highestCountLetter] < result[letter] ? highestCountLetter = letter : null;
//     resultKeys = Object.keys(result).sort((a,b) => (a < b ? -1 : 1))
//   })
//   // console.log('result: ', result)
//   // console.log('resultKeys: ', resultKeys)
//   // console.log('highestCountLetter: ', highestCountLetter)
//   return highestCountLetter
// }

// 4)
function maxChar(str) {
  let result = {}
  let highestCountLetter = ''
  let resultKeys = []

  for (letter of str.split('')) {
    highestCountLetter.length > 0 ? highestCountLetter : highestCountLetter = letter;
    if (result[letter.toLowerCase()]) {
      result[letter.toLowerCase()] += 1
    } else {
      result[letter.toLowerCase()] = 1
    }

    result[highestCountLetter] < result[letter] ? highestCountLetter = letter : null;
    resultKeys = Object.keys(result).sort((a, b) => (a < b ? -1 : 1))
  }
  return highestCountLetter
}


module.exports = maxChar;
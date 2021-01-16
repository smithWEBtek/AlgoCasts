// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// 1)
// function reverseInt(n){
//   if(n < 0){
//     return parseInt('-' + `${n.toString().split('').reverse('').join('')}`)
//   } else {
//   return parseInt(n.toString().split('').reverse('').join(''))
//   }
// }

// 2)
// function reverseInt(n){
//   if(Math.sign(n) === -1){
//     // return parseInt('-' + `${n.toString().split('').reverse().join('')}`)
//     return parseInt(n.toString().split('').reverse().join('')) * -1
//   } else {
//     return parseInt(n.toString().split('').reverse().join(''))
//   }
// }

// 3)
// function reverseInt(n){
//   let result = parseInt(n.toString().split('').reverse().join(''))
//   return Math.sign(n) === -1 ? result * -1 : result
// }

// 4)
// function reverseInt(n) {
//   let result = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('');

//   return parseInt(result) * Math.sign(n)
// }

// 5)
function reverseInt(n){
  let result = parseInt(
    n.toString()
    .split('')
    .reverse()
    .join('')
    )

    return result * Math.sign(n)
}

module.exports = reverseInt;

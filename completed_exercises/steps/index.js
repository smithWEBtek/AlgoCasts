// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// 1) attempt
// function steps(n){
//   let result = ''

//   for( let i = 0; result.length < n; i++){
//       result += hashes(i)
//       // result += spaces(n - i) + '\n'
//     }

//   console.log(result)
// }

// function hashes(n){
//   let result = ''
//   for(let i = 0; i <= n; i++){
//     let hashesAmt = hashes(n)
//     let spacesAmt = spaces(n)
//     result += hashesAmt
//     result += spaceesAmt
//   }
//   return result
// }

// function spaces(n){
//   let result = ''
//   for(let i = 0; i <= n; i++){
//     result += ' '
//   }
//   return result
// }

// 2)
function steps(n) {
  for(let row = 0; row < n; row++){
    let stair = ''
    
    for(let column = 0; column < n; column++){
      if(column <= row){
        stair += '#'
      } else {
        stair += ' '
      }
    } 
    
    console.log(stair)
  }
}


module.exports = steps;
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// 1) fails
// function anagrams(a, b){
//   const result = {}
// create a function loadDictionary(v) that fills the dictionary with counts
// run the loadDictionary function with a as variable
// run the loadDictionary function with b as variable
// if loadDictionary(a) === loadDictionary(b), return true
// else return false

//   const loadDictionary = (v) => {
//     v.replace(/[^\w]/g, "").toLowerCase().split('').forEach(letter => {
//       if(result[letter]){
//         result[letter] += 1;
//       } else {
//         result[letter] = 1;
//       }
//     })
//   }
//     const sortedResult = Object.entries(result)
//     .sort((a,b) => a < b ? 1 : -1);
//     // .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

//     console.log('sortedResult: ', sortedResult)
//     return sortedResult
//   console.log('******************************************************')
//   console.log('a: ', a)
//   console.log('b: ', b)
//   console.log('loadDictionary(a): ', loadDictionary(a))
//   console.log('loadDictionary(b): ', loadDictionary(b))

//   return loadDictionary(a) === loadDictionary(b);
// }

// 2)
// function anagrams(stringA, stringB) {
//   const charMapA = buildCharMap(stringA)
//   const charMapB = buildCharMap(stringB)

//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }

//   for (let char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {}

//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     // charMap[char] ? charMap[char] ++ : charMap[char] = 1;
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap
// }

// let str1 = 'asdfasdfasdffff'
// let str2 = 'asdfasdfasdfddd'
// anagrams(str1, str2)


//3
// function anagrams(strA, strB){
//   const sortedA = clean(strA)
//   const sortedB = clean(strB)

//   console.log('sortedA: ', sortedA)
//   console.log('sortedB: ', sortedB)

//   return sortedA === sortedB;
// }

// function clean(str){
//   return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
// }

// 4)
function anagrams(strA, strB){
  return cleanAndSortString(strA) === cleanAndSortString(strB)
}

function cleanAndSortString(str){
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}


module.exports = anagrams;

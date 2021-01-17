// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// iterate over arr
// create an array of n size using the first n available elements
// push that sub array into the result array
// if the available elements are less than n, push them into result as an array
// return the result array

function chunk(arr, size) {
  const result = []
  for (let i = 0; i <= arr.length - 1; i += size) {
    // result.push(Array.from(arr.slice(i, i + size)))
    result.push(arr.slice(i, i + size))
  }
  return result
}

module.exports = chunk;
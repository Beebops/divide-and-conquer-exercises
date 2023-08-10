/** Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.
 * 
countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0
 */

function countZeroes(arr) {
  if (arr[0] === 0) {
    return arr.length
  }

  let leftIdx = 0
  let rightIdx = arr.length - 1

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
    let middleVal = arr[middleIdx]

    if (middleVal === 1) {
      leftIdx = middleIdx + 1
    } else if (middleVal === 0) {
      // if middleIdx is first element or the element before it is a 1
      // it means we found the start of the zeroes
      // to calculate the number of zeroes subtract middleIdx from array's length
      if (middleIdx === 0 || arr[middleIdx - 1] === 1) {
        return arr.length - middleIdx
      } else {
        rightIdx = middleIdx - 1
      }
    }
  }

  return 0
}

module.exports = countZeroes

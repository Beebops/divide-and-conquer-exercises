/** findRotatedIndex
Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

 */

function findPivot(arr) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    const middle = Math.floor((left + right) / 2)
    // Check if the element at middle is greater than the element at right
    if (arr[middle] > arr[right]) {
      left = middle + 1
    } else {
      right = middle
    }
  }
  // When the loop ends, left will be the index of the pivot
  return left
}

function findRotatedIndex(arr, target) {
  let left = 0
  let right = arr.length - 1
  const pivotIndex = findPivot(arr)

  // if search target is greater than or equal to the first element in the array search in left array
  // if target is less than first element search in right array
  if (target >= arr[pivotIndex] && target <= arr[right]) {
    left = pivotIndex
  } else {
    right = pivotIndex
  }

  while (left <= right) {
    const middleIdx = Math.floor((left + right) / 2)
    const middleVal = arr[middleIdx]

    if (middleVal === target) {
      return middleIdx
    } else if (middleVal < target) {
      left = middleIdx + 1
    } else {
      right = middleIdx - 1
    }
  }
  return -1
}

console.log(findRotatedIndex([3, 4, 1, 2], 4)) // 1

module.exports = findRotatedIndex

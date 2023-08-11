/** findFloor
Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

Examples:

findFloor([1,2,8,10,10,12,19], 9) // 8 
findFloor([1,2,8,10,10,12,19], 20) // 19
findFloor([1,2,8,10,10,12,19], 0) // -1

*/

function findFloor(arr, num) {
  let left = 0
  let right = arr.length - 1
  let result = -1

  if (num < arr[0]) {
    return -1
  }

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    let value = arr[middle]

    if (num === value) {
      // we found the floor!
      return value
    } else if (num > value) {
      // update result and search right half of array
      result = value
      left = middle + 1
    } else {
      // num is smaller, so search left half of array
      right = middle - 1
    }
  }
  return result
}

//console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 5))

module.exports = findFloor

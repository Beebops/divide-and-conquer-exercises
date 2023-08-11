/** Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1
 */

function findFirstOccurrence(arr, target) {
  let left = 0
  let right = arr.length - 1
  let result = -1

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    let value = arr[middle]

    if (value === target) {
      // found the target, but need to still find first occurence
      result = middle // update the result
      right = middle - 1 // search left half of array
    } else if (value > target) {
      right = middle - 1 // target is in left half of array
    } else {
      left = middle + 1 // target is in right half of array
    }
  }
  return result
}

function findLastOccurrence(arr, target) {
  let left = 0
  let right = arr.length - 1
  let result = -1

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    let value = arr[middle]

    if (value === target) {
      result = middle
      left = middle + 1
    } else if (value > target) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
  return result
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)) // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)) // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)) // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)) // -1

function sortedFrequency(arr, target) {
  let firstOccurrence = findFirstOccurrence(arr, target)
  let lastOccurrence = findLastOccurrence(arr, target)

  if (firstOccurrence === -1 || lastOccurrence === -1) {
    return -1
  } else {
    return lastOccurrence - firstOccurrence + 1
  }
}

module.exports = sortedFrequency

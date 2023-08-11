/** findRotationCount
Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0



 */

function findRotationCount(arr) {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    if (arr[low] <= arr[high]) {
      // array is not rotated
      return low
    }

    let mid = Math.floor((low + high) / 2)
    let midVal = arr[mid]
    let beforeMidVal = arr[mid - 1]
    let afterMidVal = arr[mid + 1]

    if (midVal < beforeMidVal && midVal < afterMidVal) {
      // we found the rotation point!
      return mid
    } else if (arr[low] <= midVal) {
      // left half of the current range is sorted, and the rotation point (smallest element) must be in the right half
      low = mid + 1
    } else if (midVal <= arr[high]) {
      // right half of the current range is sorted, and the rotation point must be in the left half
      high = mid - 1
    }
  }
  return 0
}

module.exports = findRotationCount

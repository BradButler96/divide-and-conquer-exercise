function findRotationCount(arr, low = 0, high = arr.length -1) {
    if (arr[arr.length -1] > arr[0]) return 0

    if (low < high) {
        let midIdx = Math.floor((high + low) / 2)

        if (arr[midIdx] < arr[midIdx - 1]) return midIdx
        else if (arr[midIdx] > arr[midIdx + 1]) return midIdx + 1
        else if (arr[midIdx] > arr[high]) return findRotationCount(arr, midIdx, high) 
        else if (arr[midIdx] < arr[low]) return findRotationCount(arr, low, midIdx) 
    }
    return 0
}

module.exports = findRotationCount
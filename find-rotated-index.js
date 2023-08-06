const rotationCount = (arr, low = 0, high = arr.length - 1) => {
    if (arr[arr.length -1] > arr[0]) return 0

    if (low < high) {
        let midIdx = Math.floor((high + low) / 2)

        if (arr[midIdx] < arr[midIdx - 1]) return midIdx
        else if (arr[midIdx] > arr[midIdx + 1]) return midIdx + 1
        else if (arr[midIdx] > arr[high]) return rotationCount(arr, midIdx, high) 
        else if (arr[midIdx] < arr[low]) return rotationCount(arr, low, midIdx) 
    }
    return 0
}

const rotateArray = (arr, count) => {
    if (count > 0) {
        const secondPart = arr.splice(0, count)
        return arr.concat(secondPart)
    } else return 0
}


function findRotatedIndex(arr, num, low = 0, high = arr.length-1) {
    const count = rotationCount(arr)
    const rotatedArray = rotateArray(arr, count)

    while (high >= low) {
        let midIdx = Math.floor((low + high) / 2);

        if (rotatedArray[midIdx] < num) {
          low = midIdx + 1;
        } else if (rotatedArray[midIdx] > num) {
          high = midIdx - 1;
        } else {
          return midIdx > count ? midIdx - count : midIdx + count
        }
    }

    return -1;


}

module.exports = findRotatedIndex
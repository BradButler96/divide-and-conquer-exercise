function findFloor(arr, num, low = 0, high = arr.length - 1) {
        if (num >= arr[high]) return arr[high];
        if (low <= high){
            let midIdx = Math.floor((high + low) / 2);

            if (num > arr[midIdx] && num < arr[midIdx + 1]) return arr[midIdx]
            else if (num > arr[midIdx] && num > arr[midIdx + 1]) return findFloor(arr, num, midIdx, high)
            else if (num < arr[midIdx] && num < arr[midIdx - 1]) return findFloor(arr, num, low, midIdx)  
        }
        return -1
}

module.exports = findFloor
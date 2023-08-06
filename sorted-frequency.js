function sortedFrequency(arr, num) {
    if (first(arr, num) === -1) return -1
    return last(arr, num) - first(arr, num) + 1

}

const first = (arr, num, low = 0, high = arr.length-1) => {
    if (high >= low) {
        let midIdx = low + Math.floor((high - low) / 2);

        if ((midIdx == 0 || num > arr[midIdx - 1]) && arr[midIdx] == num) return midIdx;
        else if (num > arr[midIdx]) return first(arr, num, (midIdx + 1), high);
        else return first(arr, num, low, (midIdx - 1));
    }
    return -1;
}

const last = (arr, num, low = 0, high = arr.length-1) => {
    if (high >= low) {
        let midIdx = low + Math.floor((high - low) / 2);
        
        if ((midIdx == arr.length - 1 || num < arr[midIdx + 1]) && arr[midIdx] == num) return midIdx;
        else if (num < arr[midIdx]) return last(arr, num, low, (midIdx - 1));
        else return last(arr, num, (midIdx + 1), high);
    }
    return -1;
}


module.exports = sortedFrequency

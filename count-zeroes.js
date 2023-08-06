// const first = (arr, low = 0, high = arr.length-1) => {
//     if (high >= low) {
//         let mid = low + Math.floor((high - low) / 2);

//         if ((mid == 0 || 0 > arr[mid - 1]) && arr[mid] == 0) return mid;
//         else if (0 > arr[mid]) return first(arr, (mid + 1), high);
//         else return first(arr, low, (mid - 1));
//     }
//     return -1;
// }


function countZeroes(arr) {
    let low = 0;
    let high = arr.length - 1;

    if (arr[high] === 1) return 0
    if (arr[low] === 0) return arr.length

    while (low <= high) {
        let midIdx = Math.floor((low + high) / 2);
        let midVal = arr[midIdx];
        if (midVal === 0 && arr[midIdx - 1] === 1) {
            return arr.splice(midIdx, arr.length - 1).length
        } else if (midVal === 1) {
            low = midIdx + 1
        } else {
            high = midIdx
        }
    }
}


module.exports = countZeroes
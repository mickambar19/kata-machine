export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    while (low < high) {
        const middle = Math.floor((low + high) / 2);
        if (haystack[middle] === needle) {
            return true;
        }
        if (needle > haystack[middle]) {
            low = middle + 1;
        } else {
            high = middle;
        }
    }
    return false;
}

// function binarySearch(arr: number[], needle: number): boolean {
//     if (arr.length === 0) {
//         return false;
//     }
//     const middle = Math.floor(arr.length / 2);
//     if (arr[middle] === needle) {
//         return true;
//     }

//     if (needle > arr[middle]) {
//         return binarySearch(arr.slice(middle + 1), needle);
//     }
//     return binarySearch(arr.slice(0, middle - 1), needle);
// }

// export default function bs_list(haystack: number[], needle: number): boolean {
//     return binarySearch([...haystack], needle);
// }

// 4. Explain the concept of merge sort and implement it.

// Merge sort is a divide-and-conquer algorithm that divides the input array into two halves, recursively sorts each half, 
// and then merges the sorted halves to produce a single sorted array. The key idea is to repeatedly divide the array into halves 
// until each sub-array contains only one element (which is inherently sorted), and then merge the sorted sub-arrays back together.


function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array with 0 or 1 element is already sorted
    }

    // Divide the array into two halves
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    // Recursively sort each half
    const sortedLeftHalf = mergeSort(leftHalf);
    const sortedRightHalf = mergeSort(rightHalf);

    // Merge the sorted halves
    return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(left, right) {
    let mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and merge them into a single sorted array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            mergedArr.push(left[leftIndex]);
            leftIndex++;
        } else {
            mergedArr.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate any remaining elements from left and right arrays
    return mergedArr.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Example usage:
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", arr);
console.log("Sorted array:", mergeSort(arr));

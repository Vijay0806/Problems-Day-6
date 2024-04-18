// 5. Explain the concept of quick sort and implement it.

// Quick sort is a divide-and-conquer algorithm that works by selecting a "pivot" element from the array and partitioning the other elements 
// into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then recursively sorted. 
// The key steps of the quick sort algorithm are:

// Choose a Pivot: Select a pivot element from the array. Various strategies for selecting the pivot exist; commonly used methods include 
// selecting the first or last element as the pivot, or selecting a random element.

// Partitioning: Reorder the array so that all elements less than the pivot come before it, and all elements greater than the pivot come after it. 
// After partitioning, the pivot is in its final sorted position.

// Recursively Sort Sub-arrays: Recursively apply the quick sort algorithm to the sub-array of elements less than the pivot and the 
// sub-array of elements greater than the pivot.

// Combine: No combine step is necessary in quick sort, as the partitioning step ensures that the array is fully sorted after 
// the recursive calls.

//  quick sort algorithm:

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array with 0 or 1 element is already sorted
    }

    // Select a pivot (in this implementation, we choose the last element)
    const pivot = arr[arr.length - 1];
    const leftArr = [];
    const rightArr = [];

    // Partition the array into two sub-arrays based on the pivot
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    // Recursively sort the sub-arrays and concatenate them with the pivot
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// Example usage:
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", arr);
console.log("Quik-Sorted array:", quickSort(arr));

// This implementation recursively divides the input array into two sub-arrays based on a chosen pivot element (in this case, the last element). 
// It then sorts each sub-array recursively and concatenates them with the pivot in between to produce the final sorted array.
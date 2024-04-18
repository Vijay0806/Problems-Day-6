// Session 6: Sorting Algorithms

// - Topics: Bubble sort, selection sort, insertion sort

// Problems:

// 1. Implement the bubble sort algorithm.

// Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order, 
// bubbling the largest elements to the top. This process is repeated until the entire list is sorted, making it one of the simplest sorting 
// algorithms. However, its efficiency decreases with larger datasets due to its time complexity of O(n^2).

function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Swap adjacent elements if they are in the wrong order
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", arr);
console.log("Sorted array:", bubbleSort(arr));

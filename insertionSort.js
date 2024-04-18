// 3. Implement the insertion sort algorithm.

// Insertion sort is a simple sorting algorithm that builds the final sorted array one element at a time. 
// It iterates over the input list and, at each iteration, removes one element from the input data and finds its correct position 
// within the sorted part of the array. It continues this process until no more unsorted elements remain.


function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = key;
    }

    return arr;
}

// Example usage:
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", arr);
console.log("Sorted array:", insertionSort(arr));

// 2. Implement the selection sort algorithm.

// Selection sort is a sorting algorithm that divides the input list into two parts: a sorted sublist and an unsorted sublist. 
// The algorithm repeatedly finds the minimum element from the unsorted sublist and moves it to the beginning of the sorted sublist. 
// This process continues until the entire list is sorted. Selection sort has a time complexity of O(n^2), making it inefficient for large datasets,
// but it is simple to understand and implement.

function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        // Find the index of the minimum element in the unsorted portion of the array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the minimum element with the first element of the unsorted portion
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Example usage:
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", arr);
console.log("Sorted array:", selectionSort(arr));

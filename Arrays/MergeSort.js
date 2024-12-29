function mergeSort(arr) {
    // Base case: Arrays with 1 or no elements are already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Divide: Find the middle of the array
    const mid = Math.floor(arr.length / 2);
  
    // Recursively sort the left and right halves
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    // Merge the sorted halves
    return merge(left, right);
  }
  
  function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
  
    // Merge the arrays by comparing their elements
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    // Add any remaining elements from the left array
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
  
    // Add any remaining elements from the right array
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }
  
    return result;
  }
  
  // Example usage
  const array = [38, 27, 43, 3, 9, 82, 10];
  console.log("Original Array:", array);
  const sortedArray = mergeSort(array);
  console.log("Sorted Array:", sortedArray);
  
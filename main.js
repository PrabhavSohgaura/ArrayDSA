//1.Find the second largest number from the given array

// brute force approach using inbuilt js method
function secondLargest(arr) {
  //first will find the unqiue arr by removing duplicate and use Array.from for coverting obj to arr
  const uniqueArr = Array.from(new Set(arr));

  uniqueArr.sort((a, b) => {
    return b - a;
  });

  if (uniqueArr.length >= 2) {
    return uniqueArr[1];
  } else {
    return -1;
  }
}

console.log(secondLargest([1, 1, 2, 5, 15, 34, 35, 35]));

//optimized approach

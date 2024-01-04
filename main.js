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
function secondLargestOptimized(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(secondLargestOptimized([1, 1, 2, 5, 34, 35, 49]));

//Q.2 find the number by using the kth rotation

//explain - if K is 3 then we have to rotate the array 3 times
// [1,2,3,4] => [4,1,2,3] => [3,4,1,2] => [2,3,4,1]

function rotateNumber(nums, k) {
  let size = nums.length;
  if (k > size) {
    k = k % size;
  }
  // in splice method first argument is the position of the arr and second one is no. of element
  const rotatedArray = nums.splice(size - k, k); //5,6,7
  nums.unshift(...rotatedArray);

  return nums;
}
console.log(rotateNumber([1, 2, 3, 4, 5, 6, 7], 3));

//follow two pointer approach
//in this approach we follow three steps
// - we move last three nums to front of the arr
//- then we sort the first three digits which added just now
// - then we sort remaining digits of the arr from the given arr and kth element
function rotateNumberOptimized(nums, k) {
  let size = nums.length;
  if (k > size) {
    k = k % size;
  }
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;
}
function reverse(nums, left, right) {
  while (left < right) {
    const temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
}

console.log(rotateNumberOptimized([1, 2, 3, 4, 5, 6, 7], 3));

//Q.3 -- Remove duplicates from sorted array
//Given an integer arrats nums sorted in non-decreasing order, remove
//the duplicate in-place such that each unique elements appears
//only once.The relative order of the should be kept
//the same.Then returns the number of unique elements in nums

function removeDuplicates(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums.length;
}

console.log(removeDuplicates([0, 0, 0, 1, 1, 2, 3, 4, 4, 4, 5]));

// without inbuilt js method - following two pointer approach
function removeDuplicatesOptimized(nums) {
  if (nums.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

console.log(removeDuplicatesOptimized([0, 0, 0, 1, 1, 2, 3, 4, 4, 4, 5]));

//time complexity = o(n)
//space complexity = o(1)

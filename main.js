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

//optimized approached
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

//Q.4 -- Given an integer array nums, find the subarray with the largest sum, and return its sum

//brute force approach
function maxSubArray(nums) {
  let maxsum = nums[0];

  let startIndex = 0;
  let endIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum = currentSum + nums[j];
      if (currentSum > maxsum) {
        maxsum = currentSum;
        startIndex = i;
        endIndex = j;
      }
    }
  }

  return {
    sum: maxsum,
    subArray: nums.slice(startIndex, endIndex + 1),
  };
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//optimized approach
function maxSubArrayOptimized(nums) {
  let sum = 0;
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  return maxSum;
}

console.log(maxSubArrayOptimized([5, 2, 8, -1]));

//Q.5 -- Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Input = [2,2,1] => output => [1] = 1 is appearing once only

function singleNumber(nums) {
  //assigning first element as a result initially
  let result = nums[0];

  //looping from second element
  for (let i = 1; i < nums.length; i++) {
    //bitwise operator compare the values in 32 bit and remove the same value
    result = result ^ nums[i];
  }

  return result;
}

console.log(singleNumber([2, 2, 3, 3, 1]));

//Q.6 - Find the duplicate elements in an array
// brute force approach
function duplicateElements(inputarr) {
  let duplicate = [];
  for (num in inputarr) {
    console.log("num", num);
    for (num2 in inputarr) {
      console.log("num2", num2);
      if (num === num2) {
        continue;
      } else {
        if (inputarr[num] === inputarr[num2]) {
          duplicate.push(inputarr[num]);
        }
      }
    }
  }
  return [...new Set(duplicate)];
}
console.log(duplicateElements([4, 4, 5, 8, 8, 9]));
//4,8

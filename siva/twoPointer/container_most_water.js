let maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let result = 0;

  while (left < right) {
    let distance = right - left;
    let minimum = Math.min(height[left], height[right]);
    let totalVolume = distance * minimum;
    if (result < totalVolume) {
      result = totalVolume;
    } else if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return result;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

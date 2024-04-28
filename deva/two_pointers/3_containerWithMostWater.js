// https://leetcode.com/problems/container-with-most-water/

var maxArea = function (height) {
    let left = 0
    let right = height.length - 1
    let area = 0;
    while (left < right) {
        // console.log("--------------")
        // console.log("left", left)
        // console.log("right", right)
        // console.log("values of left right", height[left], height[right])
        // console.log("right - left", right - left)
        // console.log("max of left right", Math.max(height[left], height[right]))
        // console.log("area", (right - left) * Math.min(height[left], height[right]))
        area = Math.max((right - left) * Math.min(height[left], height[right]), area)
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return area
};

// maxArea([1,8,6,2,5,4,8,3,7])
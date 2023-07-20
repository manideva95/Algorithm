//https://practice.geeksforgeeks.org/problems/binary-search-1587115620/1/?page=1&difficulty[]=-1&category[]=Arrays&sortBy=submissions

//https://www.geeksforgeeks.org/binary-search/

class Solution {
    binarysearch(arr, n, k) {
        // code here

        let leftIndex = 0;
        let rightIndex = arr.length - 1;

        while (leftIndex <= rightIndex) {
            const middleIndex = Math.floor((leftIndex + rightIndex) / 2)
            // console.log(middleIndex)
            if (k == arr[middleIndex]) {
                // return console.log('middle', arr[middleIndex])
                return middleIndex
            }
            if (k < arr[middleIndex]) {
                rightIndex = middleIndex - 1;
            } else {
                leftIndex = middleIndex + 1;
            }
        }
        return -1;
    }
}

new Solution().binarysearch([1, 2, 3, 4, 5, 6], 5, 4)
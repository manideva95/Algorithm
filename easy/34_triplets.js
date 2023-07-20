//https://practice.geeksforgeeks.org/problems/find-triplets-with-zero-sum/1?page=1&difficulty[]=-1&category[]=Arrays&sortBy=submissions

class Solution {
    //Function to find triplets with zero sum.
    findTriplets(arr, n) {
        //your code here
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                for (let k = j + 1; k < arr.length; k++) {
                    console.log(arr[i], arr[j], arr[k])
                    if ((arr[i] + arr[j] + arr[k]) === 0) {
                        return true
                    }
                }
            }
        }
        return false
    }
}


console.log(new Solution().findTriplets([4, -16, 43, 4, 7, -36, 18], 5));
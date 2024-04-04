//https://practice.geeksforgeeks.org/problems/print-the-left-element2009/1/?page=1&difficulty[]=-2&category[]=Arrays&sortBy=submissions

class Solution {
    leftElement(arr, n) {
        //code here
        // for (let i = 0; i < arr.length; i++) {
        //     for (let j = 0; j < arr.length; j++) {
        //         if (arr[i] > arr[j]) {
        //             let temp = arr[i]
        //             arr[i] = arr[j]
        //             arr[j] = temp
        //         }
        //     }
        // }
        // // console.log(arr)
        // if (n % 2 === 0) {
        //     return arr[n / 2]
        // } else {
        //     return arr[Math.ceil(n / 2) - 1]
        // }

        const a = new Int32Array(arr).sort();
        return n % 2 === 0 ? a[((n / 2) - 1)] : a[((n / 2) - 0.5)];
    }
}


console.log(new Solution().leftElement([7, 8, 3, 4, 9, 5, 2], 7))
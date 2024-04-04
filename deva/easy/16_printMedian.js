// https://practice.geeksforgeeks.org/problems/find-the-median0527/1/?page=1&difficulty[]=-2&sortBy=submissions

class Solution {

    find_median(arr) {
        //sort start
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    let temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
                }
            }
        }
        //sort end
        console.log("sorted", arr)
        if (arr.length > 1) {
            if (arr.length % 2 == 0) {
                let a = arr[(arr.length / 2) - 1]
                let b = arr[arr.length / 2]
                return Math.floor((a + b) / 2)
            } else {
                return arr[Math.floor(arr.length / 2)]
            }
        }

    }
}

let result = new Solution()
result.find_median([56, 67, 30, 79, 16])

// https://practice.geeksforgeeks.org/problems/find-the-median0527/1?page=1&difficulty[]=-2&sortBy=submissions

class Solution {

    find_median(arr) {
        const array = [];
        let result;
        for (let i = 0; i < arr.length; i++) {
            array[i] = arr[i]
        }
        for (let i = 0; i < (array.length-1); i++) {
        for (let j = 0; j < (array.length-1); j++) {
            if (array[j] < array[j + 1]) {
                const swap1=array[j];
                const swap2=array[j+1];
                array[j] = swap2;
                array[j + 1] = swap1;
            }
        }
        }
        const halfTheLength = (array.length) / 2;
        if (array.length % 2 === 1) {
            result = array[(Math.round(halfTheLength)) - 1]
        } else {
            const findFloat= (array[halfTheLength] + array[halfTheLength - 1]) / 2;
            result= findFloat %1 == 0 ? findFloat: Math.round(findFloat)-1
        }
        console.log(result);
        return result;
    }
}

new Solution().find_median([56, 67, 30, 79]);
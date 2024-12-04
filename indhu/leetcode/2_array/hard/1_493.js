// https://leetcode.com/problems/reverse-pairs/description/

/**
 * @param {number[]} nums
 * @return {number}
 */


var reversePairs = function (arr) {
    var count = 0;
    const countN = (arr, low, mid, high) => {
        let right = mid + 1
        for (let i = low; i <= mid; i++) {
            while (right <= high && arr[i] > 2 * arr[right])
                right++
            count += right - (mid + 1)
        }

    }
    const sort = (arr, s, m, e) => {
        let i = s;
        let j = m + 1;
        let temp = [];
        while (i <= m && j <= e) {
            if (arr[i] <= arr[j]) {
                temp.push(arr[i]);
                i++;
            } else {
                temp.push(arr[j]);
                j++;
            }
        }
        while (i <= m) {
            temp.push(arr[i]); i++
        }
        while (j <= e) {
            temp.push(arr[j]); j++;
        }
        for (let i = s; i <= e; i++) {
            arr[i] = temp[i - s]
        }
    }
    const mergeSort = (arr, s, e) => {
        if (s === e) return;
        let mid = Math.floor((s + e) / 2);
        mergeSort(arr, s, mid);
        mergeSort(arr, mid + 1, e);
        countN(arr, s, mid, e)
        sort(arr, s, mid, e);

    }

    mergeSort(arr, 0, arr.length - 1);


    return count
};
// c = 1
//1,3,2,3, 1,-1,-3,-2

//1, 2, 3, 3  -1 , 1 ,-3,-2
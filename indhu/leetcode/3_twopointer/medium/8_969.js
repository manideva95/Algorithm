
// https://leetcode.com/problems/pancake-sorting/description/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
    const len = arr.length
    let result = [];
    for (let i = 0; i < len; i++) {
        let index = findLargeIndex(arr)
        if (index === arr.length) {
            arr.pop();
        } else {
            arr = reverse(arr, index)
            result.push(index);
            break;
        }
    }

    let isNeedSort = true;
    if (result.length === 0) {
        return []
    } else {
        while (arr.length) {
            if (isNeedSort) {
                arr = arr.reverse();
                result.push(arr.length);
                arr.splice(result[result.length - 1] - 1, 1);
            }

            let index = findLargeIndex(arr);
            if (index === arr.length) {
                isNeedSort = false
                arr.splice((index - 1), 1);
            } else {
                isNeedSort = true;
                arr = reverse(arr, index)
                result.push(index);
            }
        }
    }
    return result
};

const findLargeIndex = (arr) => {
    let largeIndex = 0, max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            largeIndex = i;
            max = arr[i]
        }
    }
    return largeIndex + 1
}

const reverse = (arr, index) => {
    let splice = arr.splice(index, arr.length);
    arr = arr.reverse();
    arr = arr.concat(splice);
    return arr
}
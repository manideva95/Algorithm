class Solution {
    leftElement(arr, n) {
        //{ let a;
        // let b;
        // let c;
        // let f = [];
        // a = arr.sort((a, b) => a - b);
        // console.log(a);
        // // if (n % 2 == 0) {
        // //     b = ((n / 2) - 1);
        // //     console.log(a[b]);
        // //     f.push(a[b]);
        // //     console.log(f);
        // //     return a[b];
        // // }
        // // else {
        // //     c = ((n / 2) - 0.5);
        // //     f = f.push(a[c]);

        // //     return a[c];
        // // }
        // } - also correct but takes time 


        const a = new Int32Array(arr).sort();
        return n % 2 === 0 ? a[((n / 2) - 1)] : a[((n / 2) - 0.5)];

    }
}

// 
new Solution().leftElement([8, 1, 2, 9, 4, 3, 7, 5], 8);
// new Solution().leftElement([7, 8, 3, 4, 2, 9, 5, 4, 6, 7, 8, 10], 12);
// new Solution().leftElement([1, 1, 2, 2, 3, 4, 5, 5, 6, 7], 10);

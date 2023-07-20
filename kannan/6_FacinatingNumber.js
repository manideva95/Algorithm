class Solution {
    fascinating(N) {
        let a = N * 2;
        let b = N * 3;
        let c;
        let f = 0;
        c = '' + N + a + b;
        let d = Array.from(c);
        let e = d.sort((a, b) => a - b);
        console.log(e);
        for (let j = 0; j < 9; j++) {
            if (e[j] == j + 1) {
                f = f + 1;
            }
        }
        // console.log(f);
        if (f == 9) {
            console.log("true");
            return true;
        } else {
            console.log("false");
            return false;
        }

    }
}
new Solution().fascinating(879);
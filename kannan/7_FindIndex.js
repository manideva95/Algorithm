class Number {
    findNumber(a, n, key) {
        let N = n - 1;
        let first = -1;
        let last = -1;
        for (let i = 0; i < n; i++) {
            if (first == -1) {
                if (a[i] == key) {
                    first = i;
                }
            }
            if (last == -1) {
                if (a[N] == key) {
                    last = N;

                }
            } N--;

        } console.log(first, last);
        return [first, last];

    }
}
new Number().findNumber([21, 19, 20, 11, 29, 10, 25, 24, 13, 18, 23, 29, 19, 17, 15], 15, 29);
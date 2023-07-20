class Solution {
    constructor() {
        this.ca = 0;
        this.cb = 0;
    } scores(a, b) {

        for (let i = 0; i < a.length; i++) {
            if (a[i] > b[i]) {
                this.ca = this.ca + 1;
            } if (a[i] < b[i]) {
                this.cb = this.cb + 1;
            }

        } console.log(this.ca + " " + this.cb);
    }
}
new Solution().scores([4, 2, 7], [5, 2, 8]);


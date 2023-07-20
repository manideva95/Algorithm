//https://practice.geeksforgeeks.org/problems/compete-the-skills5807/1/?page=2&difficulty[]=-2&category[]=Arrays&sortBy=submissions
class Solution {
    constructor() {
        this.ca = 0;
        this.cb = 0;
    }
    scores(a, b) {
        //store the scores at this.ca and this.cb
        //code here
        for (let i = 0; i < a.length; i++) {
            if (a[i] > b[i]) {
                this.ca = this.ca + 1
            } else if (a[i] < b[i]) {
                this.cb = this.cb + 1
            }
        }
        console.log(this.ca, this.cb)
    }
}

new Solution().scores([4, 2, 7], [5, 2, 8])
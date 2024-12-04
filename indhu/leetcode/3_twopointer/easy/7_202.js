class Solution {

    fn(n) {
        if (n === 1) {
            return true
        }
        if (n <= 0) {
            return false
        }
        let l = n;
        let j = [];
        while (l !== 0) {
            if (l <= 9) {
                l = l ** 2
                j.push(l)
            } else {
                const x = l.toString().split('');
                let sum = 0;
                for (let i = 0; i < x.length; i++) {
                    sum = sum + parseInt(x[i]) ** 2;
                }
                l = sum
                if (sum === 1) {
                    return true
                }
                if (j.includes(sum)) {
                    return false
                } else {
                    j.push(sum)
                }
            }
        }
        return false
    }

}

const data = new Solution().fn(34);
console.log(data);
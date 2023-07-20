// https://practice.geeksforgeeks.org/problems/count-type-of-characters3635/1?page=1&difficulty[]=-2&category[]=Strings&sortBy=submissions

class Solution {
    count(s) {
        let upper = s.replace(/[^A-Z]/g, '');
        let lower = s.replace(/[^a-z]/g, '');
        let number = s.replace(/[^0-9]/g, '');
        let special = s.replace(/[A-Za-z0-9]/g, '');
        console.log(upper);
        console.log(lower);
        console.log(number);
        console.log(special);
        let final = [];
        final[0] = upper.length;
        final[1] = lower.length;
        final[2] = number.length;
        final[3] = special.length;
        console.log(final);
        return final;

    }
}
new Solution().count("*GeEkS4GeEkS*");

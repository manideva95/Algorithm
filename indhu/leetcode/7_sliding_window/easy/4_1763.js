// https://leetcode.com/problems/longest-nice-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
    if (!s) return "";
    let set_s = new Set(s.split(''));
    for (let i = 0; i < s.length; i++) {
        if (!set_s.has(s[i].toUpperCase()) || !set_s.has(s[i].toLowerCase())) {
            console.log(s.slice(0, i), '1', s.slice(i + 1));
            let s1 = longestNiceSubstring(s.slice(0, i));
            let s2 = longestNiceSubstring(s.slice(i + 1));
            return s1.length >= s2.length ? s1 : s2;
        }
    }
    return s;
};


const result = longestNiceSubstring('Yyazaasfasdf')
console.log(result);

// Observation:
// output Time Complexity : O(n)


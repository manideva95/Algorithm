// https://leetcode.com/problems/subdomain-visit-count/

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    let domain = new Map();
    cpdomains.forEach(element => {
        const split = element.split((/[ .]/));
        let substring = ''
        for (let i = split.length - 1; i > 0; i--) {
            substring = substring ? split[i] + '.' + substring : split[i];
            const value = domain.get(substring)
            domain.set(substring, value ? value + parseInt(split[0]) : parseInt(split[0]))
        }
    });
    const result = [...domain.entries()].map(element => `${element[1]} ${element[0]}`)
    return result

};
const result = subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"])
console.log(result);

// Observation:
// output Time Complexity : O(n log n)
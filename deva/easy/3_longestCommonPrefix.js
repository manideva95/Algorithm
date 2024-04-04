// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".
// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
    if (strs[0] == "") {
        return
    }
    let smallestString = 200
    let a = 0;
    let result = ""
    for (let i = 0; i < strs.length; i++) {
        // a++;
        const element = strs[a];
        while (element[a] === strs[a + 1]?.[a]) {
            console.log("1", element[a] + " === " + strs[a + 1]?.[a])
            // console.log("2", strs[a + 1] + " === " + strs[strs.length - 1])
            // if (strs[a + 1] === strs[strs.length - 1]) {
            //     console.log("result", element[a])
            //     result = result + element[a]
            // }
            a++;
        }
    }
    return result
};

console.log("final", longestCommonPrefix(["flower", "flow", "flight"]))

//first index of array is empty stop the loop
//smallest word has the prefix length
//put new variable old and new result
// letter doesnt  match stop the loop
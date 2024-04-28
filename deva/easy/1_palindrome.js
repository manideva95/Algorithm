// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

var isPalindrome = function (x) {
    x = x.toString()
    let revString = ""                  //string storage place is lesser than array, so its O(1)
    for (let index = x.length - 1; index >= 0; index--) {
        revString += x[index]
    }
    return x == revString
};

console.log(isPalindrome(101))

// var isPalindrome = function (x) {
//     x = x.toString()
//     let revArr = []                      //array storage place is higher so it has n number of indexes so its o(n)
//     for (let index = x.length - 1; index >= 0; index--) {
//         revArr.push(x[index])
//     }
//     return x == revArr.join("")
// };


// var isPalindrome = function(x) {
//     return x.toString() == x.toString().split("").reverse().join("")
// };
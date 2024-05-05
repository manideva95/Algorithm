// https://leetcode.com/problems/decode-the-message/

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    let alphabets = "abcdefghijklmnopqrstuvwxyz"
    let trimmedKey = [...new Set([...key.replaceAll(" ", "")]).values()]
    let cipher = new Map()
    for (let i = 0; i < trimmedKey.length; i++) {
        if (cipher.has(trimmedKey[i])) {
            continue
        } else {
            cipher.set(trimmedKey[i], alphabets[i])
        }
    }
    console.log(cipher);
    let result = ""
    for (let i = 0; i < message.length; i++) {
        if (message[i] == " ") {
            result = result + " "
        } else {
            result = result + cipher.get(message[i])
        }
    }
    return result
};
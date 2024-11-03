// https://leetcode.com/problems/jewels-and-stones/description/

// Topics
// Hash Table
// String


class Solution {
    public int numJewelsInStones(String jewels, String stones) {
        boolean[] isJewel = new boolean[128]; // ASCII size

    for (char jewel : jewels.toCharArray()) {
        isJewel[jewel] = true;
    }

    int count = 0;
    for (char stone : stones.toCharArray()) {
        if (isJewel[stone]) {
            count++;
        }
    }
    return count;
    //     int count = 0; // approach I tried - 2ms- acceptance- 47.79
    // for (char stone : stones.toCharArray()) {
    //     if (jewels.indexOf(stone) != -1) {
    //         count++;
    //     }
    // }
    // return count;
    }
}
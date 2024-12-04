// https://leetcode.com/problems/count-the-number-of-consistent-strings/

class Solution {
    public int countConsistentStrings(String allowed, String[] words) {
         int count =0;
        for( String str : words)
        {
            boolean result = true;
            for(char ch : str.toCharArray()){
                if(allowed.indexOf(ch)==-1) {
                    result = false;
                    break;
                }
            }
            if(result){
                count++;
            }
        }
        return count;
    }
}

// another approach to use set, 
    // HashSet<Character> allowedSet = new HashSet<>();
    //         for (char c : allowed.toCharArray()) {
    //             allowedSet.add(c);
    //         }
            
    //         int count = 0;
        
    //         for (String word : words) {
    //             boolean isConsistent = true;
    //             for (char c : word.toCharArray()) {
    //                 if (!allowedSet.contains(c)) {
    //                     isConsistent = false;
    //                     break;
    //                 }
    //             }
    //             if (isConsistent) {
    //                 count++;
    //             }
    //         } 
    //         return count;

// Using Boolean array
        // Step 1: Create a boolean array for allowed characters
        // boolean[] allowedChars = new boolean[26];
        // for (char c : allowed.toCharArray()) {
        //     allowedChars[c - 'a'] = true;  // Mark the allowed character as true
        // }

        // int count = 0;

        // // Step 2: Iterate through each word
        // for (String word : words) {
        //     boolean isConsistent = true;

        //     // Step 3: Check if each character in the word is in allowedChars
        //     for (char c : word.toCharArray()) {
        //         if (!allowedChars[c - 'a']) {
        //             isConsistent = false;  // If any character is not allowed, break
        //             break;
        //         }
        //     }

        //     // Step 4: If the word is consistent, increment the count
        //     if (isConsistent) {
        //         count++;
        //     }
        //         return count;
// https://leetcode.com/problems/goal-parser-interpretation/description/

class Solution {
    public String interpret(String command) {
       return command.replace("()","o").replace("(al)","al");
    }
}

// other methods, use replaceAll with regex -- replaceAll("\\(\\)", "o").replaceAll("\\(al\\)", "al")
// use for loop, compare each char..
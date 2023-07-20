class Solution {
    oppositeFaceOfDice(N) {
        let answer;
        switch (N) {
            case 1:
                answer = 6;
                break;
            case 2:
                answer = 5;
                break;
            case 3:
                answer = 4;
                break;
            case 4:
                answer = 3;
                break;
            case 5:
                answer = 2;
                break;
            case 6:
                answer = 1;
                break;

            default:
                answer = 0;
                break;
        }
        console.log(answer);
        return answer;
    }
}
new Solution().oppositeFaceOfDice(7);
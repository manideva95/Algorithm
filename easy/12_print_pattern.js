// https://practice.geeksforgeeks.org/problems/print-the-pattern-set-1/1/?page=1&difficulty[]=-2&sortBy=submissions

class Solution {
    printPat(n) {
        let arr = []
        while (n) {
            arr.push(n)
            n--
        }
        let loopTime = arr.length

        let finalResult = []
        const pushNTimes = (ar, n) => {
            let tempArr = []
            ar.forEach(el => {
                let runOver = n
                while (runOver) {
                    tempArr.push(el)
                    runOver--
                }
            });
            finalResult.push(tempArr)
        }

        for (let i = 0; i < loopTime; i++) {
            pushNTimes(arr, loopTime - i)
        }

        let pattern = null;
        // console.log(finalResult)
        finalResult.forEach((el, ind) => {
            el.forEach((el2, ind2) => {
                pattern = pattern ? ((ind2 == 0) ? pattern + "" + el2 : pattern + " " + el2) : el2
            })
            pattern = pattern ? pattern + " $" : null
        })
        console.log(pattern)
    }
}

let result = new Solution()
result.printPat(5)

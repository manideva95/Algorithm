// https://leetcode.com/problems/number-of-employees-who-met-the-target/description/


var numberOfEmployeesWhoMetTarget = function (hours, target) {
    let noOfEmployeesMetTarget = 0
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) {
            noOfEmployeesMetTarget++
        }
    }
    return noOfEmployeesMetTarget
};

console.log(
    numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 6)
)

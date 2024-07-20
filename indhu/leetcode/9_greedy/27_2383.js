// https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/description/

/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (initialEnergy, initialExperience, energy, experience) {
    let sumOfEnergy = energy.reduce((a, b) => a + b, 0) + 1
    let experienceToWin = initialExperience;
    let trainingNeed = 0
    for (let exp of experience) {
        if (exp >= experienceToWin) {
            trainingNeed += (exp - experienceToWin) + 1
            experienceToWin += exp + (exp - experienceToWin) + 1;
        } else experienceToWin += exp;
    }

    return (sumOfEnergy > initialEnergy ? sumOfEnergy - initialEnergy : 0) + trainingNeed
};
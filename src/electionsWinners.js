function solution(votes, k) {
    let max = Math.max(...votes);
    let count = 0;
    for (let i = 0; i < votes.length; i++) {
        if (votes[i] + k > max) {
            count++;
        }
    }
    if (count === 0 && k === 0) {
        return votes.filter(v => v === max).length === 1 ? 1 : 0;
    }
    return count;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test electionsWinners

// alternative solution

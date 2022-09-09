const solution = require('./electionsWinners.js');

test('test 1', () => {
    expect(solution([2, 3, 5, 2], 3)).toBe(2);
});

test('test 2', () => {
    expect(solution([1, 3, 3, 1, 1], 0)).toBe(0);
});

test('test 3', () => {
    expect(solution([5, 1, 3, 4, 1], 0)).toBe(1);
});

test('test 4', () => {
    expect(solution([1, 1, 1, 1], 1)).toBe(4);
});

test('test 5', () => {
    expect(solution([1, 1, 1, 1], 0)).toBe(0);
});

test('test 6', () => {
    expect(solution([3, 1, 1, 3, 1], 2)).toBe(2);
});

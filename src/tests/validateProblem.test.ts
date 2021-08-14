import { validateProblem } from "../utils/validateProblem";


const testGrid = [
    [1, 3, 0, 0, 0, 0, 0, 6, 7],
    [0, 0, 8, 0, 0, 6, 4, 0, 5],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 7, 0, 1, 0, 9, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 6, 0, 0],
    [0, 0, 9, 6, 0, 4, 3, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 6],
];

test('Check if problem is valid', () => {
    expect(validateProblem(testGrid)).toBe(false);
})
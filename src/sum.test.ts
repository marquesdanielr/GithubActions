import sum from './sum';

describe("math", () => {
    it('shoud be able to sum A and B', () => {
        expect(sum(2, 2)).toBe(4);
    });
    it('shoud be able fail', () => {
        expect(sum(2, 2)).toBe(5);
    });
});
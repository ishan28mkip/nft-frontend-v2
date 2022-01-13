import Counter, { toggle } from "./index";

describe("Redux Counter Reducer", () => {
    it("increase action should increase counter by 1", () => {
        const initial = {
            open: true,
        };
        const expected = {
            open: false,
        };
        const reducer = Counter(initial, toggle());
        expect(reducer).toEqual(expected);
    });
    it("decrease action should decrease counter by 1", () => {
        const initial = {
            open: false,
        };
        const expected = {
            open: true,
        };
        const reducer = Counter(initial, toggle());
        expect(reducer).toEqual(expected);
    });
});

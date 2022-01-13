import Sidebar, { toggle } from "./index";

describe("Redux Sidebar Reducer", () => {
    it("increase action should toggle", () => {
        const initial = {
            open: true,
        };
        const expected = {
            open: false,
        };
        const reducer = Sidebar(initial, toggle());
        expect(reducer).toEqual(expected);
    });
    it("decrease action should toggle", () => {
        const initial = {
            open: false,
        };
        const expected = {
            open: true,
        };
        const reducer = Sidebar(initial, toggle());
        expect(reducer).toEqual(expected);
    });
});

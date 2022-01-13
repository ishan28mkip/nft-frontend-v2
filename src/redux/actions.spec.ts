import { toggle } from "./actions";

describe("Redux Actions", () => {
    describe("Sidebar Actions", () => {
        it("toggle should return toggle.type", () => {
            const action = toggle();
            expect(action.type).toBe(toggle.type);
        });
    });
});

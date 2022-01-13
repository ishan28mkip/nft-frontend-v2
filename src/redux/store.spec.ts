import store from "./store";

describe("Redux Store", () => {
    it("should create store with sidebar reducer", () => {
        const currentState = store.getState();
        expect(currentState).toHaveProperty("sidebar");
    });
});

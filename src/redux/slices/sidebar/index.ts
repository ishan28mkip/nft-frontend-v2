import { createSlice } from "@reduxjs/toolkit";

interface ISidebar {
    open: boolean;
}

const initialState: ISidebar = {
    open: true,
};

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        toggle: (state) => {
            state.open = !state.open;
        },
    },
});

export const { toggle } = sidebarSlice.actions;

export default sidebarSlice.reducer;

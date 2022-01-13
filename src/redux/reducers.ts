import { combineReducers } from "redux";

import sidebar from "@redux/slices/sidebar";

const rootReducer = combineReducers({ sidebar });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

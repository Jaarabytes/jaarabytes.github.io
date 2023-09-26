import { createStore } from "redux";
import rootReducer from "./reducers"

// SWITCH TO CONFIGURE STORE

const store = createStore(rootReducer)
export default store;
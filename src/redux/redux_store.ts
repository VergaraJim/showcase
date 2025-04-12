import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./main_slice";

const reduxStore = configureStore({
  reducer: {
    main: mainReducer,
  },
});

export default reduxStore;

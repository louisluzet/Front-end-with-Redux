import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./main-slice";
import mainEditSlice from "./mainEdit-slice";
import categorySlice from "./category-slice";

const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
    mainEdit: mainEditSlice.reducer,
    category: categorySlice.reducer,
  },
});

export default store;

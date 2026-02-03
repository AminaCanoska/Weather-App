import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import currentCitySlice from "./CurrentCitySlice";

export const store = configureStore({
    reducer: {
        theme: themeSlice,
        currentCity: currentCitySlice,
    }
})

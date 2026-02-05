import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import currentCitySlice from "./CurrentCitySlice";
import inputValueSlice from "./InputValueSlice";

export const store = configureStore({
    reducer: {
        theme: themeSlice,
        currentCity: currentCitySlice,
        inputValue: inputValueSlice
    }
})

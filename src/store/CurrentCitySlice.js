import {createSlice} from "@reduxjs/toolkit";

    const currentCity = {
          name: "",
          lat: null,
          lon: null,
          temp: null,
          feelsLike: null,
          minTemp: null,
          maxTemp: null,
          humidity: null,
          wind: null,
          description: null,
          icon: null,

    }

const currentCitySlice = createSlice({
    name: "weather",
    initialState: currentCity,
    reducers: {
        setCity: (state, action) => {
            return {
                ...state,
                ...action.payload
            };
        }
    }
});

export const { setCity } = currentCitySlice.actions;
export default currentCitySlice.reducer;
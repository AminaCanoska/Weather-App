import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: []
};

const forcastSlice = createSlice({
  name: "forcast",
  initialState,
  reducers: {
    setForcast: (state, action) => {
      return {
        ...state,
        list: action.payload
      };
    }
  }
});

export const { setForcast } = forcastSlice.actions;
export default forcastSlice.reducer;

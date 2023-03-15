import { createSlice } from "@reduxjs/toolkit";

const favorSlice = createSlice({
  name: "favors",
  initialState: { value: [] },
  reducers: {
    addFavor: (state, action) => {
      // Write code for addUser function
      state.value.push(action.payload);
    },
    deleteFavor: (state, action) => {
      // Write code for deleteUser fuction
      state.value = state.value.filter(
        (favors) => favors.id !== action.payload.id
      );
    },
  },
});

export default favorSlice.reducer;
export const { addFavor, deleteFavor } = favorSlice.actions;

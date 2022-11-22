import { createSlice } from "@reduxjs/toolkit"

const initialState : number[] = [];

export const favorite = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload)
    },
    remove: (state, action) => {
      const index = state.findIndex((item: number) => Number(item) === Number(action.payload)
      );
      state.splice(index, 1);
    },
  }
});

export const { add, remove } = favorite.actions;
export default favorite.reducer;
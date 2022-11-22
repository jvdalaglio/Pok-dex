import { createSlice } from "@reduxjs/toolkit"

let initialState : number[] = [];

const favoriteStorage = localStorage.getItem("@pokedex/favorite")
if(favoriteStorage) {
  initialState = JSON.parse(favoriteStorage);
}

export const favorite = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload)
      state.sort((a,b) => {
        return a - b
      })
      localStorage.setItem("@pokedex/favorite", JSON.stringify(state));
    },
    remove: (state, action) => {
      const index = state.findIndex((item: number) => Number(item) === Number(action.payload)
      );
      state.splice(index, 1);
      localStorage.setItem("@pokedex/favorite", JSON.stringify(state));
    },
  }
});

export const { add, remove } = favorite.actions;
export default favorite.reducer;
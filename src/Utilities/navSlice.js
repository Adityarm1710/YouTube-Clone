import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "navSlice",
  initialState:{
    showNav: true, 
  },
  reducers:{
    toggleshowNav: (state) =>{
       state.showNav = !state.showNav;
    }
  }
});

export const {toggleshowNav} = navSlice.actions;
export default navSlice.reducer;
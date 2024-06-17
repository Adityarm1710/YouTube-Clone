import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "navSlice",
  initialState:{
    showNav: true, 
  },
  reducers:{
    toggleshowNav: (state) =>{
      state.showNav = !state.showNav;
    },
    closeNav: (state)=>{
      state.showNav = false;
    }
  }
});

export const {toggleshowNav,closeNav} = navSlice.actions;
export default navSlice.reducer;
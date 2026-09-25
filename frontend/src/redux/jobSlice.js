import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
  name: "job",
  initialState:{
    allJobs:[],
  },
  reducers:{
    setAllJobs: (state, action)=>{
      state.allJobs = action.payload
    }
  }
})
export const {setAllJobs}= jobsSlice.slice.action
export default jobsSlice.reducer
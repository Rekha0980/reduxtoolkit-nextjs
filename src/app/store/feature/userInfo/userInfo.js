import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserInfo = createAsyncThunk("fetchUserInfo", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json()
})

const userInfo = createSlice({
  name:"userInfo",
  initialState:{
    data:null,
    loading:false,
    error:null
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
    .addCase(fetchUserInfo.fulfilled, (state,action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    })
  }
})

export default userInfo.reducer;
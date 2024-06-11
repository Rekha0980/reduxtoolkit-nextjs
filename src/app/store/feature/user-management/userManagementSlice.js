'use client'
import { createSlice } from '@reduxjs/toolkit'

const initialState={
    userList:[
        {name:"rekha"}
    ]
}

const userManagementSlice = createSlice({
  name: 'userManagement',
  initialState,
  reducers: {
   addUser:(state, action)=> {
     state.userList.push(action.payload)
    },
    deletUser(state, action) {
      const filterList = state.userList.filter((el)=>el.name!=action.payload)
      state.userList=filterList
    },
  },
})

export const { addUser,deletUser} = userManagementSlice.actions
export default userManagementSlice.reducer
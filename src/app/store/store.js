'use client'
import { configureStore } from '@reduxjs/toolkit'
import userManagementSlice from './feature/user-management/userManagementSlice'
import userInfo from './feature/userInfo/userInfo'


export const store = configureStore({
  reducer: {
    userManagement:userManagementSlice,
    userInfo:userInfo
  },
})
'use client'
import { configureStore } from '@reduxjs/toolkit'
import userManagementSlice from './feature/user-management/userManagementSlice'


export const store = configureStore({
  reducer: {
    userManagement:userManagementSlice
  },
})
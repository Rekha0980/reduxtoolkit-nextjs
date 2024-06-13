'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
import UserList from './component/userlist'
import { useDispatch } from 'react-redux'
import { addUser } from './store/feature/user-management/userManagementSlice'
import Dashboard from './component/Dashboard'

export default function Home() {
  const [name,setName]=useState('');

  const dispatch= useDispatch();

  const addNewUser=()=>{
    dispatch(addUser({name}))
    setName('')

  }
  return (
    <main className={styles.main}>
      <h1>NextJs</h1>
      <input value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={addNewUser}>add user</button>
      <UserList/>
      <Dashboard/>
    </main>
  )
}

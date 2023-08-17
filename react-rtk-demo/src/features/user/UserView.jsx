import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

export const UserView = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    let effectRunning = true
    if (effectRunning) {
      console.log(effectRunning, ' true? Running')
      dispatch(fetchUsers())
    }
    return () => {
      effectRunning = false
      console.log('effectRunning false? ', effectRunning)
    }
  }, [])
  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => {
            return <li key={user.id}>{user.name}</li>
          })}
        </ul>
      ) : null}
    </div>
  )
}

import React from 'react'
import { Outlet } from 'react-router'

const RequireAuth = () => {
  return (
    <div>
      <h1>RequireAuth</h1>
      <Outlet />
    </div>
  )
}

export default RequireAuth

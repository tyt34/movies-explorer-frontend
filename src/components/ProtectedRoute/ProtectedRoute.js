import React from 'react'
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children, redirectTo, loggedIn }) => {
  return loggedIn ? children : <Navigate to={redirectTo} />
}

export default ProtectedRoute
// info about create protect on v6
// https://gist.github.com/mjackson/d54b40a094277b7afdd6b81f51a0393f

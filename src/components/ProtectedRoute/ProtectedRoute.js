import React from 'react'
import { Navigate } from "react-router-dom"
import * as api from '../../utils/MainApi.js'

const ProtectedRoute = ({ children, redirectTo, loggedIn, acces }) => {
  if ((loggedIn === false) && (localStorage.jwt)) {
    loggedIn = !loggedIn
  }

  if (acces === 'red') { // не авторизован
    return loggedIn ? children : <Navigate to={redirectTo} />
  } else if (acces === 'green') { // авторизован
    loggedIn = !loggedIn
    return loggedIn ? children : <Navigate to={redirectTo} />
  }
}

export default ProtectedRoute
// info about create protect on v6
// https://gist.github.com/mjackson/d54b40a094277b7afdd6b81f51a0393f

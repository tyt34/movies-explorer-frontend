import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Page404 from '../Page404/Page404'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Footer from '../Footer/Footer'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import * as api from '../../utils/MainApi.js'

function App() {
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: '',
  })
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [popupMenu, setPopupMenu] = React.useState(false)

  function handleMenu() {
    setPopupMenu(!popupMenu)
  }

  React.useEffect( () => {
    api.getUser()
    .then(
      (arg) => {
        setCurrentUser(
          {
            name: arg.data.name,
            email: arg.data.email
          }
        )
        setLoggedIn(true)
      }
    )
    .catch( (err) => {
      console.log('err -> ', err)
    })
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={
            <ProtectedRoute
              redirectTo="/movies"
              loggedIn={loggedIn}
              acces='green'
            >
              <Login
                user={currentUser}
                setUser={setCurrentUser}
                setLoggedIn={setLoggedIn}
              />
            </ProtectedRoute>
          } />
          <Route path="/signup" element={
            <ProtectedRoute
              redirectTo="/movies"
              loggedIn={loggedIn}
              acces='green'
            >
              <Register
                setLoggedIn={setLoggedIn}
              />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <>
              <ProtectedRoute
                redirectTo="/"
                loggedIn={loggedIn}
                acces='red'
              >
                <Header
                  isMenu={handleMenu}
                />
                <Navigation
                  isOpen={popupMenu}
                  setPopupMenu={setPopupMenu}
                  isMenu={handleMenu}
                />
                <Profile
                  setLoggedIn={setLoggedIn}
                />
              </ProtectedRoute>
            </>
          } />
          <Route path="/saved-movies" element={
            <>
              <ProtectedRoute
                redirectTo="/"
                loggedIn={loggedIn}
                acces='red'
              >
                <Header
                  isMenu={handleMenu}
                />
                <Navigation
                  isOpen={popupMenu}
                  setPopupMenu={setPopupMenu}
                  isMenu={handleMenu}
                />
                <SavedMovies />
                <Footer />
              </ProtectedRoute>
            </>
          } />
          <Route
            path="/movies"
            loggedIn={loggedIn}
            element={
              <>
                <ProtectedRoute
                  redirectTo="/"
                  loggedIn={loggedIn}
                  acces='red'
                >
                  <Header
                    isMenu={handleMenu}
                  />
                  <Navigation
                    isOpen={popupMenu}
                    setPopupMenu={setPopupMenu}
                    isMenu={handleMenu}
                  />
                  <Movies />
                  <Footer />
                </ProtectedRoute>
              </>
            }
          />
          <Route path="/" element={
            <>
              <Main
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
              />
            </>
          } />
          <Route path='/404' element={
            <Page404/>
          } />
          <Route path="/*" element={<Navigate replace to="/404" />} />
        </Routes>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  )
}

export default App

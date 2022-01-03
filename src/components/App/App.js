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

  function handleRelocation() {
    window.location.href = "/"
  }

  return ( // BrowserRouter он вообще нужен?
    <CurrentUserContext.Provider value={currentUser}>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={
            <>
              <Login
                isRelo={handleRelocation}
                user={currentUser}
                setUser={setCurrentUser}
                setLoggedIn={setLoggedIn}
              />
            </>
          } />
          <Route path="/signup" element={
            <>
              <Register
                isRelo={handleRelocation}
                setLoggedIn={setLoggedIn}
              />
            </>
          } />
          <Route path="/profile" element={
            <>
              <ProtectedRoute redirectTo="/" loggedIn={loggedIn}>
                <Header
                  isMenu={handleMenu}
                  isRelo={handleRelocation}
                />
                <Navigation
                  isOpen={popupMenu}
                  setPopupMenu={setPopupMenu}
                  isMenu={handleMenu}
                  isRelo={handleRelocation}
                />
                <Profile
                  setLoggedIn={setLoggedIn}
                />
              </ProtectedRoute>
            </>
          } />
          <Route path="/saved-movies" element={
            <>
              <ProtectedRoute redirectTo="/" loggedIn={loggedIn}>
                <Header
                  isMenu={handleMenu}
                  isRelo={handleRelocation}
                />
                <Navigation
                  isOpen={popupMenu}
                  setPopupMenu={setPopupMenu}
                  isMenu={handleMenu}
                  isRelo={handleRelocation}
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
                <ProtectedRoute redirectTo="/" loggedIn={loggedIn}>
                  <Header
                    isMenu={handleMenu}
                    isRelo={handleRelocation}
                  />
                  <Navigation
                    isOpen={popupMenu}
                    setPopupMenu={setPopupMenu}
                    isMenu={handleMenu}
                    isRelo={handleRelocation}
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

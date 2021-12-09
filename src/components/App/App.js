import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom'
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

function App() {
  const [popupMenu, setPopupMenu] = React.useState(false);
  function handleMenu() {
    console.log(' -> ');
    setPopupMenu(!popupMenu);
  }

  if (popupMenu === true) {
    document.getElementById('root').style.backgroundColor='gray'
  } else {
    document.getElementById('root').style.backgroundColor='white'
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={
          <>
            <Login />
          </>
        } />
        <Route path="/signup" element={
          <>
            <Register />
          </>
        } />
        <Route path="/profile" element={
          <>
            <Header
              isMenu={handleMenu}
            />
            <Navigation
              isOpen={popupMenu}
              isMenu={handleMenu}
            />
            <Profile />
          </>
        } />
        <Route path="/saved-movies" element={
          <>
            <Header
              isMenu={handleMenu}
            />
            <Navigation
              isOpen={popupMenu}
              isMenu={handleMenu}
            />
            <SavedMovies />
            <Footer />
          </>
        } />
        <Route path="/movies" element={
          <>
            <Header
              isMenu={handleMenu}
            />
            <Navigation
              isOpen={popupMenu}
              isMenu={handleMenu}
            />
            <Movies />
            <Footer />
          </>
        } />
        <Route path="/" element={
          <>
            <Main />
          </>
        } />
        <Route path='/404' element={
          <Page404/>
        } />
        <Route path="/*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

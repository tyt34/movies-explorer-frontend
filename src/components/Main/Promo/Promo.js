import React from 'react'
import './Promo.css'
import promo__img from "../../../images/logo_main.svg"
import illustration__img from "../../../images/landing-logo.svg"
import { useNavigate} from 'react-router-dom'
import * as api from '../../../utils/MainApi.js'


function Promo(props) {
  const navigate = useNavigate()

  React.useEffect( () => {
    api.getUser()
    .then(
      (arg) => {
        props.setLoggedIn(true)
      }
    )
    .catch( (err) => {
      console.log('err -> ', err)
    })
  }, [])

  function handleLinkSignup(e) {
    e.preventDefault()
    navigate('/signup')
  }

  function handleLinkSignin(e) {
    e.preventDefault()
    navigate('/signin')
  }

  function handleLinkMain(e) {
    e.preventDefault()
    navigate('/')
  }

  function handleLinkMovies(e) {
    e.preventDefault()
    navigate('/movies')
  }

  function handleLinkSavedMovies(e) {
    e.preventDefault()
    navigate('/saved-movies')
  }

  function handleLinkProfile(e) {
    e.preventDefault()
    navigate('/profile')
  }

  return (
    <>
      <section className="promo">
        <img
          className="promo__img"
          alt="Логотип сайта"
          src={promo__img}
          onClick={handleLinkMain}

        />
        <div
          className={ props.loggedIn ? 'promo__navigation' : 'promo__navigation promo_open'}
        >
          <a
            href='/signup'
            className="promo__signin"
            onClick={handleLinkSignup}
          >
            Регистрация
          </a>
          <a
            href="/signin"
            className="promo__signup"
            onClick={handleLinkSignin}
          >
            Войти
          </a>
        </div>
        <div
          className={ props.loggedIn ? 'promo__navigation promo_open' : 'promo__navigation'}
        >
          <a
            href='/movies'
            className="promo__signin"
            onClick={handleLinkMovies}
          >
            Фильмы
          </a>
          <a
            href="/saved-movies"
            className="promo__signin"
            onClick={handleLinkSavedMovies}
          >
            Сохраненные фильмы
          </a>
          <a
            href="/profile"
            className="promo__signin"
            onClick={handleLinkProfile}
          >
            Аккаунт
          </a>
        </div>
      </section>

      <section className="illustration">
        <img
          className="illustration__img"
          alt="абстрактная картинка"
          src={illustration__img}
        />
        <p className="illustration__text">
          Учебный проект студента факультета Веб-разработки.
        </p>
      </section>
    </>
  )
}

export default Promo

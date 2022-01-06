import './Navigation.css'
import icon_user from "../../images/icon_user.svg"
import promo__img from "../../images/logo_main.svg"
import { useNavigate} from 'react-router-dom'

function Navigation(props) {
  const navigate = useNavigate()
  function handleAccount() {
    props.setPopupMenu(false)
    navigate('/profile')
  }

  function handleLinkMovies(e) {
    e.preventDefault()
    props.setPopupMenu(false)
    navigate('/movies')
  }

  function handleLinkMain(e) {
    e.preventDefault()
    props.setPopupMenu(false)
    navigate('/')
  }

  function handleLinkSavedMovies(e) {
    e.preventDefault()
    props.setPopupMenu(false)
    navigate('/saved-movies')
  }

  return (
    <>
      <section
        className={props.isOpen ? "navigation navigation_open" : "navigation"}
        id="navigation"
      >
        <img
          className="navigation__logo"
          alt="логотип"
          src={promo__img}
          onClick={handleLinkMain}
        />
        <button
          className="navigation__button"
          onClick={props.isMenu}
          type="button">
        </button>
        <div className="navigation__links">
          <a
            href="/"
            className="navigation__link"
            onClick={handleLinkMain}
          >
            Главная
          </a>
          <a
            href="/movies"
            className="navigation__link"
            onClick={handleLinkMovies}
          >
            Фильмы
          </a>
          <a
            href="/saved-movies"
            className="navigation__link"
            onClick={handleLinkSavedMovies}
          >
            Сохраненные фильмы
          </a>
        </div>
        <div
          className="navigation__user"
          onClick={handleAccount}
        >
          <img
            className="navigation__ico"
            alt="логотип"
            src={icon_user}
          />
          <p className="navigation__text">
            Аккаунт
          </p>
        </div>
      </section>
      <section
        className={props.isOpen ? "over__open over" : "over"}
      >
      </section>
    </>
  )
}

export default Navigation

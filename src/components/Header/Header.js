import React from 'react'
import './Header.css'
import promo__img from "../../images/logo_main.svg"
import { useNavigate} from 'react-router-dom'

function Header(props) {
  const navigate = useNavigate()

  function handleLinkMain(e) {
    e.preventDefault()
    navigate('/')
  }

  return (
    <>
    <section className={props.isOpen ? "header header_open" : "header"}>
        <img
          className="header__logo"
          alt="логотип"
          src={promo__img}
          onClick={handleLinkMain}
        />
        <button
          className="header__button"
          onClick={props.isMenu}
          type="button">
        </button>
      </section>
    </>
  )
}

export default Header

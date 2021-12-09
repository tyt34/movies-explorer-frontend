import './Navigation.css';
import icon_user from "../../images/icon_user.svg"
import promo__img from "../../images/logo_main.svg"

function Navigation(props) {

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
        />
        <button
          className="navigation__button"
          onClick={props.isMenu}
          type="button">
        </button>
        <h1 className="navigation__main">
          Главная
        </h1>
        <div className="navigation__links">
          <a href="/movies" className="navigation__link">
            Фильмы
          </a>
          <a href="/saved-movies" className="navigation__link">
            Сохраненные фильмы
          </a>
        </div>
        <div className="navigation__user">
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
    </>

  );
}

export default Navigation;

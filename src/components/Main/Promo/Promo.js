import './Promo.css';
import promo__img from "../../../images/logo_main.svg"
import illustration__img from "../../../images/landing-logo.svg"


function Promo() {
  function handleRelocation() {
    window.location.href = "/"
  }
  
  return (
    <>
      <section className="promo">
        <img
          className="promo__img"
          alt="логотип"
          src={promo__img}
          onClick={handleRelocation}
        />
        <div className="promo__navigation">
          <a href="/signup" className="promo__signin">
            Регистрация
          </a>
          <a
            href="/signin"
            className="promo__signup"
          >
            Войти
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
  );
}

export default Promo;

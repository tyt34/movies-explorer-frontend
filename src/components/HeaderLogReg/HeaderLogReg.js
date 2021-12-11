import './HeaderLogReg.css';
import promo__img from "../../images/logo_main.svg"

function HeaderLogReg(props) {
  return (
    <>
      <section className="header-log-reg">
        <img
          className="header-log-reg__logo"
          alt="логотип"
          src={promo__img}
          onClick={props.isRelo}
        />
        <h1 className="header-log-reg__text">
          {props.text}
        </h1>
      </section>
    </>

  );
}

export default HeaderLogReg;

import './FormLogin.css';
import FieldLogReg from '../FieldLogReg/FieldLogReg'

function FormLogin(props) {
  return (
    <>
      <section className="form-log-reg">
        <form
          name={props.name}
          className="form-log-reg__form"
        >
          <FieldLogReg
            name="E-mail"
            idName="email"
          />
          <FieldLogReg
            name="Пароль"
            idName="pass"
            typeInput="password"
          />
          <button
            id="form-log-reg__send"
            className="form-log-reg__but"
            type="submit"
          >

            {props.nameButton}
          </button>
        </form>
        <p className="form-log-reg__text">
          {props.textDown}
          <a
            href={props.link}
            className="form-log-reg__link"
          >
            {props.textLink}
          </a>
        </p>
      </section>
    </>
  );
}

export default FormLogin;

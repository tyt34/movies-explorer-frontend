import '../FormLogin/FormLogin.css';
import FieldLogReg from '../FieldLogReg/FieldLogReg'

function FormRegister(props) {
  return (
    <>
      <section className="form-log-reg">
        <form
          name={props.name}
          className="form-log-reg__form"
        >
          <FieldLogReg
            name="Имя"
            idName="name"
            typeInput="name"
          />
          <FieldLogReg
            name="E-mail"
            idName="email"
            typeInput="email"
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
            href="/signin"
            className="form-log-reg__link"
          >
            {props.textLink}
          </a>
        </p>
      </section>
    </>
  );
}

export default FormRegister;

import './Login.css';
import HeaderLogReg from '../HeaderLogReg/HeaderLogReg'
import FormLogin from '../FormLogin/FormLogin'


function Login(props) {
  return (
    <>
      <HeaderLogReg
        text='Рады видеть!'
        isRelo={props.isRelo}
      />
      <FormLogin
        name='Имя'
        nameButton='Войти'
        textDown='Ещё не зарегистрированы?'
        textLink='Регистрация'
        link="/signup"
      />
    </>

  );
}

export default Login;

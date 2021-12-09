import './Login.css';
import HeaderLogReg from '../HeaderLogReg/HeaderLogReg'
import FormLogin from '../FormLogin/FormLogin'


function Login() {
  return (
    <>
      <HeaderLogReg
        text='Рады видеть!'
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

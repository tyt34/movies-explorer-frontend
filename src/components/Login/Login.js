import './Login.css'
import HeaderLogReg from '../HeaderLogReg/HeaderLogReg'
import FormLogin from '../FormLogin/FormLogin'


function Login(props) {
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
        user={props.user}
        setUser={props.setUser}
        setLoggedIn={props.setLoggedIn}
      />
    </>

  )
}

export default Login

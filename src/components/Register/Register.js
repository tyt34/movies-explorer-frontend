import './Register.css'
import HeaderLogReg from '../HeaderLogReg/HeaderLogReg'
import FormRegister from '../FormRegister/FormRegister'

function Register(props) {
  return (
    <>
      <HeaderLogReg
        text='Добро пожаловать!'
      />
      <FormRegister
        name='Имя'
        nameButton='Зарегистрироваться'
        textDown='Уже зарегистрированы?'
        textLink='Войти'
        setLoggedIn={props.setLoggedIn}
        setUser={props.setUser}
      />
    </>

  )
}

export default Register

import './Register.css'
import HeaderLogReg from '../HeaderLogReg/HeaderLogReg'
import FormRegister from '../FormRegister/FormRegister'

function Register(props) {
  return (
    <>
      <HeaderLogReg
        text='Добро пожаловать!'
        isRelo={props.isRelo}
      />
      <FormRegister
        name='Имя'
        nameButton='Зарегистрироваться'
        textDown='Уже зарегистрированы?'
        textLink='Войти'
        setLoggedIn={props.setLoggedIn}
      />
    </>

  )
}

export default Register

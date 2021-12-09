import './Register.css';
import HeaderLogReg from '../HeaderLogReg/HeaderLogReg'
import FormRegister from '../FormRegister/FormRegister'

function Register() {
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
      />
    </>

  );
}

export default Register;

import React from 'react'
import './FormLogin.css'
import { useNavigate} from 'react-router-dom'
import FieldLogReg from '../FieldLogReg/FieldLogReg'
import * as api from '../../utils/MainApi.js'
import {
  trueEmail,
  truePass,
  infoAboutErEmail,
  infoAboutErPas
} from '../../utils/constants.js'


function FormLogin(props) {
  const navigate = useNavigate()
  const [button, setButton] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [pass, setPass] = React.useState('')

  const [emailErr, setEmailErr] = React.useState('')
  const [passErr, setPassErr] = React.useState('')
  const [validErr, setValidErr] = React.useState('')


  React.useEffect( () => {
    setEmailErr(handleEmailErr())
    setPassErr(handlePassErr())
  }, [])

  React.useEffect( () => {
    setEmailErr(handleEmailErr())
    setPassErr(handlePassErr())
    setValidErr('')
    if ( (handleEmailErr() === '') && (handlePassErr() === '') ) {
      setButton(true)
    } else {
      setButton(false)
    }
  }, [email, pass])

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  function handleChangePass(e) {
    setPass(e.target.value)
  }

  function handleEmailErr() {
    if (!trueEmail.test(email)) {
      return infoAboutErEmail
    } else {
      return ''
    }
  }

  function handlePassErr() {
    if (!truePass.test(pass)) {
      return infoAboutErPas
    } else {
      return ''
    }
  }

  function handleAuth(e) {
    e.preventDefault()
    api.auth(email, pass)
    .then( (data) => {
      if (data.status === 'ok') {
        localStorage.setItem('jwt', data.token)
        props.setLoggedIn(true)
        props.setUser({
          name: data.user.name,
          email: data.user.email,
        })
        navigate('/movies')
      } else {
        throw data
      }
    })
    .catch(
      (err) => {
        console.log(err)
        setValidErr(err.message)
      }
    )
  }

  function handleLinkSignup(e) {
    e.preventDefault()
    navigate('/signup')
  }

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
            typeInput="email"
            value={email}
            onChange={handleChangeEmail}
            textInputErr={emailErr}
          />
          <FieldLogReg
            name="Пароль"
            idName="pass"
            typeInput="password"
            value={pass}
            onChange={handleChangePass}
            textInputErr={passErr}
          />
          <button
            id="form-log-reg__send"
            className={ button ? 'form-log-reg__but' : 'form-log-reg__but form-log-reg_close'}
            type="submit"
            onClick={handleAuth}
            disabled={ button ? '' : 'disabled'}
          >
            {props.nameButton}
          </button>
          <p className="form-log-reg__message">
            {validErr}
          </p>
        </form>
        <p className="form-log-reg__text">
          {props.textDown}
          <a
            href={props.link}
            className="form-log-reg__link"
            onClick={handleLinkSignup}
          >
            {props.textLink}
          </a>
        </p>
      </section>
    </>
  )
}

export default FormLogin

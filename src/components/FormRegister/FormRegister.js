import React from 'react'
import { useNavigate} from 'react-router-dom'
import '../FormLogin/FormLogin.css'
import FieldLogReg from '../FieldLogReg/FieldLogReg'
import * as api from '../../utils/MainApi.js'
import {
  trueEmail,
  truePass,
  infoAboutErEmail,
  infoAboutErPas,
  infoAboutErNameMoreTwo,
  infoAboutErNameLessThirty,
  infoAboutErName,
  trueName
} from '../../utils/constants.js'

function FormRegister(props) {
  const navigate = useNavigate()
  const [button, setButton] = React.useState(false)
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [pass, setPass] = React.useState('')

  const [nameErr, setNameErr] = React.useState('')
  const [emailErr, setEmailErr] = React.useState('')
  const [passErr, setPassErr] = React.useState('')
  const [validErr, setValidErr] = React.useState('')

  React.useEffect( () => {
    setNameErr(handleNameErr())
    setEmailErr(handleEmailErr())
    setPassErr(handlePassErr())
  }, [])

  React.useEffect( () => {
    setNameErr(handleNameErr())
    setEmailErr(handleEmailErr())
    setPassErr(handlePassErr())
    setValidErr('')
    if ( (handleNameErr() === '') && (handleEmailErr() === '') && (handlePassErr() === '') ) {
      setButton(true)
    } else {
      setButton(false)
    }
  }, [name, email, pass])

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  function handleChangePass(e) {
    setPass(e.target.value)
  }

  function handleNameErr() {
    if (name.length < 2) {
      return infoAboutErNameMoreTwo
    } else if (name.length > 30) {
      return infoAboutErNameLessThirty
    } else if (!trueName.test(name)) {
      return infoAboutErName
    } else {
      return ''
    }
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

  function handleReg(e) {
    e.preventDefault()
    api.regg(name, email, pass)
    .then( (data) => {
      if (data.error) {
        throw data
      } else if (data.message) {
        setValidErr(data.message)
      } else if (data.status === 'ok') {
        api.auth(email, pass)
        .then( (data) => {
          if (data.status === 'ok') {
            localStorage.clear()
            localStorage.setItem('jwt', data.token)
            props.setLoggedIn(true)
            navigate('/movies')
          } else {
            throw data
          }
        })
        .catch(
          (err) => {
            console.log(err)
          }
        )
      }
    })
    .catch(
      (err) => {
        if (err.message === 'Validation failed') {
          setEmailErr(infoAboutErEmail)
        } else {
          setEmailErr(err.message)
        }
      }
    )
  }

  function handleLinkSignin(e) {
    e.preventDefault()
    navigate('/signin')
  }

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
            value={name}
            onChange={handleChangeName}
            textInputErr={nameErr}
          />
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
            onClick={handleReg}
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
            href="/signin"
            className="form-log-reg__link"
            onClick={handleLinkSignin}
          >
            {props.textLink}
          </a>
        </p>
      </section>
    </>
  )
}

export default FormRegister

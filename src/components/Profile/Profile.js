import { useNavigate} from 'react-router-dom'
import React from 'react'
import './Profile.css'
import * as api from '../../utils/MainApi.js'
import Field from './Field/Field'
import {
  textForLoading,
  textForExampleEmail,
  trueName,
  trueEmail,
  infoAboutErNameMoreTwo,
  infoAboutErNameLessThirty,
  infoAboutErName,
  infoAboutErEmail
} from '../../utils/constants.js'
import CurrentUserContext from "../../contexts/CurrentUserContext";

let ren = 0.5

function Profile(props) {
  const navigate = useNavigate()
  const [button, setButton] = React.useState(false)
  const [name, setName] = React.useState(textForLoading)
  const [email, setEmail] = React.useState(textForLoading)
  const [nameInput, setNameInput] = React.useState(textForLoading)
  const [emailInput, setEmailInput] = React.useState(textForExampleEmail)
  const [buttonError, setButtonError] = React.useState('')
  const [nameError, setNameError] = React.useState('')
  const [emailError, setEmailError] = React.useState('')
  const [testSuccess, setTestSuccess] = React.useState('')
  const currenUser = React.useContext(CurrentUserContext);

  React.useEffect( () => {
    setNameInput(currenUser.name)
    setName(currenUser.name)
    setEmailInput(currenUser.email)
    setEmail(currenUser.email)
    setTestSuccess('Редактировать, это сохранить изменения')
    setTimeout(textSuccess, 4000)
    setTimeout(clearErr, 1)
  }, [])

  React.useEffect( () => {
    setNameInput(currenUser.name)
    setName(currenUser.name)
    setEmailInput(currenUser.email)
    setEmail(currenUser.email)
  }, [currenUser.name])

  function testCopy(word, wordInput) {
    if (wordInput === word) {
      return false
    } else {
      return true
    }
  }

  React.useEffect( () => {
    if ((testCopy(name, nameInput) === true) || (testCopy(email, emailInput) === true)) {
      if (validName(nameInput) && validEmail(emailInput)) {
        setButton(true)
      } else {
        setButton(false)
      }
    } else {
      setButton(false)
    }
  }, [nameInput, emailInput, email])

  React.useEffect( () => {
    if ((nameError === '') && (emailError === '')) {
      setButtonError('')
    } else if ((nameError !== '') && (emailError === '')) {
      setButtonError(nameError)
    } else if ((nameError === '') && (emailError !== '')) {
      setButtonError(emailError)
    }
  }, [nameError, emailError])

  function validName(nameInput) {
    if (nameInput.length < 2) {
      setNameError(infoAboutErNameMoreTwo)
      return false
    } else if (nameInput.length > 30) {
      setNameError(infoAboutErNameLessThirty)
      return false
    } else if (!trueName.test(nameInput)) {
      setNameError(infoAboutErName)
      return false
    } else {
      setNameError('')
      return true
    }
  }

  function validEmail(emailInput) {
    if (!trueEmail.test(emailInput)) {
      setEmailError(infoAboutErEmail)
      return false
    } else {
      setEmailError('')
      return true
    }
  }

  function textSuccess() {
    setTestSuccess('')
  }

  function clearErr() {
    setNameError('')
  }

  function onSubmit(e) {
    e.preventDefault()
    api.updateUser(nameInput, emailInput)
    .then(
      (arg) => {
        if (arg.status === 'bad') {
          throw arg
        } else if (arg.error) {
          throw arg
        } else {
          setButtonError('')
          setTestSuccess('Данные изменены')
          setTimeout(textSuccess, 4000)
          setName(arg.name)
        }
      }
    )
    .catch(
      (err) => {
        console.log('Err#10 ',err)
        if (err.message === 'Validation failed') {
          setEmailError(infoAboutErEmail)
        } else {
          setButtonError(err.message)
        }
      }
    )
  }

  function handleChangeName(e) {
    setNameInput(e.target.value)
  }

  function handleChangeEmail(e) {
    setEmailInput(e.target.value)
  }

  function handleSaveAll(e) {
    e.preventDefault()
    localStorage.clear()
    props.setLoggedIn(false)
    navigate('/')
  }

  /*
  // 1 - допусти строку привет имя мы получали через функцию, которая избыточно перерисовывалась
  function getName() {
    ren = ren + 0.5
    console.log(' num ren ', ren)
    return `Привет, ${name}!`
  }
  */
  // 2 - используя хук юзмемо данная функция будет вызываться только когда изменется name
  const getName = React.useMemo( () => {
    ren = ren + 0.5
    console.log(' render - Привет <Имя> ', ren)
    return `Привет, ${name}!`
  }, [name])

  return (
    <>
      <section className="profile">
        <p className="profile__main">
          {getName}
        </p>

        <form
          className="profile__form"
          name="profile"
          onSubmit={onSubmit}
        >
          <Field
            name='имя'
            value={nameInput}
            setValue={setNameInput}
            onChange={handleChangeName}
          />

          <div className="profile__line">
          </div>

          <Field
            name='E-mail'
            value={emailInput}
            setValue={setEmailInput}
            onChange={handleChangeEmail}
          />

          <p className="profile__error-button">
            {buttonError}
          </p>
          <button
            id="profile-save"
            className={ button ? 'profile__save' : 'profile__save profile_close'}
            type="submit"
            disabled={ button ? '' : 'disabled'}
          >
            Редактировать
          </button>
          <button
            id="profile-exit"
            className="profile__exit"
            type="submit"
            onClick={handleSaveAll}
          >
            Выйти из аккаунты
          </button>
          <p className="profile__succes">
            {testSuccess}
          </p>
        </form>
      </section>
    </>
  )
}

export default Profile

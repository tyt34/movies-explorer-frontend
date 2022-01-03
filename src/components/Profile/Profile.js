import { useNavigate} from 'react-router-dom'
import React from 'react'
import './Profile.css'
import * as api from '../../utils/MainApi.js'
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

  React.useEffect( () => {
    api.getUser()
    .then(
      (arg) => {
        setNameInput(arg.data.name)
        setName(arg.data.name)
        setEmailInput(arg.data.email)
        setEmail(arg.data.email)
      }
    )
    .catch( (err) => {
      console.log('err -> ', err)
    })
  }, [])

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

  function clearSuccess() {
    setTestSuccess('')
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
          setTimeout(clearSuccess, 5000)
          setName(arg.name)
        }
      }
    )
    .catch(
      (err) => {
        console.log(err)
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

  return (
    <>
      <section className="profile">
        <p className="profile__main">
          Привет, {name}!
        </p>

        <form
          className="profile__form"
          name="profile"
          onSubmit={onSubmit}
        >
          <div className="profile__field">
            <p className="profile__name">
              Имя
            </p>
            <input
              value={nameInput}
              onChange={handleChangeName}
              id="profile-name"
              className="profile__input"
              name="name"
              type="text"
              placeholder="Имя пользователя"
              minLength="2"
              maxLength="30"
              required
            />
          </div>

          <div className="profile__line">
          </div>

          <div className="profile__field">
            <p className="profile__name">
              E-mail
            </p>
            <input
              value={emailInput}
              onChange={handleChangeEmail}
              id="profile-email"
              className="profile__input"
              name="email"
              type="email"
              placeholder="Электронная почта пользователя"
              required
            />
          </div>
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

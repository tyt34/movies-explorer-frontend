import React from 'react'
import CurrentUserContext from "../../../contexts/CurrentUserContext";
let renCount = 0.5

function Field(props) {
  const currenUser = React.useContext(CurrentUserContext)

  renCount = renCount + 0.5

  console.log(' render field', props.name,  renCount)

  return (
    <>
    <div className="profile__field">
      <p className="profile__name">
        {props.name}
      </p>
      <input
        value={props.value}
        onChange={props.onChange}
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
    </>
  )
}

export default React.memo(Field, (prev, next) => {
  if (prev.value != next.value) {
    return false
  } else {
    return true
  }
})

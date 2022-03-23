import React from 'react'
//import './Footer.css'
let renCount = 0

function Field(props) {
  console.log(props)

  //renCount = renCount+1
  console.log(' render field', props.name,  ++renCount)

  React.useEffect( () => {
    //props.setNameInput(currenUser.name)
  }, [])

  return (
    <>
    <div className="profile__field">
      <p className="profile__name">
        Имя
      </p>
      <input
        value={props.nameInput}
        onChange={props.handleChangeName}
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

export default Field
//export default (Footer)

import React from 'react'
import './Profile.css';

function Profile(props) {
  console.log(' prof => ', props.isOpen);
  const [name, setName] = React.useState('Виталий')
  const [email, setEmail] = React.useState('pochta@yandex.ru')

  function onSubmit(e) {
    e.preventDefault()
    console.log(name);
    console.log(email);
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSaveAll(e) {
    console.log(' -> ');
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
              value={name}
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
              value={email}
              onChange={handleChangeEmail}
              id="profile-email"
              className="profile__input"
              name="email"
              type="email"
              placeholder="Электронная почта пользователя"
              required
            />
          </div>

          <button
            id="profile-save"
            className="profile__save"
            type="submit"
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
        </form>
      </section>
    </>

  );
}

export default Profile;

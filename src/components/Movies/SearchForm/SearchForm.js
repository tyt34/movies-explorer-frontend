import React from 'react'
import './SearchForm.css'
import * as filter from '../../../utils/utils'

function SearchForm(props) {
  const [focus, setFocus] = React.useState(false)

  React.useEffect( () => {
    // отображение фильмов при заходе на страницу
    // если до этого производился поиск
    if (localStorage.cards !== undefined) {
      props.setCards(filter.filter(JSON.parse(localStorage.allFilms), localStorage.film, localStorage.check))
    }
  }, [props.check])

  function handleChangeFilm(e) {
    props.setFilm(e.target.value)
  }

  function handeFocus() {
    setFocus(true)
  }

  function handeBlur() {
    setFocus(false)
  }

  function handeClickOnBlock(e) {
    document.getElementById('input').select()
  }

  return (
    <>
      <form
        className={focus ? "search-focus search" : "search"}
        onClick={handeClickOnBlock}
      >
        <input
          id="input"
          className="search__area"
          type="text"
          value={props.film}
          onChange={handleChangeFilm}
          onFocus={handeFocus}
          onBlur={handeBlur}
        >
        </input>
        <input
          type="submit"
          className="search__input"
          value=""
          onClick={props.handleSearch}
        >
        </input>
      </form>
      <div className="search__text">
        <span
          className="search__error"
        >
          {props.textErr}
        </span>
      </div>
    </>
  )
}

export default SearchForm

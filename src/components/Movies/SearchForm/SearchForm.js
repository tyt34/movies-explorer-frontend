import React from 'react'
import './SearchForm.css'
import * as filter from '../../../utils/utils'

function SearchForm(props) {
  const [focus, setFocus] = React.useState(false)

  React.useEffect( () => {
    props.setCards(filter.filter(props.fullCards, props.film, props.check))
  }, [props.check])

  React.useEffect( () => {
    if (localStorage.cards !== undefined) {
      let arrMount = JSON.parse(localStorage.cards)
      props.setCards(filter.filter(arrMount, localStorage.film, props.check))
    }
  }, [])

  function handleChangeFilm(e) {
    props.setFilm(e.target.value)
  }

  function handeFocus() {
    setFocus(true)
  }

  function handeBlur() {
    setFocus(false)
  }


  return (
    <>
      <form
        className={focus ? "search-focus search" : "search"}
      >
        <input
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

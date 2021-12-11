import React from 'react'
import './SearchForm.css';

function SearchForm() {
  const [film, setFilm] = React.useState('')
  const [focus, setFocus] = React.useState(false)


  function handleChangeFilm(e) {
    setFilm(e.target.value);
    console.log(film);
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
          value={film}
          onChange={handleChangeFilm}
          onFocus={handeFocus}
          onBlur={handeBlur}
        >
        </input>
        <input
          type="submit"
          className="search__input"
          value=""
        >
        </input>
      </form>
    </>

  );
}

export default SearchForm;

/*

*/

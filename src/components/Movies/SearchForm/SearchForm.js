import React from 'react'
import './SearchForm.css';

function SearchForm() {
  const [film, setFilm] = React.useState('')

  function handleChangeFilm(e) {
    setFilm(e.target.value);
    console.log(film);
  }

  return (
    <>
      <form className="search">
        <input
          className="search__area"
          type="text"
          value={film}
          onChange={handleChangeFilm}
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

import React from 'react'
import './Movies.css'
import * as moviesApi from '../../utils/MoviesApi'
import * as api from '../../utils/MainApi.js'
import * as filter from '../../utils/utils'
import SearchForm from './SearchForm/SearchForm'
import Preloader from './Preloader/Preloader'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import Filter from './Filter/Filter'
import InsteadPrel from './InsteadPrel/InsteadPrel'
import {
  infoSearchNotInfo,
  infoSearchNotConnect
} from '../../utils/constants.js'

function Movies() {
  const [cards, setCards] = React.useState([])
  const [fullCards, setFullCards] = React.useState([])
  const [close, setClose] = React.useState(true)
  const [instead, setInstead] = React.useState(true)
  const [check, setCheck] = React.useState(false)
  const [savedFilms, setSavedFilms] = React.useState([])
  const [film, setFilm] = React.useState('')
  const [textErr, setTextErr] = React.useState('')

  React.useEffect( () => {
    updateSavedFilms()
  },[])

  React.useEffect( () => {
    updateSavedFilms()
  },[check])

  function updateSavedFilms() {
    api.getSavedFilms()
    .then( (res) => {
      setSavedFilms(res.data)
    })
    .catch(
      (err) => {
        console.log('1 Ошибка ===> ', err)
      }
    )
  }

  function handleSearch(e) {
    e.preventDefault()
    setClose(false)
    if (film === '') {
      setTextErr(infoSearchNotInfo)
      setClose(true)
      setCards([])
    } else if (localStorage.allFilms === undefined) {
      setTextErr('')
      moviesApi.getContent()
        .then((obj) => {
          setClose(true)
          setFullCards(filter.filter(obj, film, false))
          setCards(filter.filter(obj, film, check))
          localStorage.setItem('check', check)
          localStorage.setItem('film', film)
          localStorage.setItem('cards', JSON.stringify(filter.filter(obj, film, check)))
          localStorage.setItem('allFilms', JSON.stringify(obj))
          if (filter.filter(obj, film, check).length === 0) { // найдено хоть что то или нет
            setInstead(false)
          } else {
            setInstead(true)
          }
        })
        .catch( err => {
          setClose(true)
          console.log('Ошибка 1: ', err)
          setTextErr(infoSearchNotConnect)
        })
    } else if (localStorage.allFilms !== undefined) {
      setFullCards(filter.filter(JSON.parse(localStorage.allFilms), film, false))
      setCards(filter.filter(JSON.parse(localStorage.allFilms), film, check))
      localStorage.setItem('check', check)
      localStorage.setItem('film', film)
      localStorage.setItem('cards', JSON.stringify(filter.filter(JSON.parse(localStorage.allFilms), film, check)))
      setClose(true)
      if (filter.filter(JSON.parse(localStorage.allFilms), film, check).length === 0) { // найдено хоть что то или нет
        setInstead(false)
      } else {
        setInstead(true)
      }
    }
  }

  return (
    <>
      <div className="movies">
        <SearchForm
          cards={cards}
          setCards={setCards}
          setClose={setClose}
          setInstead={setInstead}
          check={check}
          close={close}
          fullCards={fullCards}

          handleSearch={handleSearch}

          film={film}
          setFilm={setFilm}
          textErr={textErr}
        />
        <Filter
          check={check}
          setCheck={setCheck}
        />
      </div>
      <Preloader
        close={close}
      />
      <InsteadPrel
        instead={instead}
      />
      <MoviesCardList
        cards={cards}
        check={check}
        typePageMovies={true}
        savedFilms={savedFilms}
        setSavedFilms={setSavedFilms}
      />
    </>
  )
}

export default Movies

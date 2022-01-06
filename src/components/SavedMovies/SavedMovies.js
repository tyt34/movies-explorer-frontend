import React, { useEffect, useState } from "react"
import './SavedMovies.css'
import SearchForm from '../Movies/SearchForm/SearchForm'
import Preloader from '../Movies/Preloader/Preloader'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'
import Filter from '../Movies/Filter/Filter'
import * as api from '../../utils/MainApi.js'
import InsteadPrel from '../Movies/InsteadPrel/InsteadPrel'
import * as filter from '../../utils/utils'
import {
  infoSearchNotInfo
} from '../../utils/constants.js'

function SavedMovies() {
  const [cardsSave, setCardsSave] = React.useState([])

  const [findCard, setFindCard] = React.useState([])

  const [close, setClose] = React.useState(true)
  const [instead, setInstead] = React.useState(true)
  const [check, setCheck] = React.useState(false)

  const [film, setFilm] = React.useState('')
  const [textErr, setTextErr] = React.useState('')

  React.useEffect( () => {
    updateSavedFilms()
  }, [])

  function handleSearch(e) {
    e.preventDefault()
    setClose(false)
    if (film === '') {
      setTextErr(infoSearchNotInfo)
      setClose(true)
      setFindCard(cardsSave)
    } else {
      setTextErr('')
      setClose(true)
      setFindCard(filter.filter(cardsSave, film, check))
      if (filter.filter(cardsSave, film, check).length === 0) { // найдено хоть что то или нет
        setInstead(false)
      } else {
        setInstead(true)
      }
    }
  }

  React.useEffect( () => {
    if (check) {
      setFindCard(filter.filter(cardsSave, film, check))
    } else {
      updateSavedFilms()
    }
  }, [check])

  function updateFilms() {
    api.getSavedFilms()
    .then( (res) => {
      setCardsSave(res.data)
    })
    .catch(
      (err) => {
        console.log('Err#11 ',err)
      }
    )
  }

  function updateSavedFilms() {
    api.getSavedFilms()
    .then( (res) => {
      setCardsSave(res.data)
      setFindCard(res.data)
    })
    .catch(
      (err) => {
        console.log('Err#12 ',err)
      }
    )
  }

  return (
    <>
      <div className="movies">
        <SearchForm
          cards={cardsSave}
          setCards={setCardsSave}
          setClose={setClose}
          setInstead={setInstead}
          check={check}
          close={close}
          fullCards={cardsSave}
          setFullCards={setCardsSave}

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
        typePageMovies={false}
        cards={findCard}
        setCards={setCardsSave}
        savedFilms={cardsSave}
        setFindCard={setFindCard}
        check={check}
      />
    </>
  )
}

export default SavedMovies

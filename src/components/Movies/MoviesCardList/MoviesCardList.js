import React, { useEffect, useState } from "react"
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import * as api from '../../../utils/MainApi.js'
import {
  smallScreen,
  medScreen,
  bigScreen,
  smallCardsOnPage,
  medCardsOnPage,
  bigCardsOnPage,
  hugeCardsOnPage,
  pageWithImgs,
  addSmallCardsOnPage,
  addMedCardsOnPage,
  addBigCardsOnPage,
  addHugeCardsOnPage,
} from '../../../utils/constants.js'

function MoviesCardList(props) {
  const [num, setNum] = React.useState(smallCardsOnPage)
  const { width } = useWindowDimensions()
  const [butAdd, setButAdd] = React.useState(false)
  const nowUrl = window.location.href.split('/')

  React.useEffect( () => {
    if (nowUrl[nowUrl.length-1] === 'saved-movies') {
      setNum(Infinity)
    } else {
      if (width < smallScreen) {
        setNum(smallCardsOnPage)
      } else if (width < medScreen) {
        setNum(medCardsOnPage)
      } else if (width < bigScreen) {
        setNum(bigCardsOnPage)
      } else {
        setNum(hugeCardsOnPage) // more 1280
      }
    }
  }, [])

  React.useEffect( () => {
    if (nowUrl[nowUrl.length-1] === 'saved-movies') {
      setNum(Infinity)
    } else {
      if (width < smallScreen) {
        setNum(smallCardsOnPage)
      } else if (width < medScreen) {
        setNum(medCardsOnPage)
      } else if (width < bigScreen) {
        setNum(bigCardsOnPage)
      } else {
        setNum(hugeCardsOnPage)
      }
    }
  }, [width])

  React.useEffect( () => {
    let cardOnPage = document.getElementsByClassName('card').length
    if (cardOnPage < props.cards.length) {
      setButAdd(true)
    } else {
      setButAdd(false)
    }
  })

  function handleAdd() {
    if (width < smallScreen) {
      setNum(num + addSmallCardsOnPage)
    } else if (width < medScreen) {
      setNum(num + addMedCardsOnPage)
    } else if (width < bigScreen) {
      setNum(num + addBigCardsOnPage)
    } else {
      setNum(num + addHugeCardsOnPage)
    }
  }

  function getWindowDimensions() {
    const { innerWidth: width } = window
    return {
      width,
    }
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    )

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions())
      }

      window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
      }, [])

    return windowDimensions
  }

  function changeTime(time) {
    let hours = Math.floor(time/60)
    let mins = time - (hours*60)
    if ((hours === 1) || (hours > 1)) {
      return hours+'ч '+mins+'м'
    } else {
      return mins+'м'
    }
  }

  function changeFindCards(needCard) {
    let arr = props.cards
    for(let i=0; i < props.cards.length; i++) {
       if(props.cards[i]._id === needCard[0]._id) {
         arr.splice(i,1)
         props.setFindCard([...arr])
       }
    }
  }

  function changeSavedCards(needCard) {
    let arr = props.savedFilms
    for(let i=0; i < props.cards.length; i++) {
       if(props.cards[i]._id === needCard[0]._id) {
         arr.splice(i,1)
         props.setSavedFilms([...arr])
       }
    }
  }

  function handleCardLikeDislike(film, isLike) {
    let needCard
    if (nowUrl[nowUrl.length-1] === 'saved-movies') { // saved-movies
      needCard = props.savedFilms.filter( (card) => {
        if (card.movieId === film.num) return card
      })
      api.delLike(needCard[0]._id)
      .then( (newFilm) => {
        changeFindCards(needCard)
      })
      .catch(
        (err) => {
          console.log('Err#7 ',err)
        }
      )
    } else { /////////////////////////////////////////// movies
      if (isLike) {
        needCard = props.savedFilms.filter( (card) => {
          if (card.movieId === film.num) return card
        })
        api.delLike(needCard[0]._id)
        .then( (newFilm) => {
          changeSavedCards(needCard)
        })
        .catch(
          (err) => {
            console.log('Err#8 ',err)
          }
        )
      } else if (!isLike) {
        let arr = props.savedFilms
        needCard = props.cards.filter( (card) => {
          if (card.id === film.num) return card
        })
        api.sendLike(needCard[0])
        .then( (newFilm) => {
          arr.push(needCard[0])
          props.setSavedFilms(arr)
          props.updateSaved()
          // пока не понимаю, как можно убрать лайк не получая _id,
          // которое получается только с данными от сервера
        })
        .catch(
          (err) => {
            console.log('Err#9 ',err)
          }
        )
      }
    }
  }

  function searchImg(card) {
    if (card.image.url === undefined) {
      return card.image
    } else {
      return pageWithImgs + card.image.url
    }
  }

  function searchID(card) {
    if (card.movieId) {
      return card.movieId
    } else if (card.num) {
      return card.num
    } else if (card.id) {
      return card.id
    }
  }

  function searchTrailer(card) {
    if (card.trailer) {
      return card.trailer
    } else if (card.trailerLink) {
      return card.trailerLink
    }
  }

  return (
    <>
      <div className="list__line">
      </div>
      <div className="list">
        {
          props.cards.slice(0, num).map( (card, i) =>
            (
              <MoviesCard
                key={searchID(card)}
                img={searchImg(card)}
                name={card.nameRU}
                time={changeTime(card.duration)}
                typePageMovies={props.typePageMovies}
                onCardLike={handleCardLikeDislike}
                num={searchID(card)}
                savedFilms={props.savedFilms}
                setSavedFilms={props.setSavedFilms}
                trailer={searchTrailer(card)}
                title={card.description}
              />
            )
          )
        }
      </div>
      <button
        id="list__add"
        className={butAdd ? "list__but list__but-open" : "list__but"}
        type="button"
        onClick={handleAdd}
      >
        Ещё
      </button>
    </>
  )
}

export default MoviesCardList

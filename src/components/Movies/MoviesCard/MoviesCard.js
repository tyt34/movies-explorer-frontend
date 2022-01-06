import React from 'react'
import './MoviesCard.css'
import {
  numFirstDot
} from '../../../utils/constants.js'

function MoviesCard(props) {
  const [isLike, setIsLike] = React.useState('')
  const [endWord, setEndWord] = React.useState(numFirstDot)

  React.useEffect( () => {
    function getLike() {
      return props.savedFilms.some((i) => {
        return i.movieId === props.num
      })
    }
    setIsLike(getLike())
  }, [props.savedFilms])

  React.useEffect( () => {
    for (let w=numFirstDot; w<props.title.length; w++) {
      if (props.title[w] === '.') {
        setEndWord(w+1)
        return
      }
    }
  }, [])

  let isLiked = props.savedFilms.some((i) => {
    return i.movieId === props.num
  })

  let cardLikeOrDel

  function handleLikeClick() {
    setIsLike(!isLike)
    props.onCardLike(props, isLike)
  }

  if (props.typePageMovies === true) {
    cardLikeOrDel = `${
      isLike ? "card__button card__like" : "card__button card__dislike"
    }`
  } else {
    cardLikeOrDel = `${"card__button card__del"}`
  }

  function relocateOnTrailer() {
    window.open(props.trailer)
  }

  return (
    <>
      <section className="card">
        <img
          className="card__img"
          alt='Постер фильма'
          src={props.img}
          title={props.title.substr(0, endWord)}
          onClick={relocateOnTrailer}
        />
        <div className="card__panel">
          <span
            className="card__name"
          >
            {props.name}
          </span>
          <div
            className="card__type"
            onClick={handleLikeClick}
          >
            <button
              className={cardLikeOrDel}
              type="button"
            >
            </button>
          </div>
        </div>

        <div className="card__line">
        </div>
        <span
          className="card__time"
        >
          {props.time}
        </span>
      </section>
    </>
  )
}

export default MoviesCard

import React from 'react'
import './MoviesCard.css'

function MoviesCard(props) {
  const [isLike, setIsLike] = React.useState('')

  React.useEffect( () => {
    function getLike() {
      return props.savedFilms.some((i) => {
        return i.movieId === props.num
      })
    }
    setIsLike(getLike())
  }, [props.savedFilms])

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
          alt="логотип"
          src={props.img}
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

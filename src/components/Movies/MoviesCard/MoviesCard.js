import React from 'react'
import './MoviesCard.css';

function MoviesCard(props) {
  const [isLike, setIsLike] = React.useState(false);

  let cardLikeOrDel

  function handleLikeClick() {
    setIsLike(!isLike);
  }

  if (props.typePageMovies === true) {
    cardLikeOrDel = `${
      isLike ? "card__button card__like" : "card__button card__dislike"
    }`;
  } else {
    cardLikeOrDel = `${"card__button card__del"}`
  }

  return (
    <>
      <section className="card">
        <img
          className="card__img"
          alt="логотип"
          src={props.img}
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
  );
}

export default MoviesCard;

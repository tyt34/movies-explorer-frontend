import React, { useEffect, useState } from "react";
import './MoviesCardList.css';
import cards from '../../../utils/utils'
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList(props) {
  const [num, setNum] = React.useState(5);
  const { width } = useWindowDimensions();

  React.useEffect( () => {
    console.log('start -> ', width);
    if (width < 767) {
      setNum(5)
    } else if (width < 1279) {
      setNum(8)
    } else {
      setNum(16)
    }
  }, [])

  function handleAdd() {
    console.log(' now ',width);
    if (width < 767) {
      setNum(num+5)
    } else if (width < 1279) {
      setNum(num+8)
    } else {
      setNum(num+16)
    }
  }


  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    return windowDimensions;
  }

  return (
    <>
      <div className="list__line">
      </div>
      <div className="list">
        {
          cards.slice(0, num).map( (card, i) => (<MoviesCard
            key={i}
            img={card.img}
            name={card.name+' '+i}
            time={card.time}
            typePageMovies={props.typePageMovies}
          />)
          )
        }
      </div>
      <button
        id="list__add"
        className="list__but"
        type="button"
        onClick={handleAdd}
      >
        Ещё
      </button>
    </>

  );
}

export default MoviesCardList;

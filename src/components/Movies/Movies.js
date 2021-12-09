import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Filter from './Filter/Filter';


function Movies() {
  return (
    <>
      <div className="movies">
        <SearchForm />
        <Filter />
      </div>
      <Preloader />
      <MoviesCardList
        typePageMovies={true}
      />
    </>
  );
}

export default Movies;

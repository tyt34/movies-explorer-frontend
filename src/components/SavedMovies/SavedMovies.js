import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Preloader from '../Movies/Preloader/Preloader';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Filter from '../Movies/Filter/Filter';

function SavedMovies() {
  return (
    <>
      <div className="movies">
        <SearchForm />
        <Filter />
      </div>
      <Preloader />
      <MoviesCardList
        typePageMovies={false}
      />
    </>
  );
}

export default SavedMovies;

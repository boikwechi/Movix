import '../css/Favourites.css'; 
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';
function Favorites(){
  const {favorites } = useMovieContext();
  if (favorites) {
    return(
    <div className="favorites">
      <h2>Your favorite movies...</h2>
    <div className="movies-grid">
            {favorites.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
        </div>
    )
  }
  return (
    <div className="favorites-empty">
      <h2>Favorite Page</h2>
      <p>Start adding movies to your favorite and they will appear here</p>
    </div>
  );
}
export default Favorites;
// This code defines a functional component called favorite that renders a message indicating that
//  the user can start adding movies to their favorites.
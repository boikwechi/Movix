import '../css/MovieCard.css';
import { useMovieContext } from '../contexts/MovieContext';

function MovieCard({ movie }) 
{
    const { addToFavorites, removeFavorites, isFavorite } = useMovieContext();
    const favorite = isFavorite(movie.id);
    function onFvaoriteClick(e) {
        e.preventDefault();
        if (favorite) {
            // If the movie is already a favorite, remove it from favorites
            removeFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }
   return (
    <div className="movie-card">
            <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active":""}`}onClick={onFvaoriteClick}>
                     ❤️ 
                    </button>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>Release Date: {movie.release_date}</p>
           </div>
   </div>  
  )
}
export default MovieCard;
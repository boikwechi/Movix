const API_KEY = '057be6b14ba4e4887af6149ecce7543c';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
    console.log(API_KEY);
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}
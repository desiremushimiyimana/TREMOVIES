import axios from 'axios';

// Create an instance of Axios with default base URL
const apiClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: import.meta.env.VITE_TREMOVIES_API_KEY,
    },
});

// Fetch movies based on search query
export const searchMovies = async (query, page = 1) => {
    const response = await apiClient.get('/search/movie', {
        params: { query, page },
    });
    return response.data;
};

// Fetch movie details by ID
export const getMovieDetails = async (id) => {
    const response = await apiClient.get(`/movie/${id}`);
    return response.data;
};

// Fetch trending movies
export const getTrendingMovies = async (page = 1) => {
    const response = await apiClient.get('/trending/movie/week', {
        params: { page },
    });
    return response.data;
};

// Fetch movie credits (cast and crew)
export const getMovieCredits = async (id) => {
    const response = await apiClient.get(`/movie/${id}/credits`);
    return response.data;
};

// Fetch movie videos (trailers, teasers, etc.)
export const getMovieVideos = async (id) => {
    const response = await apiClient.get(`/movie/${id}/videos`);
    return response.data;
};
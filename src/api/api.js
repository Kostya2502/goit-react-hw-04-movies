const KEY = 'c1e167f6e5986300d5aeaeb3204111db';
const BaseURL = 'https://api.themoviedb.org/3';
export const ImageURL = 'https://image.tmdb.org/t/p/w500';

async function fetchWithErrorHandling(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

export function fetchTrendMovies() {
    return fetchWithErrorHandling(`${BaseURL}/trending/all/day?api_key=${KEY}`)
}

export function fetchSearchMovies(name) {
    return fetchWithErrorHandling(`${BaseURL}/search/movie?api_key=${KEY}&query=${name}&language=en-US&page=1&include_adult=false`)
}

export function fetchDetailsMovies(id) {
    return fetchWithErrorHandling(`${BaseURL}/movie/${id}?api_key=${KEY}&language=en-US`)
}

export function fetchActorsMovies(id) {
    return fetchWithErrorHandling(`${BaseURL}/movie/${id}/credits?api_key=${KEY}&language=en-US`)
}

// удалить page_1 ?

export function fetchReviewsMovies(id) {
    return fetchWithErrorHandling(`${BaseURL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`)
}

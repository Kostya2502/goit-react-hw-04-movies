import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchSearchMovies } from '../api/api';
import MovieList from '../components/movieList/MovieList';
import SearchBar from '../components/searchBar/SearchBar';

const MoviesView = () => {
    const [movies, setMovies] = useState(null);
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (!query) {
            return;
        }

        fetchSearchMovies(query).then(request => {
            if (!request.results.length) {
                toast.error('Try again');
                return;
            }
            setMovies(request.results);

        });
    }, [query]);

    const onClick = request => {
        setQuery(request);
    };

    return (
        <>
            <SearchBar onClick={onClick} />
            {movies && <MovieList movies={movies} />}
        </>
    );
}

export default MoviesView;
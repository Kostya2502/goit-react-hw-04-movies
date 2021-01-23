import { useEffect, useState } from "react";
import { fetchTrendMovies } from "../../api/api";
import MovieList from "../../components/movieList/MovieList";
import { title } from './HomeView.module.css';



export default function HomeView() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendMovies()
            .then(request => setMovies(request.results));
    }, [])

    return (
        <>
            <h1 className={title}> Trending today </h1>
            <MovieList movies={movies} />
        </>
    );
}
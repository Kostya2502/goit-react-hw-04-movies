import { list, item, title, subtitle, image } from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';
import { ImageURL } from '../../api/api';

const MovieList = ({ movies, query }) => {
    const location = useLocation()
    return (
        <>
            <ul className={list}>
                {movies.map(movie => (
                    <li key={movie.id} className={item}>
                        <Link to={{
                            pathname: `/movies/${movie.id}`,
                            state: { from: location.pathname, query },
                        }} className={title}>
                            <img
                                className={image}
                                src={ImageURL + movie.poster_path}
                                alt={movie.title || movie.name}
                                width="300"
                                height="450"
                            />
                            <p className={subtitle}>{movie.title || movie.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default MovieList;
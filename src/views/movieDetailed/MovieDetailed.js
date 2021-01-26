import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Switch, NavLink, useParams, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import { fetchDetailsMovies, ImageURL } from '../../api/api';
import LoaderSpinner from '../../components/loader/LoaderSpinner';
import { container, image, box, title, rating, subtitle, descr, genres, link, activeLink, button } from './MovieDetailed.module.css';

const MovieCast = lazy(() => import('../movieCast/MovieCast' /* webpackChunkName: "MovieCast" */),);
const MovieReview = lazy(() => import('../movieReview/MovieReview' /* webpackChunkName: "MovieReview" */),);

const MovieDetailed = () => {

    const history = useHistory();
    const location = useLocation();
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const { url, path } = useRouteMatch();
    const [state, setState] = useState({})


    useEffect(() => {
        fetchDetailsMovies(movieId)
            .then(movie => {
                setMovie(movie);
            });
    }, [movieId]);

    useEffect(() => {
        if (location.state) { setState({ ...location.state }) }
        console.log(location);
    }, []);

    const onGoBack = () => {
        if (state.query) {
            history.push({ pathname: state.from, search: `?query=${state.query}`, state: { query: state.query } });
        } else history.push('/');
        // history.push(location?.state?.from ?? '/');
    };


    return (
        <>
            {movie && (
                <>
                    <button type="button" className={button} onClick={onGoBack}>GoBack</button>
                    <div>
                        <div className={container}>
                            <img
                                className={image}
                                src={ImageURL + movie.poster_path}
                                alt={movie.title || movie.name}
                                widht="300"
                                height="450"
                            />
                            <div className={box}>
                                <h2 className={title}>{movie.title || movie.name}</h2>
                                <p className={rating}>
                                    User Score:
            <span className={descr}> {movie.vote_average} </span>
                                </p>
                                <p className={subtitle}>
                                    Overview:
            <span className={descr}>{movie.overview}</span>
                                </p>
                                <p className={subtitle}>
                                    Genres:
            <span className={genres}>
                                        {movie.genres.map(genre => genre.name).join(' / ')}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <hr />

                        <nav>
                            <NavLink
                                to={`${url}/cast`}
                                // to={{
                                //     pathname: `${url}/cast`,
                                //     state: { from: location.state ? location.state.from : '/' },
                                // }}
                                className={link}
                                activeClassName={activeLink}
                            >
                                Cast
            </NavLink>
                            <NavLink
                                to={`${url}/reviews`}
                                // to={{
                                //     pathname: `${url}/reviews`,
                                //     state: { from: location.state ? location.state.from : '/' },
                                // }}
                                className={link}
                                activeClassName={activeLink}
                            >
                                Reviews
            </NavLink>
                        </nav>

                        <Suspense fallback={<LoaderSpinner />}>
                            <Switch>
                                <Route path={`${path}/cast`}>
                                    <MovieCast movieId={movieId} />
                                </Route>

                                <Route path={`${path}/reviews`}>
                                    <MovieReview movieId={movieId} />
                                </Route>
                            </Switch>
                        </Suspense>
                    </div>
                </>
            )}
        </>
    );
};

export default MovieDetailed;























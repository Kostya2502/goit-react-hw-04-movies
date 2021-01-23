// import React, { lazy, Suspense } from 'react';
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import MovieDetailed from '../views/movieDetailed/MovieDetailed';
// import HomeView from '../views/homeView/HomeView';
// import MoviesView from '../views/MoviesView';
import Container from './container/Container';
import Header from './header/Header';
import LoaderSpinner from './loader/LoaderSpinner';

const HomeView = lazy(() => import('../views/homeView/HomeView' /*webpackChunkName: "HomeView"*/));
const MoviesView = lazy(() => import('../views/MoviesView' /* webpackChunkName: "MoviesView" */));
const MovieDetailed = lazy(() => import('../views/movieDetailed/MovieDetailed' /* webpackChunkName: "MovieDetailedView" */));

const App = () => {
    return (
        <>
            <Container>
                <Header />
                <Suspense fallback={<LoaderSpinner />}>
                    <Switch>
                        <Route path='/' exact><HomeView /></Route>
                        <Route path='/movies' exact><MoviesView /></Route>
                        <Route path='/movies/:movieId'><MovieDetailed /></Route>
                    </Switch>
                </Suspense>
            </Container>
        </>
    );
}

export default App;
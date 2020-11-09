import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './reduxapp/store.js';
import Header from './Header/Header.jsx';
import Body from './Body/Body.jsx';
import MoviesSearch from './Searcher/MoviesSearch/MoviesSearch.jsx';
import Movies from './Movies/Movies.jsx';
import MovieDetails from './Movies/MovieDetails/MovieDetails.jsx';
import Genres from './Genres/Genres.jsx';
import GenreMovies from './Genres/GenreMovies.jsx';
import TvshowsSearch from './Searcher/TvshowsSearch/TvshowsSearch.jsx';
import TvshowDetails from './Tvshow/TvshowDetails.jsx';
import Footer from './Footer/Footer.jsx';


//envuelvo con Provider para utilizar redux
//envuelvo con BrowserRouter para utilizar router
function App() {
    return (
    <div className = "App" >
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route path = "/"  exact component={Body} />
                        <Route path = "/searcher/"  exact component={Body} /> 
                        <Route path = "/searcher/:movieSearchSrc" component={MoviesSearch} exact/>
                        <Route path = "/searcherTvshows/"  exact component={Body} />
                        <Route path = "/searcherTvshows/:tvshowSearchSrc" component={TvshowsSearch} exact/>
                        <Route path = "/genres" component={Genres} exact/>
                        <Route path = "/genres/:genreName/:genreId" component={GenreMovies} exact/>
                        <Route path = "/:id" component={Movies} exact/>
                        <Route path = "/movie/:movieId" component={MovieDetails} exact/>
                        <Route path = "/tvshow/:tvshowId" component={TvshowDetails} exact/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        </Provider>
    </div>);
}

export default App;

import axios from 'axios';
//Acciones llaman al reducer, que a su vez llama a la app
//Usamos despachadores de acciones, que son funciones que despachan acciones:

export const setMoviesSearchAction = (dispatch, movieSearchSrc) => {
    //petición de las movies según movieSearchSrc
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES&query=${movieSearchSrc}`)
    .then(res => {
        const results = res.data.results;
        dispatch({
            type: 'SET_MOVIES_SEARCH',
            payload: results,
        }); 
    })
    .catch(console.error) 
}

export const setTvshowsSearchAction = (dispatch, tvshowsSearchSrc) => {
    //petición de las movies según tvShowSearch
    axios.get(`https://api.themoviedb.org/3/search/tv?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES&page=1&include_adult=fales&query=${tvshowsSearchSrc}`)
    .then(res => {
        const results = res.data.results;
        dispatch({
            type: 'SET_TV_SHOWS_SEARCH',
            payload: results,
        }); 
    })
    .catch(console.error) 
}

export const setTvshowDetailsAction = (dispatch, tvshowId) => {
    //petición del detalle de la serie según tvshowId
    axios.get(`https://api.themoviedb.org/3/tv/${tvshowId}?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES`)
    .then(res => {
        const data = res.data;
        dispatch({ 
            type: 'SET_TV_SHOW_DETAILS',
            payload: data,
        });
    })
    .catch(console.error)
}

export const setCastTvshowAction = (dispatch, tvshowId) => {
    //peticion de casting de una serie (8 actores principales)
    axios.get(`https://api.themoviedb.org/3/tv/${tvshowId}/credits?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES`)
    .then(res => {
        const cast = res.data.cast.slice(0, 8);
        dispatch({ 
            type: 'SET_CAST_TV_SHOW',
            payload: cast,
        });
    })
    .catch(console.error)
}

export const setSimilarTvshowsAction = (dispatch, tvshowId) => {
     //peticion de series similares a una serie (8)
     axios.get(`https://api.themoviedb.org/3/tv/${tvshowId}/similar?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES&page=1`)
    .then(res => {
        const results = res.data.results.slice(0, 8);
        dispatch({ 
            type: 'SET_SIMILAR_TV_SHOWS',
            payload: results,
        });
    })
    .catch(console.error)
}


export const setMoviesAction = (dispatch, movieType) => {
    //petición de las movies según movieType
    axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES`)
    .then(res => {
        const results = res.data.results;
        if (movieType === 'top_rated'){ //si esl top_rated se renderizan 10 películas
            dispatch({
                type: 'SET_MOVIES',
                payload: results.slice(0, 10),
            });
        }
        else dispatch({ // en caso contrario se renderizan por defecto 20 películas
            type: 'SET_MOVIES',
            payload: results,
            });
        })
    .catch(console.error)
}

export const setMovieDetailsAction = (dispatch, movieId) => {
    //petición de las movies según movieType
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES`)
    .then(res => {
        const data = res.data;
        dispatch({ 
            type: 'SET_MOVIES_DETAILS',
            payload: data,
        });
    })
    .catch(console.error)
}

export const setCastMovieAction = (dispatch, movie) => {
    //peticion de casting de una película (8 actores principales)
    axios.get(`https://api.themoviedb.org/3/movie/${movie}/credits?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES`)
    .then(res => {
        const cast = res.data.cast.slice(0, 8);
        dispatch({ 
            type: 'SET_CAST_MOVIE',
            payload: cast,
        });
    })
    .catch(console.error)
}

export const setSimilarMoviesAction = (dispatch, movie) => {
    //peticion de películas similares a una película (8)
    axios.get(`https://api.themoviedb.org/3/movie/${movie}/similar?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES&page=1`)
   .then(res => {
       const results = res.data.results.slice(0, 8);
       dispatch({ 
           type: 'SET_SIMILAR_MOVIES',
           payload: results,
       });
   })
   .catch(console.error)
}

export const setGenresListAction = (dispatch) => {
    //petición de las movies según movieType
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES')
    .then(res => {
        const genres = res.data.genres;
        dispatch({
            type: 'SET_GENRES_LIST',
            payload: genres,
        }); 
    })
    .catch(console.error) 
}

export const setGenreMoviesAction = (dispatch, genreId) => {
    //petición de las movies según genreId
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES&with_genres=${genreId}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
    .then(res => {
        const results = res.data.results;
        dispatch({
            type: 'SET_GENRE_MOVIES',
            payload: results,
        }); 
    })
    .catch(console.error) 
}











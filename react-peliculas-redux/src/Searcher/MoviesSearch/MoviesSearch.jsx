import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { setMoviesSearchAction } from '../../reduxapp/actions.js';
import Movie from '../../Movies/Movie/Movie.jsx';
import './MoviesSearch.scss';

//Listado de películas según input del buscador
const MoviesSearch = props => {
    const movieSearchSrc = props.match.params.movieSearchSrc; //recuperamos la palabra introducida en el buscador

    const movies = useSelector( (state) => state.movies); 
    //console.log('PELISSEARCH.estado de las pelis del Buscador de la app es ', movies);
    const dispatch = useDispatch();
        
    //cuando el estado cambia, se produce la petición de las películas según la palabra introducida en el buscador
    useEffect(()=> {  
        setMoviesSearchAction(dispatch, movieSearchSrc);
    }, [dispatch, movieSearchSrc]) //incluimos dispatch para no warning de pérdida de dependencia

    return <div className="MoviesSearch">
        {movies?.map(movie => <Movie key={movie.id} movie={movie}/>)} 
    </div>
}

export default MoviesSearch;
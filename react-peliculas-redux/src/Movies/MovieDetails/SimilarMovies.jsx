import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setSimilarMoviesAction} from '../../reduxapp/actions.js';
import Movie from '../Movie/Movie.jsx';

//renderizo películas similares recogiendo de la props "movieId" de <SimilarMovies/> el movieId de la película
const SimilarMovies = movieId =>{ 
    
    const movie = movieId.movie;
    
    //Estado Global
    const movies = useSelector( (state) => state.movies); 
    //console.log('SIMILARMOVIES.estado del SimilarMovies de la película de la app es ', movies);

    //DISPATCH
    const dispatch = useDispatch();
    
    //al montar "SimilarMovies" hace la petición
    useEffect(() =>{
        setSimilarMoviesAction(dispatch, movie);
    }, [dispatch, movie]) //incluimos dispatch para no warning de pérdida de dependencia
    
    //renderiza  
    return( 
        <span className="SimilarMovies">
            {movies?.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </span> );
}

export default SimilarMovies;
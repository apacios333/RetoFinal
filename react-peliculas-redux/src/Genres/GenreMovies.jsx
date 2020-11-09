import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { setGenreMoviesAction } from '../reduxapp/actions.js';
import Movie from '../Movies/Movie/Movie.jsx';
import './GenreMovies.scss';


//Devuelve las pelis correspondientes a un género. 
const GenreMovies = props =>{

    const genreId = props.match.params.genreId;
    const movies = useSelector( (state) => state.movies); 
    //console.log('GENREMOVIES.estado de las pelis por genero de la app es ', movies);
    const dispatch = useDispatch();
    
    //petición de las movies según genreId
    useEffect(()=> {
        setGenreMoviesAction(dispatch, genreId);  
    }, [dispatch, genreId]) //incluimos dispatch para no warning de pérdida de dependencia
    
        return <div className="GenreMovies">
            {movies?.map(movie => <Movie key={movie.id} movie={movie}/>)} 
        </div>
}

export default GenreMovies;


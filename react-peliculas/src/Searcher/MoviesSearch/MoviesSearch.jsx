import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../../Movies/Movie/Movie.jsx';
import './MoviesSearch.scss';

//Listado de películas según input del buscador
const MoviesSearch = props => {
    const movieSearchSrc = props.match.params.movieSearchSrc; //recuperamos la palabra introducida en el buscador

    //inicializamos estado
    const [moviesSearch, setMoviesSearch] = useState([]); 
    
    //cuando el estado cambia, se produce la petición de las películas según la palabra introducida en el buscador
    useEffect(()=> {  
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES&query=${movieSearchSrc}`)
        .then(res => 
            setMoviesSearch(res.data.results))
        .catch(console.error)
    }, [moviesSearch]) 

    return <div className="MoviesSearch">
        {moviesSearch?.map(movie => <Movie key={movie.id} movie={movie}/>)} 
    </div>
}

export default MoviesSearch;



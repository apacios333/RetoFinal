import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../Movie/Movie.jsx';

//renderizo películas similares recogiendo de la props "movieId" de <SimilarMovies/> el movieId de la película
const SimilarMovies = movieId =>{ 
    
    const movie = movieId.movie;
    
    //estado
    const [movies, setMovies] = useState([]); 
    
    //peticion de películas similares a una película (8)
    //al montar "SimilarMovies" hace la petición
    useEffect(()=> {  
        axios.get(`https://api.themoviedb.org/3/movie/${movie}/similar?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES&page=1`)
        .then(res => setMovies(res.data.results.slice(0, 8))
            )
        .catch(console.error)
    }, [movie])
 
    return( 
        <span className="SimilarMovies">
            {movies?.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </span> );
}

export default SimilarMovies;
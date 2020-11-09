import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../Movies/Movie/Movie.jsx';
import './GenreMovies.scss';

//Devuelve las pelis correspondientes a un género. 
const GenreMovies = props =>{

    const genreId = props.match.params.genreId;
    const [moviesGenre, setMoviesGenre] = useState([]);
    
    //petición de las movies según generoId
    useEffect(()=> {  
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES&with_genres=${genreId}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
        .then(res => setMoviesGenre(res.data.results))
        .catch(console.error) 
    }, [genreId])
    
        return <div className="GenreMovies">
            {moviesGenre?.map(movie => <Movie key={movie.id} movie={movie}/>)} 
        </div>
}

export default GenreMovies;


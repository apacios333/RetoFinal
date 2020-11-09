import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie/Movie.jsx';
import './Movies.scss';


const Movies = props => {

    const movieType = props.match.params.id; //variable propiedad del tipo de movies
    const [movies, setMovies] = useState([]); //estado de las movies (inicialmente array vacía)
    //petición de las movies según movieType
    useEffect(()=> {  
        axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES`)
        .then(res => {
            //el "top10" sacamos 10 películas 
            if (movieType =="top_rated") setMovies(res.data.results.slice(0, 10)); 
            else  setMovies(res.data.results);
        })
        .catch(console.error)
    }, [movieType]) //poner [movieType] :ejecute el efecto (hacer la petición) cuando cambie movieType. Si poner [] entonces sólo hace useEffect cuando se monta el componente, no cambiaría cuando cambie movieType

    return <div className="Movies">
        {/*renderizamos el objeto movies con map. El ?, operador de operación segura, es para decir que si el estado es undefined, no hagas map. Por ejemplo si hubieramos definido useState(), sin inicializar con []
        Le pasamos el objeto movie y devuelve el componente Movie que tiene como prop "movie" que contiene el movie y como key movie.id, para que react sepa cuál es cada movie*/}
        {movies?.map(movie => <Movie key={movie.id} movie={movie}/>)} 
    </div>
}

export default Movies;
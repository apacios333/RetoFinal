import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { setMoviesAction } from '../reduxapp/actions.js';
import Movie from './Movie/Movie.jsx';
import './Movies.scss';


const Movies = props => {
    //la variable movies recibe una función selectora que tiene como parámentro el estado global de la app y devuelve el estado de "movies". Consumo así las "movies" desde el estado global Redux
    //useSelector: hook que extrae datos del store Redux usando una función selectora
    const movies = useSelector( (state) => state.movies); 
   // console.log('PELIS.estado de movies de la app es ', movies);
    
    //useDispatch: hook que llama a las acciones, despacha a las acciones
    const dispatch = useDispatch();
        
    const movieType = props.match.params.id; //variable propiedad del "tipo de movies" 
        
    //useEffect: Al actualizar el componente según movieType dispara el setMovieAction que despacha la acción  
    useEffect( () =>{
        setMoviesAction(dispatch, movieType);
    }, [dispatch, movieType]) //incluimos dispatch para no warning de pérdida de dependencia

    return <div className="Movies">
        {/*renderizamos el objeto movies con map. El ?, operador de operación segura, es para decir que si el estado es undefined, no hagas map. Por ejemplo si hubieramos definido useState(), sin inicializar con []
        Le pasamos el objeto movie y devuelve el componente Movie que tiene como prop "movie" que contiene el movie y como key movie.id, para que react sepa cuál es cada movie*/}
        {movies?.map(movie => <Movie key={movie.id} movie={movie}/>)} 
    </div>
}

export default Movies;
    
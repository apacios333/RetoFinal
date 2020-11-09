import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { setGenresListAction } from '../reduxapp/actions.js';
import ListGenres from './ListGenres.jsx';
import './Genres.scss';

const Genres = () =>{

    const genresList = useSelector( (state) => state.genresList); 
    //console.log('GENEROS.estado de los géneros de la app es ', genresList);
    const dispatch = useDispatch();


    //al montar "genres" hace la petición
    useEffect(()=> {
        setGenresListAction(dispatch);
    }, [dispatch]) //incluimos dispatch para no warning de pérdida de dependencia

    //renderiza la lista de géneros. <ListGenres/> en la props "value" lleva el estado de Genres, "genre" 
    return(
        <div className="Genres">
            <ul>
                {genresList?.map((genre) => <ListGenres className="ListGenres" key={genre.id} id={genre.id} value={genre.name}/>)}
            </ul> 
        </div>);
    
}

export default Genres;
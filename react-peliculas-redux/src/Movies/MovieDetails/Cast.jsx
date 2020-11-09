import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setCastMovieAction} from '../../reduxapp/actions.js';
import Actor from './Actor.jsx';

//renderizo los actores de la película recogiendo de la props "movieId" de <Cast/> el movieId de la película
const Cast = movieId =>{ 
    
    const movie = movieId.movie;
  
    //Estado Global
    const cast = useSelector( (state) => state.cast); 
    //console.log('CAST.estado del cast de la película de la app es ', cast);

    //DISPATCH
    const dispatch = useDispatch();
        
    //al montar el detalle de la película hace la petición, y cambia cuando cambia movie
    useEffect(() =>{
        setCastMovieAction(dispatch, movie);
    }, [dispatch, movie]) //incluimos dispatch para no warning de pérdida de dependencia

    //renderiza  
    return( 
        <span className="Cast">
            {cast?.map(actor => <Actor key={actor.id} actor={actor}/>)}
        </span> );
}

export default Cast;



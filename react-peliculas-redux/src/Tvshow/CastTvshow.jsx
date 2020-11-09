import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setCastTvshowAction} from '../reduxapp/actions.js';
import Actor from '../Movies/MovieDetails/Actor.jsx';

//renderizo los actores de la serie recogiendo de la props "tvshowId" de <Casttvshow/> el tvshowId de la serie
const CastTvshow = props =>{ 
   
    const tvshowId = props.tvshowId;

    //Estado Global
    const cast = useSelector( (state) => state.cast); 
    //console.log('CASTtvshow.estado del cast de la serie de la app es ', cast);

    //DISPATCH
    const dispatch = useDispatch();
        
    //al montar el detalle de la serie hace la petición, y cambia cuando cambia tvshow
    useEffect(() =>{
        setCastTvshowAction(dispatch, tvshowId);
    }, [dispatch, tvshowId]) //incluimos dispatch para no warning de pérdida de dependencia

    //renderiza  
    return( 
        <span className="CastTvshow">
            {cast?.map(actor => <Actor key={actor.id} actor={actor}/>)}
        </span> );
}

export default CastTvshow;
import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setSimilarTvshowsAction} from '../reduxapp/actions.js';
import Tvshow from './Tvshow.jsx';

//renderizo series similares recogiendo de la props "tvShowId" de <SimilarTvShows/> el tvShowId de la serie
const SimilarTvshows = props =>{ 
    
    const tvshowId = props.tvshowId;
    
    //Estado Global
    const tvshows = useSelector( (state) => state.tvshows); 
    //console.log('SIMILARTVSHOWS.estado del SimilarTvshows de la serie de la app es ', tvshows);

    //DISPATCH
    const dispatch = useDispatch();
    
    //al montar "SimilarTvShows" hace la petición
    useEffect(() =>{
        setSimilarTvshowsAction(dispatch, tvshowId);
    }, [dispatch, tvshowId]) //incluimos dispatch para no warning de pérdida de dependencia

    //renderiza  
    return( 
        <span className="SimilarTvshows">
            {tvshows?.map(tvshow => <Tvshow key={tvshow.id} tvshow={tvshow}/>)}
        </span> );
}

export default SimilarTvshows;
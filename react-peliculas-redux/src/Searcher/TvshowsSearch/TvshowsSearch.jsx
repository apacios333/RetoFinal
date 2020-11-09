import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { setTvshowsSearchAction } from '../../reduxapp/actions.js';
import Tvshow from '../../Tvshow/Tvshow.jsx';
import './TvshowsSearch.scss';

//Listado de películas según input del buscador
const TvshowsSearch = props => {
    const tvshowsSearchSrc = props.match.params.tvshowSearchSrc; //recuperamos la palabra introducida en el buscador
    
    const tvshowsSearch = useSelector( (state) => state.tvshowsSearch); 
    //console.log('SERIESSEARCH.estado de las series del Buscador de la app es ', TvshowsSearch);
    const dispatch = useDispatch();
    //cuando el estado cambia, se produce la petición de las películas según la palabra introducida en el buscador
    useEffect(()=> {  
        setTvshowsSearchAction(dispatch, tvshowsSearchSrc);
    }, [dispatch, tvshowsSearchSrc]) 

    return <div className="TvshowsSearch">
        {tvshowsSearch?.map(tvshow => <Tvshow key={tvshow.id} tvshow={tvshow}/>)} 
    </div>
}

export default TvshowsSearch;



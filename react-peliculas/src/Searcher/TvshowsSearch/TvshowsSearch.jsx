import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tvshow from '../../Tvshow/Tvshow.jsx';
import './TvshowsSearch.scss';

//Listado de películas según input del buscador
const TvshowsSearch = props => {
    const tvshowSearchSrc = props.match.params.tvshowSearchSrc; //recuperamos la palabra introducida en el buscador

    //inicializamos estado
    const [tvshows, setTvshows] = useState([]); 
    
    //cuando el estado cambia, se produce la petición de las películas según la palabra introducida en el buscador
    useEffect(()=> {  
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES&page=1&include_adult=fales&query=${tvshowSearchSrc}`)
        .then(res => 
            setTvshows(res.data.results))
        .catch(console.error)
    }, [tvshowSearchSrc]) 

    return <div className="TvshowsSearch">
        {tvshows?.map(tvshow => <Tvshow key={tvshow.id} tvshow={tvshow}/>)} 
    </div>
}

export default TvshowsSearch;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tvshow from './Tvshow.jsx';

//renderizo películas similares recogiendo de la props "movieId" de <SimilarMovies/> el movieId de la película
const SimilarTvshows = tvshowId =>{ 
    
    const tvshow = tvshowId.tvshow;
    
    //estado
    const [tvshows, setTvshows] = useState([]); 
    
    //peticion de películas similares a una película (8)
    //al montar "SimilarMovies" hace la petición
    useEffect(()=> {  
        axios.get(`https://api.themoviedb.org/3/tv/${tvshow}/similar?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES&page=1`)
        .then(res => setTvshows(res.data.results.slice(0, 8))
            )
        .catch(console.error)
    }, [tvshow])

    //renderiza  
    return( 
        <span className="SimilarTvshows">
            {tvshows?.map(tvshow => <Tvshow key={tvshow.id} tvshow={tvshow}/>)}
        </span> );
}

export default SimilarTvshows;
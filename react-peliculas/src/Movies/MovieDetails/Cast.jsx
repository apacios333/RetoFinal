import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Actor from './Actor.jsx';

//renderizo los actores de la película recogiendo de la props "movieId" de <Cast/> el movieId de la película
const Cast = movieId =>{ 
    
    const movie = movieId.movie;
    
    //estado
    const [cast, setCast] = useState([]); 
    
    //peticion de casting de una película (8 actores principales)
    //al montar hace la petición
    useEffect(()=> {  
        axios.get(`https://api.themoviedb.org/3/movie/${movie}/credits?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES`)
        .then(res => setCast(res.data.cast.slice(0, 8))
            )
        .catch(console.error)
    }, [movie])
  
    return( 
        <span className="Cast">
            {cast?.map(actor => <Actor key={actor.id} actor={actor}/>)}
        </span> );
}

export default Cast;



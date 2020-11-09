import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListGenres from './ListGenres.jsx';
import './Genres.scss';

const Genres = () =>{

    //estado
    const [genres, setGenres] = useState([]); 

    //al montar "genres" hace la petición
    useEffect(()=> {  
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES')
        .then(res => setGenres(res.data.genres))
        .catch(console.error)
    }, [])

    //renderiza la lista de géneros. <Listgenres/> en la props "value" lleva el estado de genres, "Genre" 
    return(
        <div className="Genres">
            <ul>
                {genres.map((genre) => <ListGenres className="ListGenres" key={genre.id} id={genre.id} value={genre.name}/>)}
            </ul> 
        </div>);
    
}

export default Genres;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyGenres from '../Movies/MovieDetails/MyGenres.jsx';
import CastTvshow from './CastTvshow.jsx';
import SimilarTvshows from './SimilarTvshows.jsx';
import './TvshowDetails.scss';

const TvshowDetails = (props)=>{
    
    const tvshowId = props.match.params.tvshowId;
    const [tvshowDetails, setTvshowDetails] = useState([]);
    const [myGenres, setMyGenres] = useState([]);
    
    //petición del detalle según movieId
    useEffect(()=> {  
        axios.get(`https://api.themoviedb.org/3/tv/${tvshowId}?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES`)
        .then(res => {
            setTvshowDetails(res.data);
            setMyGenres(res.data.genres);
            console.log(res.data);
        })
        .catch(console.error) 
    }, [tvshowId])

    return <div className="TvshowDetails">
        <div className="Detail">
            <span className="DetailName">
                <h2>{tvshowDetails.name}</h2>
                <p>{"(" + tvshowDetails.first_air_date + ")" + " ("+ tvshowDetails.episode_run_time + "')"}</p>
                <p> {"Temporadas " + tvshowDetails.number_of_seasons}</p>
                <img src={"https://image.tmdb.org/t/p/w300"+ tvshowDetails.poster_path} alt="imagen de la serie"></img>
                <p>{"Votos: " +tvshowDetails.vote_average}</p>
            </span>
            <span className="DetailSummary">
                <h3>Resumen</h3> 
                <p>{tvshowDetails.overview}</p>
                <p>{"* Título original: " + tvshowDetails.original_name + " * Idioma original: " + tvshowDetails.original_language }</p>
                
                <p>{"Popularidad: "+ tvshowDetails.popularity}</p>    
                <div>
                    {myGenres?.map((genre) => <MyGenres key={genre.id} id={genre.id} value={genre.name}/>)}
                </div>
            </span>
        </div>
        <div>
            <span > 
                <h3>CAST</h3>
                <CastTvshow tvshow={tvshowId}/> 
            </span>
            <span >
                <h3>SERIES SIMILARES</h3> 
                <SimilarTvshows tvshow={tvshowId}/> 
            </span>
        </div>
    </div>
    
}
export default TvshowDetails;
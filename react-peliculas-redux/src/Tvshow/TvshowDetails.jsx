import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setTvshowDetailsAction} from '../reduxapp/actions.js';
import MyGenres from '../Movies/MovieDetails/MyGenres.jsx';
import CastTvshow from './CastTvshow.jsx';
import SimilarTvshows from './SimilarTvshows.jsx';
import './TvshowDetails.scss';

const TvshowDetails = (props)=>{
    
    const tvshowId = props.match.params.tvshowId;
    
    //Estado Global
    const tvshowDetails = useSelector( (state) => state.tvshowDetails); 
    //console.log('TVSHOWDETAILS.estado del detalle de la serie de la app es ', tvshowDetails);

    //DISPATCH
    const dispatch = useDispatch();
    
    //petición del detalle según tvShowId
    useEffect(() =>{
        setTvshowDetailsAction(dispatch, tvshowId);
    }, [dispatch, tvshowId]) //incluimos dispatch para no warning de pérdida de dependencia

    //!!!!!!!!!!!!explicar lo que haces con géneros, países, actores y pelis similares
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
                    {tvshowDetails.genres?.map((genre) => <MyGenres key={genre.id} id={genre.id} value={genre.name}/>)}
                </div>
            </span>
        </div>
        <div>
            <span > 
                <h3>CAST</h3>
                <CastTvshow tvshowId={tvshowId}/> 
            </span>
            <span >
                <h3>SERIES SIMILARES</h3> 
                <SimilarTvshows tvshowId={tvshowId}/> 
            </span>
        </div>
         
    
    </div>
    
}
export default TvshowDetails;
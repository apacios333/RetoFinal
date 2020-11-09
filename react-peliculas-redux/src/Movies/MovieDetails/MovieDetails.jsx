import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { setMovieDetailsAction } from '../../reduxapp/actions.js';
import MyGenres from './MyGenres.jsx';
import MyCountries from './MyCountries.jsx';
import Cast from './Cast.jsx';
import SimilarMovies from './SimilarMovies.jsx';
import './MovieDetails.scss';

const MovieDetails = (props)=>{
    
    const movieId = props.match.params.movieId;
    
    //Estado Global
    const movieDetails = useSelector( (state) => state.movieDetails); 
    //console.log('MOVIESDETAILS.estado de moviesDetails de la app es ', movieDetails);
        
    //DISPATCH
    const dispatch = useDispatch();
    
    //petición del detalle según movieId
    useEffect(() =>{
        setMovieDetailsAction(dispatch, movieId);
    }, [dispatch, movieId]) //incluimos dispatch para no warning de pérdida de dependencia
    
    //Detalle de la película. Se incluye géneros a los que pertenece <MyGenres/>, y países de producción <MyCountries/>
    return <div className="MovieDetails">
        <div className="Detail">
            <span className="DetailName">
                <h2>{movieDetails.title}</h2>
                <p>{"(" + movieDetails.release_date + ")" + " ("+ movieDetails.runtime + "')"}</p>
                <img src={"https://image.tmdb.org/t/p/w300"+ movieDetails.poster_path} alt="imagen de la película"></img>
                <p>{"Votos: " +movieDetails.vote_average}</p>
            </span>
            <span className="DetailSummary">
                <h3>Resumen</h3> 
                <p>{movieDetails.overview}</p>
                <p>{"* Título original: " + movieDetails.original_title + " * Idioma original: " + movieDetails.original_language }</p>
                
                <p>{"Popularidad: "+ movieDetails.popularity}</p>    
                <div>
                    {movieDetails.genres?.map((genre, index) => <MyGenres key={index} id={genre.id} value={genre.name}/>)}
                </div>
                <div>
                    {movieDetails.production_countries?.map((countrie, index) => <MyCountries key={index} id={countrie.id} value={countrie.name}/>)}
                </div>
            </span>
        </div>
        <div>
            <span > 
                <h3>CAST</h3>
                <Cast movie={movieId}/> 
            </span>
            <span >
                <h3>PELÍCULAS SIMILARES</h3> 
                <SimilarMovies movie={movieId}/> 
            </span>
        </div>
         
    
    </div>
    
}
export default MovieDetails;
    
    






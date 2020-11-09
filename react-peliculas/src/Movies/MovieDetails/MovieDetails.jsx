import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyGenres from './MyGenres.jsx';
import MyCountries from './MyCountries.jsx';
import Cast from './Cast.jsx';
import SimilarMovies from './SimilarMovies.jsx';
import './MovieDetails.scss';

const MovieDetails = (props)=>{
    
    const movieId = props.match.params.movieId;
    const [movieDetails, setMovieDetails] = useState([]);
    const [myGenres, setMyGenres] = useState([]);
    const [myCountries, setMyCountries] = useState([]);
    
    //petición del detalle según movieId
    useEffect(()=> {  
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES`)
        .then(res => {
            setMovieDetails(res.data);
            console.log(res.data);
            setMyGenres(res.data.genres);
            setMyCountries(res.data.production_countries);
        })
        .catch(console.error) 
    }, [movieId])

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
                    {myGenres?.map((genre) => <MyGenres key={genre.id} id={genre.id} value={genre.name}/>)}
                </div>
                <div>
                    {myCountries?.map((countrie) => <MyCountries key={countrie.id} id={countrie.id} value={countrie.name}/>)}
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
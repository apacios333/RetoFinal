import React from "react";
import { NavLink } from 'react-router-dom';

const Movie = ({movie}) =>{ //desestructuramos la prop directamente (recibe el objeto movie por la prop "movie") o podríamos poner props.movie tb
    return (
    <NavLink to= {`/movie/${movie.id}`}>
        <div className="movie">
            <h4>{movie.title}</h4>
            <img src={"https://image.tmdb.org/t/p/w185"+ movie.poster_path} alt="imagen de la película"></img>
            <p>{movie.vote_average}</p>
        </div>
    </NavLink>)
}

export default Movie;


import React from "react";
import { NavLink } from 'react-router-dom';


const Tvshow = ({tvshow}) =>{ 
    return ( 
        <NavLink to= {`/tvshow/${tvshow.id}`}>
            <div className="Tvshow">
                <h4>{tvshow.name}</h4>
                <img src={"https://image.tmdb.org/t/p/w185"+ tvshow.poster_path} alt="imagen de la película"></img>
                <p>{tvshow.vote_average}</p>
            </div>
        </NavLink>)
}

export default Tvshow;
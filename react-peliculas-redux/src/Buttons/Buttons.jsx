import React from "react";
import { NavLink } from "react-router-dom";
import './Buttons.scss';
const Buttons = ()=>{
    return(
        <div className="Buttons">
            <h1>Reto Final - React APP API TMDB -</h1>
            <NavLink to="/popular">
                <span className="popular">Popular</span>
            </NavLink>
            <NavLink to="/upcoming">
                <span className="upcoming">Próximas</span>
            </NavLink>
            <NavLink to="/top_rated">
                <span className="top_rated">Top10</span>
            </NavLink>
            <NavLink to="/genres">
                <span className="genres">Géneros</span>
            </NavLink>  
        </div>

    )
}

export default Buttons;
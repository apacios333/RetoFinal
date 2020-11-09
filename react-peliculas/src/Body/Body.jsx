import React from "react";
import { NavLink } from "react-router-dom";
import './Body.scss';

const Body = ()=>{
    return(
        <NavLink to="/">
            <div className="Body"></div>
        </NavLink>      
    )
}

export default Body;
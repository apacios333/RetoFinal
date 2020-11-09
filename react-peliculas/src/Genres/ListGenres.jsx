import React from 'react';
import { NavLink } from 'react-router-dom';

//Devuelve el listado de géneros. En props lleva el nombre de cada género pasado por el estado de <Genre/>
const ListGeneros = props =>{
    return (
        <NavLink to= {`/genres/${props.value}/${props.id}`}>
            <li > {props.value} </li>
        </NavLink>
    )
}

export default ListGeneros;

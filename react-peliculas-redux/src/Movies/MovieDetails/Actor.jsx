import React from 'react';


//Devuelve el listado actores. Recibe el objeto actor y devuelve detalles del cast
const Actor = ({actor}) =>{
    return ( 
    <div className="Actor">   
        <img src={"https://image.tmdb.org/t/p/w185"+ actor.profile_path} alt="imagen del actor"></img>
        <h6>{actor.character}</h6>
        <p>{actor.name}</p>     
    </div>
    )
}

export default Actor;


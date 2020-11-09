import React from 'react';

//renderizo generos a los que pertenece la movie
const MyGenres = props =>{
    return (
            <span> {props.value + "/"} </span>
    )
}

export default MyGenres;
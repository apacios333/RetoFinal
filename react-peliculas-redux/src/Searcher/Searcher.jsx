import React, {useState} from 'react';
import { NavLink } from "react-router-dom";

import './Searcher.scss';

const Searcher = () =>{
    
    //inicializamos a vacío los estados del input  
    const [inputMovies, setInputMovies] = useState('');
    const [inputTvshows, setInputTvshows] = useState('');

    //estado placeholders
    const [placeholderMovies, setPlaceholderMovies]= useState('Buscar PELÍCULA por título');
    const [placeholderTvshows, setPlaceholderTvshows]= useState('Buscar SERIE por título');

  
    //capturar el valor del input
    const handleChange = (event) => {
        if(event.target.name === "Tvshows") setInputTvshows(event.target.value);
        else setInputMovies(event.target.value);
    }  
    
    //limpiar inputs
    const resetInput = () => {
        setInputMovies('');
        setInputTvshows('');
    }

    //buscar película o serie al pulsar botón. resetea estados input y cambiar placeholders
    const handleOnClick = (event) => { 
        if(event.target.name !== "Tvshows"){
            if (inputMovies !=='') {
                resetInput();
                setPlaceholderMovies('Buscar PELÍCULA por título');
            }
            else setPlaceholderMovies('Introduce un TÍTULO de PELÍCULA'); 
        }
        else {
            if (inputTvshows !=='') {
                resetInput();
                setPlaceholderTvshows('Buscar SERIE por título');
            }
            else setPlaceholderTvshows('Introduce un TÍTULO de SERIE');
        }
    }

    return(
        <form className= "Searcher">
            <div>
                <input className= "SearcherInput" type="text" value={inputMovies} onChange={handleChange}  placeholder={placeholderMovies}/>
                <NavLink to={`/searcher/${inputMovies}`}>
                    <button className= "SearcherButton" type="button" onClick={handleOnClick}>Buscar Película</button>
                </NavLink>
            </div>
            
             <div>
                <input className= "SearcherInput" name="Tvshows" type="text" value={inputTvshows} onChange={handleChange} placeholder={placeholderTvshows}/>
                <NavLink to={`/searcherTvshows/${inputTvshows}`}>
                    <button className= "SearcherButton" type="button" name="Tvshows" onClick={handleOnClick}>Buscar Serie</button>
                </NavLink>
            </div>        
        </form>       
    )
}

export default Searcher; 
  
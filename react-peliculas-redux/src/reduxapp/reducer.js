
//Estado inicial
const initialState= {
    //estado inicial de <TvshowsSearch/>
    tvshowsSearch: [],
    //estado inicial de <TvshowDetails/> 
    tvshowDetails: [],
    //estado inicial de <Cast/> o <CastTvshow/> 
    cast: [],
    //estado inicial de <SimilarTvshows/> 
    tvshows: [],
    //estado inicial de <Movies/> , <MoviesSearch/>, <SimilarMovies/> o <GenreMovies/> 
    movies: [], 
    //estado inicial de <MovieDetails/> 
    movieDetails: [],
    //estado inicial de <Genres/> 
    genresList: [],
};

//El reducer recibe el estado de la app y una acción, y devuelve un nuevo estado
function reducer(state=initialState, action){
    //console.log(action);
    
    switch (action.type){
        case 'SET_MOVIES_SEARCH': {
            //console.log('REDUCER. voy a actualizar las películas del buscador');
            return {
                ...state,
                movies: action.payload,
            }
        }
        case 'SET_TV_SHOWS_SEARCH': {
            //console.log('REDUCER. voy a actualizar las series del buscador');
            return {
                ...state,
                tvshowsSearch: action.payload,
            }
        }
        case 'SET_TV_SHOW_DETAILS': {
            //console.log('REDUCER. voy a actualizar el detalle de la serie');
            return {
                ...state,
                tvshowDetails: action.payload,
            }
        }
        case 'SET_CAST_TV_SHOW': {
            //console.log('REDUCER. voy a actualizar el cast de la serie');
            return {
                ...state,
                cast: action.payload,
            }
        }
        case 'SET_SIMILAR_TV_SHOWS': {
            //console.log('REDUCER. voy a actualizar series similares a la serie');
            return {
                ...state,
                tvshows: action.payload,
            }
        }               
        case 'SET_MOVIES': {
            //console.log('REDUCER. voy a actualizar la lista de pelis');
            return {
                ...state, //spread del estado antiguo. Copia del estado antiguo
                movies: action.payload, //sobreescribimos la propiedad payload del estado movies con la acción SET_MOVIES
            }
        }       
        case 'SET_MOVIES_DETAILS': {
            //console.log('REDUCER. voy a actualizar la peli');
            return {
                ...state,
                movieDetails: action.payload,
            }
        }
        case 'SET_CAST_MOVIE': {
            //console.log('REDUCER. voy a actualizar el cast de la película');
            return {
                ...state,
                cast: action.payload,
            }
        }
        case 'SET_SIMILAR_MOVIES': {
            //console.log('REDUCER. voy a actualizar peliculas similares a la película');
            return {
                ...state,
                movies: action.payload,
            }
        }  
        case 'SET_GENRES_LIST': {
            //console.log('REDUCER. voy a actualizar los géneros');
            return {
                ...state,
                genresList: action.payload,
            }
        }
        case 'SET_GENRE_MOVIES': {
            //console.log('REDUCER. voy a actualizar las películas por género');
            return {
                ...state,
                movies: action.payload,
            }
        }                   
        default: return state; //devuelve el estado inicial
    } 
}

export default reducer;
import React from "react";
import Buttons from '../Buttons/Buttons.jsx';
import Searcher from '../Searcher/Searcher.jsx';
import './Header.scss';

const Header = ()=>{
    return(
        <header>
            <Buttons/>
            <Searcher/>
        </header>
    )
}

export default Header;
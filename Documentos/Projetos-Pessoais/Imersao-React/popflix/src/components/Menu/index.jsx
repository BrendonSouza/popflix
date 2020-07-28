import React from 'react';
import Logo from '../../Assets/Logo.png';
import Button from '../Button';
//import ButtonLink from '../ButtonLink';
import './menu.css';
function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Popflix logo" />

            </a>
            <Button as="a" className="ButtonLink" href="/"> Novo vídeo</Button>
        </nav>
    );
}

export default Menu;
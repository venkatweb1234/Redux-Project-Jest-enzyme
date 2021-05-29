import React from 'react';
import './w3schhols.style.scss';
import Logo from '../../assets/logo/w3schoolslogo.png';

const Header = () =>{
    return (
       <header data-test="headerComponent">
           <div className="wrap">
               <div className="logo">
                <img data-test="logoIMG" src={Logo} alt="Logo" />
               </div>
           </div>
       </header>
    );
}

export default Header;
import React from 'react';
import '../component/w3schhols.style.scss';
import Logo from '../assets/logo/w3schoolslogo.png';

const Header = () =>{
    return (
       <header>
           <div className="wrap">
               <div className="logo">
                <img src={Logo} alt="Logo" />
               </div>
           </div>
       </header>
    );
}

export default Header;
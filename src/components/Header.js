import React from 'react'
import './Header.css'
import punklogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'



const Header = () => {
  return (
    <div>
        <div className="header">
        <div className="logoContainer">
            <img src={punklogo} className="punklogo" alt="punklogo" />
        </div>
        <div className="searchBar">
            <div className="searchIconContainer">
            <img src={searchIcon} className="searchicon" alt="searcchicon" />  
            </div>
            <input className="searchInput" placeholder="Collection,Items,Users"/>

        </div>
        <div className="headerItems">
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p>


        </div>

        <div className="headerActions" >
            <div className="themeSwitcher">
                <img src={themeSwitchIcon} alt="aaaa"/>

            </div>
            
        </div>

        <div className="loginBtn">GET IN</div>


        </div>
    </div>
  )
}

export default Header

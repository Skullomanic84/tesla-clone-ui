import React from 'react';
import './Header.css';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

function Header({menuOpen, setMenuOpen}) {
    return (
        <div className="header">
            <div className="header__logo">
                <Link to="/">
                    <img 
                    src="/images/logo.svg" alt=""
                    className='header__logoimg' />
                </Link>
            </div>
            <div className="header__links">
                <Link to="/">Model S</Link>
                <Link to="/">Model 3</Link>
                <Link to="/">Model X</Link>
                <Link to="/">Model Y</Link>
                <Link to="/">Solar Roof</Link>
                <Link to="/">Solar Panels</Link>
            </div>
            <div className="header__right">
                <Link to="/" className={menuOpen && 'header__link--hidden'}>Shop</Link>
                <Link to="/login" className={menuOpen && 'header__link--hidden'}>Account</Link>

                <div className="header__menu"
                onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <CloseIcon/> : <MenuOpenIcon/>}
                </div>
            </div>
        </div>
    )
}

export default Header

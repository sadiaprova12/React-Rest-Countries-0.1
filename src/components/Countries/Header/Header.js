import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Welcome to my React Rest Countries</h2>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact Us</a>
            </nav>
        </div>
    );
};

export default Header;
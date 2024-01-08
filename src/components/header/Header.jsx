import React from 'react';
import "./Header.css";



export default function Header() {
  return (
    <div className='header'>
        <a href="#">
            <img src="" alt="LOGO" />
        </a>
        <ul className="header__list">
            <li className="header__list--item">
                <a href="#" className="header__list--item__linK">
                    home
                </a>
            </li>
            <li className="header__list--item">
                <a href="#" className="header__list--item__linK">
                    about
                </a>
            </li>
            <li className="header__list--item">
                <a href="#" className="header__list--item__linK">
                    contact us
                </a>
            </li>
            <li className="header__list--item">
                <a href="#" className="header__list--item__linK">
                    services
                </a>
            </li>
            

        </ul>

        <button>
            Log in
        </button>


    </div>
  )
}










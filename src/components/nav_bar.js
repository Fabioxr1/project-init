import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = (props) => {
    const style =  { color: ' #fff ', background:'#007bff' }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <NavLink exact to="/"
                          className="nav-link"
                          activeStyle={style}
                        >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/grafic/"
                            className="nav-link"
                            activeStyle={style}
                        >Grafic</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/news/"
                            className="nav-link"
                            activeStyle={style}
                        >Notizie</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink to="/newpost/"
                            className="nav-link"
                            activeStyle={style}
                        >Aggiungi</NavLink>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
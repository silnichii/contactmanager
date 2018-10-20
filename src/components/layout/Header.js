import React from 'react';
import { Link } from 'react-router-dom';


function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0" >
        <div className="container">
          <p href="#" className="navbar-brand">{props.logo}</p>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link mx-1">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/add" className="nav-link mx-1">Add contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link mx-1">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SearchBar from '../Search/SearchBar';
import ShoppingCartIcon from '../Cart/ShoppingCartIcon';
import SecondNav from '../SecondNav/SecondNav.js';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
        <ShoppingCartIcon />
      </>
    );
  } else {
    sessionLinks = (
      <div className="auth-links">
        <LoginFormModal />
        <NavLink to="/register" className="register">Register</NavLink>
      </div>
    );
  }

  return (
    <div className="nav-container">
      <ul>
        <li >
          <div className="navbar">
            <NavLink className="sixpence-logo" exact to="/">Sixpence</NavLink>
            <SearchBar />
            {isLoaded && sessionLinks}
          </div>
        </li>
      </ul>
      <div className="second-nav-container">
        <SecondNav />
      </div>
    </div>
  );
}

export default Navigation;

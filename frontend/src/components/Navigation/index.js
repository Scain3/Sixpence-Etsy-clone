import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SearchBar from '../Search/SearchBar';
import ShoppingCart from '../Cart/ShoppingCart';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
        <ShoppingCart />
      </>
    );
  } else {
    sessionLinks = (
      <div className="auth-links">
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <ul>
      <li >
        <div className="navbar">
          <NavLink className="sixpence-logo" exact to="/">Sixpence</NavLink>
          <SearchBar />
          {isLoaded && sessionLinks}
        </div>
      </li>
    </ul>
  );
}

export default Navigation;

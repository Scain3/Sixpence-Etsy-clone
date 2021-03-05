import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SearchBar from '../Search/SearchBar';
import ShoppingCartIcon from '../Cart/ShoppingCartIcon';
import SecondNav from '../SecondNav/SecondNav.js';
import {login} from '../../store/session';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);

  const demoLogin = () => {
    const email = 'demo@user.io';
    const password = 'password';
    return dispatch(login({email, password}))
        .catch((res) => {
            if (res.data && res.data.errors) setErrors(res.data.errors);
        });
  }

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
        <span className=".demo-container">
          <button className="Demo-login" onClick={demoLogin}>Demo Login</button>
        </span>
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

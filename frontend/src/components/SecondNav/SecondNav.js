import {NavLink} from 'react-router-dom';
import React from 'react';
import {useDispatch} from "react-redux";
import {fetchProducts} from "../../store/product";
import './SecondNav.css';


function SecondNav(){
    const dispatch = useDispatch();

    return(
        <div className="categories-container">

            <div><NavLink className="categories something-old" to="/something-old" onClick={()=>{dispatch(fetchProducts())}}>Something Old</NavLink></div>

            <div>
                <NavLink className="categories something-new" to="/something-new" onClick={()=>{dispatch(fetchProducts())}}>Something New</NavLink>
            </div>

            <div>
                <NavLink className="categories something-borrowed" to="/something-borrowed" onClick={()=>{dispatch(fetchProducts())}}>Something Borrowed</NavLink>
            </div>

            <div>
                <NavLink className="categories something-blue" to="/something-blue" onClick={()=>{dispatch(fetchProducts())}}>Something Blue</NavLink>
            </div>

        </div>
    )
}

export default SecondNav;

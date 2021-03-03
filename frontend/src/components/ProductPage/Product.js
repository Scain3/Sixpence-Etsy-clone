import { useEffect } from "react";
// import * as productActions from "../../store/product";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from '../../store/product';
import ProductItem  from "../ProductPage/ProductItem";
import './Product.css';

function Productpage(){
    const products = useSelector(state => state.products);
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    console.log(user);

    useEffect(() => {
            dispatch(fetchProducts());
    }, [dispatch])

    if(!products){
        return null;
    }

    const productsArr = Object.values(products);
    if(user){
        return(
            <div>
                <h1 className="welcome-message">Welcome to Sixpence, {user.username}</h1>
                <div className="productContainer">
                {productsArr.map((productItem)=>(
                    <ProductItem key={productItem.id} product={productItem} />
                ))}
            </div>
            </div>
        )
    }
    return(
            <div className="productContainer">
                {productsArr.map((productItem)=>(
                    <ProductItem key={productItem.id} product={productItem} />
                ))}
            </div>

    )
}

export default Productpage;

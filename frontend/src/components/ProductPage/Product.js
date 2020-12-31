import { useEffect } from "react";
// import * as productActions from "../../store/product";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from '../../store/product';
import ProductItem  from "../ProductPage/ProductItem";
import './Product.css';

function Productpage(){
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(fetchProducts());
    }, [dispatch])
    
    if(!products){
        return null;
    }
    const productsArr = Object.values(products);
    return(
        <div className="productContainer">
            {productsArr.map((productItem)=>(
                <ProductItem key={productItem.id} product={productItem} />
             ))}
        </div>
    )
}

export default Productpage;

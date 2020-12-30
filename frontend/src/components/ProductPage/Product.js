import { useEffect } from "react";
// import * as productActions from "../../store/product";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from '../../store/product';
import ProductItem  from "../ProductPage/ProductItem";
import './Product.css';

function Productpage(){
    const products = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(fetchProducts());
    }, [dispatch])

    return(
        <div className="productContainer">
            {products.map((productItem)=>(
                <ProductItem product={productItem} />
             ))}
        </div>
    )
}

export default Productpage;

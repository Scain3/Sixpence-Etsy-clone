import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useParams, useHistory } from "react-router-dom";

import { fetchSingleProduct } from "../../store/product";

import { addItemToCart } from "../../store/cart";

import "./Product.css";

function SingleProductPage(){
    const user = useSelector(state => state.session.user);
    const products = useSelector(state => state.products);
    const { id } = useParams();
    const dispatch = useDispatch();
    const singleItem = products[id];
    const history = useHistory();

    useEffect(()=> {
        if(singleItem) return
        dispatch(fetchSingleProduct(id));
    }, [id, dispatch, singleItem])

    const handleClick = () => {
        if(!user){
         return history.push('/login');
        }
        dispatch(addItemToCart(singleItem.id, user.id));
    }

    if(!singleItem) return null
    return(
        <div className="productContainer">
                <div>
                    <div className="image-block">
                        <h1>{singleItem.title}</h1>
                        <img className="single-image" src={singleItem.image} alt={singleItem.title} />
                        <h4>${singleItem.price}</h4>
                        <button onClick={handleClick}>Add To Cart</button>
                    </div>
                    <div className="description">
                            <p>{singleItem.description}</p>
                    </div>
                </div>
        </div>
    )
}

export default SingleProductPage;

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import { fetchSingleProduct } from "../../store/product";

import "./Product.css";

function SingleProductPage(){
    const products = useSelector(state => state.products);
    const { id } = useParams();
    const dispatch = useDispatch();
    const singleItem = products[id]

    useEffect(()=> {
        if(singleItem) return
        dispatch(fetchSingleProduct(id));
    }, [id])
    console.log('single item', singleItem);
    if(!singleItem) return null
    return(
        <div className="productContainer">
                <div>
                    <div className="image-block">
                        <h1>{singleItem.title}</h1>
                        <img className="single-image" src={singleItem.image} alt={singleItem.title} />
                        <h4>${singleItem.price}</h4>
                    </div>
                    <div className="description">
                            <p>{singleItem.description}</p>
                    </div>
                </div>
        </div>
    )
}

export default SingleProductPage;

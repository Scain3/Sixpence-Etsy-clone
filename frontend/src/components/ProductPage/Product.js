import { useEffect } from "react";
// import * as productActions from "../../store/product";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchProducts } from '../../store/product';
import './Product.css';

function Productpage(){
    const products = useSelector(state => state.product);
    const dispatch = useDispatch();
    const history = useHistory();



    useEffect(() => {
            dispatch(fetchProducts());
    }, [dispatch])



    return(
        <div className="productContainer">
            {products.map((productItem)=>(
                <div key={productItem.title}>
                    {/* <h3>{productItem.title}</h3> */}
                    <div className="image-block">
                        <img className="images" src={productItem.image} alt={productItem.title} onClick={()=> history.push(`/product/${productItem.id}`)} />
                        <h4>${productItem.price}</h4>
                        <button>Add To Cart</button>
                    </div>
                </div>
             ))}
        </div>
    )
}

export default Productpage;

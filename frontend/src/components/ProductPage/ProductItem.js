import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addItemToCart } from "../../store/cart";
import './Product.css';

function ProductItem(props){
    const productItem = props.product;
    const userId = useSelector(state => state.session.user.id);
    const dispatch = useDispatch();
    const history = useHistory();



    const handleClick = () => {
        console.log("userId", userId);
        const productId = productItem.id;
        console.log("productId", productId);
        dispatch(addItemToCart(productId, userId));
    }

    return(
        <div key={productItem.title}>
            <div className="image-block" >
                <img className="images" src={productItem.image} alt={productItem.title} onClick={()=> history.push(`/product/${productItem.id}`)} />
                <h4>${productItem.price}</h4>
                <button onClick={handleClick}>Add To Cart</button>
            </div>
        </div>
    )

}

export default ProductItem;

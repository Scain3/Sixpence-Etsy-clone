import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addItemToCart } from "../../store/cart";
import './Product.css';

function ProductItem(props){
    const productItem = props.product;
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();



    const handleClick = () => {
        if(!user){
         return history.push('/login');
        }
        const productId = productItem.id;
        dispatch(addItemToCart(productId, user.id));
    }

    return(
        <div key={productItem.title}>
            <div className="image-block" >
                <img className="images" src={productItem.image} alt={productItem.title} onClick={()=> history.push(`/product/${productItem.id}`)} />
                <h4 className="product-price">${productItem.price}</h4>
                {/* <button onClick={handleClick}>Add To Cart</button> */}
            </div>
        </div>
    )

}

export default ProductItem;

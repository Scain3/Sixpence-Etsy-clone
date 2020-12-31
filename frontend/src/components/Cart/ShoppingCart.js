import {useSelector, useDispatch} from "react-redux";
import {purchaseItems} from "../../store/cart";
import {removeItemFromCart} from "../../store/cart";
// import {useParams} from "react-router-dom";

function ShoppingCart(){
  const cart = useSelector(state => state.cart);
  const cartArr = Object.values(cart);
  // const {id} = useParams();
  const dispatch = useDispatch();

  // const handleClick = () => {

  //   dispatch(removeItemFromCart(id));
  // }

  return(
    <div>

    {cartArr.map((cartItem) => (

      <div key={cartItem.title}>
        <h3>{cartItem.title}</h3>
        <img src={cartItem.image} alt={cartItem.title} />
        <p>{cartItem.price}</p>
        <button onClick={()=> {dispatch(removeItemFromCart(cartItem.id))}}>Delete</button>
      </div>

    ))}
    </div>
  )

}

export default ShoppingCart;

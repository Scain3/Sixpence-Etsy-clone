import {useSelector, useDispatch} from "react-redux";
import {purchaseItems} from "../../store/cart";
import {removeItemFromCart} from "../../store/cart";
import './Cart.css';


function ShoppingCart(){
  const cart = useSelector(state => state.cart);
  const cartArr = Object.values(cart);
  const dispatch = useDispatch();

  if(cartArr.length === 0) return <h1>Your cart is empty!</h1>

  return(
    <div>
    {cartArr.map((cartItem) => (

      <div key={cartItem.title}>
        <h3>{cartItem.title}</h3>
        <img className="images" src={cartItem.image} alt={cartItem.title} />
        <p>{cartItem.price}</p>
        <button onClick={()=> {dispatch(removeItemFromCart(cartItem.id))}}>Remove</button>
      </div>

    ))}
    </div>
  )

}

export default ShoppingCart;

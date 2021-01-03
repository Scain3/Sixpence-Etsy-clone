import {useSelector, useDispatch} from "react-redux";
import {purchaseItems} from "../../store/cart";
import {removeItemFromCart} from "../../store/cart";
import './Cart.css';


function ShoppingCart(){
  const cart = useSelector(state => state.cart);
  const cartArr = Object.values(cart);
  const dispatch = useDispatch();

  if(cartArr.length === 0) return <h1>Your cart is empty!</h1>
  if(cartArr.length === 1) return (
    <div>
      <h2>There is 1 item in your cart!</h2>
      <h3>{cartArr[0].title}</h3>
      <img className="images" src={cartArr[0].image} alt={cartArr[0].title} />
      <p>{cartArr[0].price}</p>
      <button onClick={()=> {dispatch(removeItemFromCart(cartArr[0].id))}}>Remove</button>
    </div>
    )

  return(
    <div>
      <h2> There are {cartArr.length} items in your cart.</h2>
      <div>
      {cartArr.map((cartItem) => (

        <div key={cartItem.title}>
          <h3>{cartItem.title}</h3>
          <img className="images" src={cartItem.image} alt={cartItem.title} />
          <p className="price">{cartItem.price}</p>
          <button onClick={()=> {dispatch(removeItemFromCart(cartItem.id))}}>Remove</button>
        </div>

      ))}
      </div>
    </div>
  )

}

export default ShoppingCart;

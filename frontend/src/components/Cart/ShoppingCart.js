import {useSelector, useDispatch} from "react-redux";
import {purchaseItems} from "../../store/cart";

function ShoppingCart(){
const cart = useSelector(state => state.cart);

  return(
    <div>
    {cart.map((cartItem) => (
      <div>
        <h3>{cartItem.title}</h3>
        <img src={cartItem.image} alt={cartItem.title} />
        <p>{cartItem.price}</p>
      </div>

    ))}
    </div>
  )

}

export default ShoppingCart;

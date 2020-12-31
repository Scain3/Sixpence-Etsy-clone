import {useSelector, useDispatch} from "react-redux";
import {purchaseItems} from "../../store/cart";

function ShoppingCart(){
const cart = useSelector(state => state.cart);

  return(
    <div>

    {cart.map((cartItem) => (

      <div key={cartItem.title}>
        <h3>{cartItem.title}</h3>
        <img src={cartItem.image} alt={cartItem.title} />
        <p>{cartItem.price}</p>
        <button>Delete</button>
      </div>

    ))}
    </div>
  )

}

export default ShoppingCart;

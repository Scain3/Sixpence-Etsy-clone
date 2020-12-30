import {useSelector, useDispatch} from "react-redux";
import {purchaseItems} from "../../store/cart";

function ShoppingCart(){
    const cart = useSelector(state => state.cart);
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    const cartItems = Object.values(cart)
        .map(item => {
            return {
                item,

            };
        });
    if(!cartItems || !cartItems.length) return (
        <div className='cart'>
            <h3>Your cart is empty.</h3>
            <h2>Discover something unique to fill up your cart.</h2>
        </div>
    )

    const onSubmit = (e) => {
        e.preventDefault();
        window.alert(
          "Purchased the following:\n" +
          `${cartItems.map(item => `${item.count} of ${item.name}`).join('\n')}`
        );
      }

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(purchaseItems(product.id))
      }

    return (
        <div className="cart">
          {/* <ul>
            {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
          </ul> */}
          <hr />
          <form onSubmit={onSubmit}>
            <button type="submit" onClick={handleClick}>Purchase</button>
          </form>
        </div>
      )

}

export default ShoppingCart;

import {useSelector, useDispatch} from "react-redux";

function ShoppingCart(){
    const cart = useSelector(state => state.cart);
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    const cartItems = Object.values(cart)
        .map(item => {
            return {
                ...item,
                ...product[item.id]
            };
        });
    if(!cartItems || !cartItems.length) return (
        <div className='cart'>
            <h3>Your cart is empty.</h3>
            <h2>Discover something unique to fill up.</h2>
        </div>
    )

}

export default ShoppingCart;

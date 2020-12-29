import {useSelector, useDispatch} from "react-redux";

function ShoppingCart(){
    const cart = useSelector(state => state.cart);
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

}

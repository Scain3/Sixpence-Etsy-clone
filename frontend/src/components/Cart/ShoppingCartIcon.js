import { useHistory } from "react-router-dom";

function ShoppingCartIcon(){
    return(
        <i className="fas fa-shopping-cart" onClick={()=> history.pushState(`/cart/${productItem.id}`)}></i>
    )
}

export default ShoppingCartIcon;

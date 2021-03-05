import { useHistory } from "react-router-dom";
import './Product.css';

function ProductItem(props){
    const productItem = props.product;
    const history = useHistory();


    return(
        <div key={productItem.title}>
            <div className="image-block" >
                <img className="images" src={productItem.image} alt={productItem.title} onClick={()=> history.push(`/product/${productItem.id}`)} />
                <h4 className="product-price">${productItem.price}</h4>
            </div>
        </div>
    )

}

export default ProductItem;

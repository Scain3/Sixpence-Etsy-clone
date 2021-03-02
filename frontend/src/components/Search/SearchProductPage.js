import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Search.css";


function SearchProductPage(){
    const history = useHistory();
    const products = useSelector(state => state.search);

    return(
        <div className="search-landing-div">
            {products.map((product)=>(
                <div className="product-div" key={product.title} onClick={()=>history.push(`product/${product.id}`)}>
                    <div className="product-obj">
                        <img className="images" src={product.image} alt={product.title} />
                        <div className="product-words">
                            <div calssName="product-title">{product.title}</div>
                            <div className="product-price">{product.price}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SearchProductPage;

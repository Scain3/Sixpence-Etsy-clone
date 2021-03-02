import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Search.css";


function SearchProductPage(){
    const history = useHistory();
    const products = useSelector(state => state.search);

    return(
        <div>
            {products.map((product)=>(
                <div key={product.title} onClick={()=>history.push(`product/${product.id}`)}>
                    <img className="images" src={product.image} alt={product.title} />
                    <h1>{product.title}</h1>
                    <h3>{product.price}</h3>
                </div>
            ))}
        </div>
    )
}

export default SearchProductPage;

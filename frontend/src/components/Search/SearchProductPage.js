import { useSelector } from "react-redux";
import "./Search.css";


function SearchProductPage(){
    const products = useSelector(state => state.search);

    return(
        <div>
            {products.map((product)=>(
                <div key={product.title}>
                    <h1>{product.title}</h1>
                    <img className="image" src={product.image} alt={product.title} />
                    <p className="description">{product.description}</p>
                </div>
            ))}
        </div>
    )
}

export default SearchProductPage;

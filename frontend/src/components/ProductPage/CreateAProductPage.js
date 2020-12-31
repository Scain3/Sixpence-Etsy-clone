import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './Product.css';



function CreateAProductPage(){
    const products = useSelector(state => state.products);
    const firstItem = products[0] || {};
    const history = useHistory();
    const dispatch = useDispatch();



    return(
        <div>
            <div>
                <h1>{firstItem.title}</h1>
                <img className="images" src={firstItem.image} alt={firstItem.title} />
                <p>{firstItem.description}</p>
                <h4>${firstItem.price}</h4>
            </div>
        </div>
    )
}

export default CreateAProductPage;

import {useSelector} from "react-redux";
import {useParams, useHistory} from "react-router-dom";
import './Category.css';

function SomethingNew(){
    const history = useHistory();
    const products = useSelector(state => Object.values(state.products));
    const newProduct = products.filter((product) => product.category === "Something New");
    console.log(products);
    console.log(newProduct);

    return(
       <div className="category-div">
           <div className="category-map">{
               newProduct && newProduct.map((newItem, index) => (
                   <div className="newItem-obj" key={index}>
                       <div><img className="new-img" src={newItem.image} /></div>
                       <div><h3 className="new-title">{newItem.title}</h3></div>
                       <div><h3 className="new-price">{newItem.price}</h3></div>
                   </div>
               ))
           }

           </div>
       </div>
    )
}

export default SomethingNew;

import {useSelector} from "react-redux";
import {useParams, useHistory} from "react-router-dom";

function SomethingBlue(){
    const history = useHistory();
    const products = useSelector(state => Object.values(state.products));
    const blue = products.filter((product) => product.category === "Something Blue");
    console.log(products);


    return(
       <div className="category-div">
           <div className="category-map">{
               blue && blue.map((blueItem, index) => (
                   <div className="blueItem-obj" key={index}>
                       <div><img className="new-img" src={blueItem.image} /></div>
                   </div>
               ))
           }

           </div>
       </div>
    )
}

export default SomethingBlue;

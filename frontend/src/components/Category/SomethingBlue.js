import {useSelector} from "react-redux";
import {useParams, useHistory} from "react-router-dom";
import './Category.css';

function SomethingBlue(){
    const history = useHistory();
    const products = useSelector(state => Object.values(state.products));
    const blue = products.filter((product) => product.category === "Something Blue");
    console.log(products);


    return(
       <div className="category-div">
           <p><strong>Something Blue</strong> is the last line in the wedding traditional rhyme. In this line it promotes that a bride must have something blue to bring good luck to the wedding day. Find your something blue today.</p>
           <div className="category-map">{
               blue && blue.map((blueItem, index) => (
                   <div className="blueItem-obj" key={index}>
                       <div><img className="blue-img" src={blueItem.image} /></div>
                       <div><h3 className="blue-title">{blueItem.title}</h3></div>
                       <div><h3 className="blue-price">{blueItem.price}</h3></div>
                   </div>
               ))
           }

           </div>
       </div>
    )
}

export default SomethingBlue;

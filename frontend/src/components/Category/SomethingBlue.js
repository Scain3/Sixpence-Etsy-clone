import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import './Category.css';

function SomethingBlue(){
    const history = useHistory();
    const products = useSelector(state => Object.values(state.products));
    const blue = products.filter((product) => product.category === "Something Blue");


    return(
       <div className="category-div">
           <p className="category-paragraph">Something Blue is the next to last line in the wedding traditional rhyme. In this line it promotes that a bride must have something blue to bring good luck to the wedding day. Find your something blue today.</p>
           <div className="category-map">{
               blue && blue.map((blueItem, index) => (
                   <div className="blueItem-obj" key={index} onClick={()=> history.push(`/product/${blueItem.id}`)}>
                       <div><img className="blue-img" src={blueItem.image} alt={blueItem.title} /></div>
                       <div><h3 className="blue-title">{blueItem.title}</h3></div>
                       <div><h3 className="blue-price">${blueItem.price}</h3></div>
                   </div>
               ))
           }

           </div>
       </div>
    )
}

export default SomethingBlue;

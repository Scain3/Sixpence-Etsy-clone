import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import './Category.css';

function SomethingOld(){
    const history = useHistory();
    const products = useSelector(state => Object.values(state.products));
    const old = products.filter((product) => product.category === "Something Old");


    return(
       <div className="category-div">
           <p className="category-paragraph">Something Old is the first line in the traditional rhyme representing good luck to the wedding and marriage. Here at Sixpence a bride can find gently used items to bring good luck to the wedding day.</p>
           <div className="category-map">{
               old && old.map((oldItem, index) => (
                   <div className="oldItem-obj" key={index} onClick={()=>history.push(`product/${oldItem.id}`)}>
                       <div><img className="old-img" src={oldItem.image} /></div>
                       <div><h3 className="old-title">{oldItem.title}</h3></div>
                       <div><h3 className="old-price">${oldItem.price}</h3></div>
                   </div>
               ))
           }

           </div>
       </div>
    )
}

export default SomethingOld;

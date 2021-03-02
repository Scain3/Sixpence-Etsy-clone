import {useSelector} from "react-redux";
import {useParams, useHistory} from "react-router-dom";
import './Category.css';

function SomethingOld(){
    const history = useHistory();
    const products = useSelector(state => Object.values(state.products));
    const old = products.filter((product) => product.category === "Something Old");
    

    return(
       <div className="category-div">
           <div className="category-map">{
               old && old.map((oldItem, index) => (
                   <div className="oldItem-obj" key={index}>
                       <div><img className="old-img" src={oldItem.image} /></div>
                   </div>
               ))
           }

           </div>
       </div>
    )
}

export default SomethingOld;

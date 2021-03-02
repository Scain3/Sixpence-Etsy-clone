import {useSelector} from "react-redux";
import {useParams, useHistory} from "react-router-dom";
import './Category.css';

function SomethingBorrowed(){
    const history = useHistory();
    const products = useSelector(state => Object.values(state.products));
    const borrowed = products.filter((product) => product.category === "Something Borrowed");
    console.log(products);


    return(
       <div className="category-div">
           <div className="category-map">{
               borrowed && borrowed.map((borrowedItem, index) => (
                   <div className="borrowed-obj" key={index}>
                       <div><img className="borrowed-img" src={borrowedItem.image} /></div>
                   </div>
               ))
           }

           </div>
       </div>
    )
}

export default SomethingBorrowed;

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
           <p className="category-paragraph">Something Borrowed is the third line in the traditional rhyme representing good luck to the wedding and marriage. Here at Sixpence a bride can borrow items from another generous bride who is not officially ready to part with that item. Borrowing an item brings good luck to the wedding day.</p>
           <div className="category-map">{
               borrowed && borrowed.map((borrowedItem, index) => (
                   <div className="borrowed-obj" key={index} onClick={()=> history.push(`/product/${borrowedItem.id}`)}>
                       <div><img className="borrowed-img" src={borrowedItem.image} /></div>
                       <div><h3 className="borrowed-title">{borrowed.title}</h3></div>
                       <div><h3 className="borrowed-price">${borrowed.price}</h3></div>
                   </div>
               ))
           }

           </div>
       </div>
    )
}

export default SomethingBorrowed;

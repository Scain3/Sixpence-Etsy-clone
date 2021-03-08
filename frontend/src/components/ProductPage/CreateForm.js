import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom";
import { fetchSetProducts } from "../../store/product";
import "./Product.css";



function CreateFormPage(){
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);
    const userId = useSelector(state => state.session.user.id);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const product = {sellerId: userId, title, category, description, image, price}
       const newProduct = await dispatch(fetchSetProducts(product));
        history.push(`/product/${newProduct.id}`);
    }

    return(
        <div className="createFormContainer">
            <h1 className="create-heading">Add To Your Store</h1>
            <form onSubmit={handleSubmit} className="createForm">
                <div className="create-div">
                    <div className="create-label-div">
                        <label className="create-label">Title</label>
                    </div>
                    <input className="createInputs" type="text" placeholder="Create A Title" value={title} onChange={(e)=> {setTitle(e.target.value)} } />
                </div>
                <div className="create-label-div">
                    <label className="create-label">Category</label>
                    <select

                        value={category}
                        onChange={(e) => {
                            const selectedCategory = e.target.value;
                            setCategory(selectedCategory);
                        }}
                    >
                        <option key='Something Old' value='Something Old'>Something Old</option>
                        <option key='Something New' value='Something New'>Something New</option>
                        <option key='Something Borrowed' value='Something Borrowed'>Something Borrowed</option>
                        <option key='Something Blue' value='Something Blue'>Something Blue</option>
                        {console.log('category',category)}

                    </select>

                </div>
                <div className="create-div">
                    <label className="create-label">Description</label>
                    <textarea className="createDescription" placeholder="Write A Fun Description" value={description} onChange={(e)=> {setDescription(e.target.value)}} />
                </div>
                <div className="create-div">
                    <label className="create-label">Add Image</label>
                    <input className="createInputs" type="text" placeholder="Place Image Of Your Product" value={image} onChange={(e) => {setImage(e.target.value)}} />
                </div>
                <div className="create-div">
                    <label className="create-label">Choose Price</label>
                    <input className="createInputs" type="number" placeholder="Choose Your Price" value={price} onChange={(e) => {setPrice(e.target.value)}} />
                </div>
                <button className="create-button">Add</button>
            </form>
        </div>
    )
}

export default CreateFormPage;

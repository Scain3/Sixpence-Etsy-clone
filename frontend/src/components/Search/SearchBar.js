import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { fetchSearchProduct } from "../../store/search";
import './Search.css'

function SearchBar(){
    const [search, setSearch] = useState();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchSearchProduct(search));
        history.push(`/search`)

    }

    return(
        <div className="form-container">
            <form className="nav-search_form" onSubmit={handleSubmit}>
                <input
                    className="search"
                    type="text"
                    placeholder="Search for your Wedding Essentials"
                    name="term"
                    value={search}
                    onChange={(e)=> {setSearch(e.target.value)}}
                />
                <button className="nav-search__submit" type="submit">
                    <i className="fas fa-search fa-lg"></i>
                </button>
            </form>
        </div>
    )
}

export default SearchBar;

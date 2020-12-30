import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { fetchSearchProduct } from "../../store/search";

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
        <form onSubmit={handleSubmit}>
            <input className="search" type="text" placeholder="Search for your Wedding Essentials" name="term" value={search} onChange={(e)=> {setSearch(e.target.value)}} />
        </form>
    )
}

export default SearchBar;

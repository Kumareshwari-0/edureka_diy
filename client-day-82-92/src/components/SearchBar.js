import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function SearchBar() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function FetchRest() {
            try {
                const result = await axios.get("http://localhost:8080/rest/getAllRestaurants");
                console.log(result.data);
                setItems(result.data);
            } catch (error) {
                console.log(error);
            }
        }

        FetchRest();
    }, []);

    const handleOnSearch = (string, results) => {
        console.log(string, results);
    };

    const handleOnHover = (result) => {
        console.log(result);
    };

    const handleOnSelect = (item) => {
        console.log(item);
        navigate(`/${item._id}`);
    };

    const handleOnFocus = () => {
        console.log('Focused');
    };

    const formatResult = (item) => {
        return (
            <div className='flex justify-between'>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
                <span className='px-3' style={{ display: 'block', textAlign: 'left' }}>
                    <button onClick={() => navigate(`/${item._id}`)} className='bg-red-500 px-2 py-1 text-white'>Order now</button>
                </span>
            </div>
        );
    };

    const itemsWithUniqueKeys = items.map((item, index) => ({
        id: item._id || index, // Use _id if available, otherwise fallback to index
        name: item.name,
        ...item
    }));

    return (
        <div>
            <header className="App-header">
                <div style={{ width: 400 }}>
                    <ReactSearchAutocomplete
                        items={itemsWithUniqueKeys}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                        formatResult={formatResult}
                    />
                </div>
            </header>
        </div>
    );
}

export default SearchBar;
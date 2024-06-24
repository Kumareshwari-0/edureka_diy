import axios from "axios";
import { useEffect, useState } from "react";

function DropDownSearch() {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get('http://localhost:8080/rest/getLocation');
                setOptions(result.data);
                console.log(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []); // empty dependency array to run effect only once on component mount

    const uniqueCities = Array.from(new Set(options.map(option => option.name)));

    return (
        <>
            <select className='px-2 py-1 rounded-full border-r-black'>
                <option value="1">Select Location</option>
                {uniqueCities.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                ))} 
            </select>
        </>
    );
}

export default DropDownSearch;
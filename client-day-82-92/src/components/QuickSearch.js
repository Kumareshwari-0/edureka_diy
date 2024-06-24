import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function QuickSearch() {
    const [data, setData] = useState([]);
    const navgate = useNavigate('')
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get('http://localhost:8080/rest/getAllMeal');
                console.log(result.data);
                setData(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="p-5">
            <h1 className="text-2xl py-5 font-bold text-red-600">Quick Search</h1>
            <div className="grid grid-cols-3 gap-7">
            {data.map((e, index) => (
                <div key={index} onClick={()=>navgate('/filter')} className="flex gap-10 shadow-lg ">
                     <img src={e.image} className="h-48  w-48" alt={e.image} />
                     <div >
                    <h1 className="text-2xl">{e.name}</h1>
                    <p>{e.content}</p>
                     </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default QuickSearch;
